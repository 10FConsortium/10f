const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// Resolve content paths — repo root is three levels up from netlify/functions/
const repoRoot = path.join(__dirname, "../../..");
const contentDir = path.join(__dirname, "../../content");

// System prompt lives in explore/content/
const systemPrompt = fs.readFileSync(path.join(contentDir, "system-prompt.md"), "utf-8");

// Forecasts live at repo root as Jekyll markdown files with frontmatter
function stripFrontmatter(content) {
  if (content.startsWith("---")) {
    const end = content.indexOf("---", 3);
    if (end !== -1) return content.slice(end + 3).trim();
  }
  return content;
}

const forecastFiles = fs.readdirSync(repoRoot)
  .filter(f => f.endsWith(".md") && (/^0[0-9A][0-9A]? /.test(f) || /^[1-9][0-9]? /.test(f) || f.startsWith("10F ")))
  .sort()
  .map(f => stripFrontmatter(fs.readFileSync(path.join(repoRoot, f), "utf-8")));
const forecastCorpus = forecastFiles.join("\n\n---\n\n");

const client = new Anthropic();

// Rate limiting: in-memory store (use Redis/KV in production for multi-instance)
const rateLimits = new Map();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const RATE_LIMIT_MAX = 50; // 50 requests per hour per IP

// Cleanup old entries every 10 minutes to prevent memory bloat
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of rateLimits.entries()) {
    if (now > data.resetAt) {
      rateLimits.delete(key);
    }
  }
}, 600000);

function checkRateLimit(ip) {
  const now = Date.now();
  const key = ip;
  const limit = rateLimits.get(key);

  // Initialize or reset if window expired
  if (!limit || now > limit.resetAt) {
    rateLimits.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  // Check if limit exceeded
  if (limit.count >= RATE_LIMIT_MAX) {
    const resetInMinutes = Math.ceil((limit.resetAt - now) / 60000);
    return {
      allowed: false,
      resetIn: resetInMinutes,
      remaining: 0
    };
  }

  // Increment counter
  limit.count++;
  rateLimits.set(key, limit);
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX - limit.count
  };
}

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.URL || "http://localhost:8888",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

function parseSuggestions(text) {
  const marker = "---suggestions";
  const idx = text.lastIndexOf(marker);
  if (idx === -1) return { body: text.trim(), suggestions: [] };
  const body = text.slice(0, idx).trim();
  const suggestionBlock = text.slice(idx + marker.length);
  const suggestions = suggestionBlock
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0 && s !== "---");
  return { body, suggestions };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  // Extract IP from Netlify's trusted proxy headers
  // Note: These headers are set by Netlify's infrastructure and cannot be spoofed
  const ip = event.headers['x-forwarded-for']?.split(',')[0].trim() ||
             event.headers['client-ip'];

  if (!ip) {
    return {
      statusCode: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Request rejected: IP address required" })
    };
  }

  // Check rate limit
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return {
      statusCode: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({
        error: `Rate limit exceeded. You can send ${RATE_LIMIT_MAX} messages per hour. Try again in ${rateCheck.resetIn} minutes.`,
        resetIn: rateCheck.resetIn
      })
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid request" })
      };
    }

    if (messages.length > 10) {
      return {
        statusCode: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Conversation limit reached" })
      };
    }

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: [
        { type: "text", text: systemPrompt },
        { type: "text", text: forecastCorpus, cache_control: { type: "ephemeral" } }
      ],
      messages
    });

    const textBlock = response.content && response.content.find(b => b.type === "text");
    if (!textBlock) {
      console.error("Unexpected response shape:", JSON.stringify(response.content));
      throw new Error("No text in response");
    }
    const text = textBlock.text;
    const { body, suggestions } = parseSuggestions(text);

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "X-RateLimit-Limit": RATE_LIMIT_MAX.toString(),
        "X-RateLimit-Remaining": rateCheck.remaining.toString()
      },
      body: JSON.stringify({ response: body, suggestions })
    };
  } catch (err) {
    console.error("Chat function error:", err);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Something went wrong. Please try again." })
    };
  }
};
