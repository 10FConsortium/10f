# Repo Merge Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Merge the 10f-explore chat app into the 10f repo as an `explore/` subdirectory, eliminating duplicate forecast content and enabling iframe embedding on the Squarespace site.

**Architecture:** Chat app lives in `explore/`, reads forecast markdown from the repo root at function init time, strips Jekyll frontmatter before sending to Claude. Netlify deploys from the `explore/` subdirectory. GitHub Pages Jekyll build excludes `explore/`. Squarespace embeds via iframe on a dedicated `/explore` page.

**Tech Stack:** Netlify Functions, Anthropic SDK, vanilla HTML/CSS/JS, Jekyll (existing, untouched)

**Design doc:** `docs/plans/2026-02-16-repo-merge-design.md`

---

### Task 1: Create feature branch and explore directory

**Files:**
- Create: `explore/` directory

**Step 1: Create feature branch**

```bash
cd /Users/zeigor/GitHub/10f
git checkout -b feat/explore-merge
```

**Step 2: Create directory structure**

```bash
mkdir -p explore/public
mkdir -p explore/netlify/functions
mkdir -p explore/content
```

**Step 3: Commit**

```bash
git commit --allow-empty -m "feat: initialize explore directory for chat app merge"
```

---

### Task 2: Copy frontend files

**Files:**
- Copy: `10f-explore/public/index.html` → `explore/public/index.html`
- Copy: `10f-explore/public/logo-10f.png` → `explore/public/logo-10f.png`

**Step 1: Copy files**

```bash
cp /Users/zeigor/GitHub/10f-explore/public/index.html /Users/zeigor/GitHub/10f/explore/public/index.html
cp /Users/zeigor/GitHub/10f-explore/public/logo-10f.png /Users/zeigor/GitHub/10f/explore/public/logo-10f.png
```

**Step 2: Verify files exist**

```bash
ls -la /Users/zeigor/GitHub/10f/explore/public/
```

Expected: `index.html` (~20KB) and `logo-10f.png`

**Step 3: Commit**

```bash
cd /Users/zeigor/GitHub/10f
git add explore/public/
git commit -m "feat: add explore chat frontend files"
```

---

### Task 3: Copy system prompt

**Files:**
- Copy: `10f-explore/content/system-prompt.md` → `explore/content/system-prompt.md`

Note: Only the system prompt moves. The `content/forecasts/` directory is NOT copied — this is the whole point of the merge.

**Step 1: Copy file**

```bash
cp /Users/zeigor/GitHub/10f-explore/content/system-prompt.md /Users/zeigor/GitHub/10f/explore/content/system-prompt.md
```

**Step 2: Commit**

```bash
cd /Users/zeigor/GitHub/10f
git add explore/content/
git commit -m "feat: add explore chat system prompt"
```

---

### Task 4: Copy and modify chat.js

**Files:**
- Copy: `10f-explore/netlify/functions/chat.js` → `explore/netlify/functions/chat.js`
- Modify: `explore/netlify/functions/chat.js` (path resolution + frontmatter stripping)

**Step 1: Copy the original**

```bash
cp /Users/zeigor/GitHub/10f-explore/netlify/functions/chat.js /Users/zeigor/GitHub/10f/explore/netlify/functions/chat.js
```

**Step 2: Rewrite the content loading section**

Replace lines 1-22 of `chat.js` (everything from the top through `const forecastCorpus`) with:

```js
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
  .filter(f => f.endsWith(".md") && (/^(0[0-9A]|[1-9][0-9]?) /.test(f) || f.startsWith("10F ")))
  .sort()
  .map(f => stripFrontmatter(fs.readFileSync(path.join(repoRoot, f), "utf-8")));
const forecastCorpus = forecastFiles.join("\n\n---\n\n");
```

The regex `/^(0[0-9A]|[1-9][0-9]?) /` matches files starting with:
- `00 `, `01 `, ..., `09 `, `00A ` (numbered forecasts + framework docs)
- `10 ` (forecast 10)

The `f.startsWith("10F ")` catches `10F Contributors.md` and `10F Master Index.md`.

Everything below line 22 (from `const client = new Anthropic();` onward) stays exactly the same.

**Step 3: Verify the file loads all 15 forecast sources**

Count the matched files mentally:
- `00 One Game...` ✓
- `00 Reading and Applying...` ✓
- `00A The AREAS Framework...` ✓
- `01` through `10` (10 files) ✓
- `10F Contributors.md` ✓
- `10F Master Index.md` ✓

Total: 15 files ✓ (matches the 15 in the original explore repo)

**Step 4: Commit**

```bash
cd /Users/zeigor/GitHub/10f
git add explore/netlify/functions/chat.js
git commit -m "feat: adapt chat.js to read forecasts from repo root"
```

---

### Task 5: Create Netlify config

**Files:**
- Create: `explore/netlify.toml`

**Step 1: Write the config**

Write `explore/netlify.toml`:

```toml
[build]
  publish = "public"
  functions = "netlify/functions"

[functions]
  node_bundler = "esbuild"
  included_files = ["../*.md", "content/**"]

[functions."chat"]
  timeout = 60

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "ALLOWALL"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "frame-ancestors https://www.10fconsortium.org https://*.squarespace.com"
```

Note: `base` is set in Netlify's site settings UI (Build & deploy → Base directory → `explore`), not in the toml file. This avoids conflicts when the toml is inside the subdirectory.

**Step 2: Commit**

```bash
cd /Users/zeigor/GitHub/10f
git add explore/netlify.toml
git commit -m "feat: add Netlify config for explore subdirectory deployment"
```

