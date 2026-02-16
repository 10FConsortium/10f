# Design: Merge 10f-explore into 10f

**Date:** 2026-02-16
**Status:** Approved
**Approach:** Monorepo with subdirectory (Approach A)

## Problem

The 10f-explore repo maintains a duplicate copy of all 15 forecast markdown files. Content drifts — the explore copy was already 9 days behind the canonical versions in 10f. Maintaining two repos with the same content is unsustainable.

Additionally, the chat needs to be embedded on the main Squarespace site (10fconsortium.org) as a dedicated page.

## Decisions

- **Merge into public repo**: Chat code moves into `10f/explore/` in the 10FConsortium/10f org repo
- **Single content source**: `chat.js` reads forecast files from the repo root, strips Jekyll frontmatter at load time
- **Dual deployment**: GitHub Pages (Jekyll) and Netlify (chat) coexist from the same repo without conflict
- **Iframe embedding**: Dedicated `/explore` page on Squarespace with full-page iframe pointing to Netlify URL
- **Own visual identity**: Chat keeps its current 10F design system, does not need to match Squarespace styles
- **Jekyll site preserved**: GitHub Pages build continues working, `explore/` excluded from Jekyll

## Repository Structure

```
10f/
├── _config.yml                     # Jekyll config (add exclude: [explore])
├── Gemfile
├── index.md
├── forecasts.md
├── 00 One Game to Many Games...md  # Forecast files (source of truth, unchanged)
├── 01 From Agreed Transparency...md
├── ...all forecast .md files...
├── 10F Master Index.md
├── 10F Contributors.md
├── docs/
├── explore/                        # Chat app
│   ├── public/
│   │   ├── index.html              # Chat frontend
│   │   └── logo-10f.png
│   ├── netlify/
│   │   └── functions/
│   │       └── chat.js             # Serverless function
│   ├── content/
│   │   └── system-prompt.md        # AI persona (app-specific)
│   ├── netlify.toml
│   ├── package.json
│   └── .env                        # Local dev only (gitignored)
├── .gitignore
└── CLAUDE.md
```

## chat.js Changes

### Path resolution

Read forecast files from repo root (two levels up from function directory):

```js
const forecastDir = path.join(__dirname, "../../..");
```

### File selection

Filter for numbered forecast files by pattern:

```js
const forecastFiles = fs.readdirSync(forecastDir)
  .filter(f => f.endsWith(".md") && /^(0[0-9A]|[1-9][0-9]?) /.test(f))
  .sort();
```

### Frontmatter stripping

Remove YAML frontmatter before concatenating into the corpus:

```js
function stripFrontmatter(content) {
  if (content.startsWith("---")) {
    const end = content.indexOf("---", 3);
    if (end !== -1) return content.slice(end + 3).trim();
  }
  return content;
}
```

## Netlify Configuration

`explore/netlify.toml`:

```toml
[build]
  base = "explore"
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

Key changes from current:
- `base = "explore"` roots Netlify in the subdirectory
- `X-Frame-Options = "ALLOWALL"` enables iframe embedding
- `Content-Security-Policy` with `frame-ancestors` restricts embedding to the Squarespace site only
- `included_files` reaches root-level forecasts with `../*.md`

CORS in `chat.js` unchanged — iframe loads the full app from Netlify, so API calls originate from the Netlify domain.

## Squarespace Embedding

New dedicated page at `/explore` with a Code Block containing:

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

- `height: 85vh` leaves room for Squarespace header/nav
- Optional: detect iframe context in `index.html` and hide the app header

## Jekyll Exclusion

`_config.yml` addition:

```yaml
exclude:
  - explore
  - node_modules
  - CLAUDE.md
```

## .gitignore Additions

```
explore/.env
explore/node_modules/
explore/.netlify/
```

## Migration Sequence

1. Create feature branch in 10f repo
2. Copy from 10f-explore: `public/`, `netlify/`, `content/system-prompt.md`, `package.json`, `package-lock.json`
3. Modify `chat.js` — new path resolution + frontmatter stripping
4. Create `explore/netlify.toml` with subdirectory config
5. Update `_config.yml` — add exclude
6. Update `.gitignore` — add explore entries
7. Update `CLAUDE.md` for merged repo
8. Connect Netlify to 10FConsortium/10f repo with base directory `explore`
9. Deploy and verify chat works
10. Test iframe embedding on Squarespace
11. Archive 10f-explore repo

## What Does NOT Change

- Root-level forecast files — untouched
- Jekyll build — unaffected (explore/ excluded)
- GitHub Pages deployment — unaffected
- Existing Netlify domain

## What Gets Deleted

- `explore/content/forecasts/` — entire directory, replaced by reading from root
- 10f-explore repo — archived after successful migration