---

### Task 6: Copy package.json

**Files:**
- Copy: `10f-explore/package.json` → `explore/package.json`
- Copy: `10f-explore/package-lock.json` → `explore/package-lock.json`

**Step 1: Copy files**

```bash
cp /Users/zeigor/GitHub/10f-explore/package.json /Users/zeigor/GitHub/10f/explore/package.json
cp /Users/zeigor/GitHub/10f-explore/package-lock.json /Users/zeigor/GitHub/10f/explore/package-lock.json
```

**Step 2: Commit**

```bash
cd /Users/zeigor/GitHub/10f
git add explore/package.json explore/package-lock.json
git commit -m "feat: add explore package dependencies"
```

---

### Task 7: Update Jekyll config to exclude explore

**Files:**
- Modify: `_config.yml:35-39` (extend exclude list)

**Step 1: Update the exclude list**

In `_config.yml`, the current exclude block is:

```yaml
exclude:
  - Gemfile
  - Gemfile.lock
  - README.md
  - LICENSE
```

Replace with:

```yaml
exclude:
  - Gemfile
  - Gemfile.lock
  - README.md
  - LICENSE
  - explore
  - node_modules
  - CLAUDE.md
```

**Step 2: Verify Jekyll still builds**

```bash
cd /Users/zeigor/GitHub/10f
bundle exec jekyll build 2>&1 | tail -5
```

Expected: build succeeds, no errors referencing explore/

**Step 3: Commit**

```bash
cd /Users/zeigor/GitHub/10f
git add _config.yml
git commit -m "build: exclude explore directory from Jekyll build"
```

---

### Task 8: Update .gitignore

**Files:**
- Modify: `.gitignore`

**Step 1: Append explore-specific entries**

Add to the end of `.gitignore`:

```
# Explore chat app
explore/.env
explore/node_modules/
explore/.netlify/
```

**Step 2: Commit**

```bash
cd /Users/zeigor/GitHub/10f
git add .gitignore
git commit -m "build: add explore-specific entries to .gitignore"
```

---

### Task 9: Update CLAUDE.md for merged repo

**Files:**
- Move and update: Create `CLAUDE.md` at repo root covering both the Jekyll site and the explore chat app

**Step 1: Write the CLAUDE.md**

Reference the CLAUDE.md already written in the 10f-explore repo but update it to reflect the merged structure:
- Describe the dual-deployment architecture (Jekyll + Netlify)
- Document that forecasts at root are the single source of truth
- Explain that `chat.js` reads from root and strips frontmatter
- Cover the content workflow (Google Drive → repo → Jekyll site + chat app)
- Keep the design system docs, frontend features, and development sections
- Add Jekyll site documentation alongside the explore docs

**Step 2: Commit**

```bash
cd /Users/zeigor/GitHub/10f
git add CLAUDE.md
git commit -m "docs: add CLAUDE.md for merged repo"
```

---

### Task 10: Verify local function works

**Step 1: Install dependencies**

```bash
cd /Users/zeigor/GitHub/10f/explore
npm install
```

**Step 2: Create local .env**

```bash
cp /Users/zeigor/GitHub/10f-explore/.env /Users/zeigor/GitHub/10f/explore/.env
```

**Step 3: Run Netlify dev**

```bash
cd /Users/zeigor/GitHub/10f/explore
npx netlify dev
```

**Step 4: Test in browser**

Open `http://localhost:8888` and send a test message. Verify:
- Chat loads and shows the opening message
- Responses reference forecast content correctly
- Suggestions appear as clickable chips
- No errors in the browser console or terminal

**Step 5: Stop the dev server**

Ctrl+C to stop.

---

### Task 11: Connect Netlify to the 10f repo

This is a manual step in the Netlify UI, not automated.

**Step 1: Push branch to remote**

```bash
cd /Users/zeigor/GitHub/10f
git push -u origin feat/explore-merge
```

**Step 2: In Netlify UI**

1. Go to the existing 10f-chat site settings (or create a new site)
2. Under "Build & deploy" → "Build settings":
   - Repository: `10FConsortium/10f`
   - Base directory: `explore`
   - Build command: `npm install`
   - Publish directory: `public`
   - Functions directory: `netlify/functions`
3. Under "Environment variables":
   - Add `ANTHROPIC_API_KEY` (copy from the old site's env vars)
4. Trigger a deploy from the `feat/explore-merge` branch to test

**Step 3: Verify the deployed site works**

Visit the Netlify preview URL and test the chat.

---

### Task 12: Merge and clean up

**Step 1: Merge to main**

```bash
cd /Users/zeigor/GitHub/10f
git checkout main
git merge feat/explore-merge
git push origin main
```

**Step 2: Verify production deploy**

Netlify should auto-deploy from main. Verify the chat works at the production URL.

**Step 3: Set up Squarespace embed**

In Squarespace editor:
1. Add a new page: "Explore" (slug: `/explore`)
2. Add a Code Block with:

```html
<div style="width:100%;height:85vh;overflow:hidden;">
  <iframe
    src="https://10f-chat.netlify.app"
    style="width:100%;height:100%;border:none;"
    allow="clipboard-write"
    loading="lazy"
    title="10F Explore — Chat with the forecasts"
  ></iframe>
</div>
```

3. Add "Explore" to the site navigation

**Step 4: Archive 10f-explore**

Once everything is verified:
- Go to `github.com/zeigor/10f-explore` → Settings → Archive repository
- This makes it read-only but preserves git history
