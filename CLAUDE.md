# 10F

Ten strategic forecasts mapping how global systems are fragmenting and reorganising through 2035. Published by the [10F Consortium](https://www.10fconsortium.org).

## Repository Structure

This repo serves two deployments from a single content source:

```
Root (forecast content — single source of truth)
├── 00 One Game to Many Games...md    # Framework docs (00, 00A)
├── 01 From Agreed Transparency...md  # Forecasts 01-10
├── ...
├── 10F Contributors.md
├── 10F Master Index.md
├── _config.yml                       # Jekyll config for GitHub Pages
├── Gemfile                           # Jekyll dependencies
├── explore/                          # Chat app (Netlify deployment)
│   ├── public/
│   │   ├── index.html                # Entire frontend (HTML + CSS + JS)
│   │   └── logo-10f.png
│   ├── netlify/
│   │   └── functions/
│   │       └── chat.js               # Serverless API → Claude Haiku 4.5
│   ├── content/
│   │   └── system-prompt.md          # AI persona and voice rules
│   ├── netlify.toml
│   └── package.json
└── docs/                             # Plans, audits, workflow docs
```

## Dual Deployment

| Deployment | Platform | Serves | URL |
|-----------|----------|--------|-----|
| Jekyll static site | GitHub Pages | Forecast browsing, search, reading | `10fconsortium.github.io/10f` |
| Explore chat | Netlify | Interactive AI chat with forecasts | Netlify URL, embedded via iframe on Squarespace |

Both read from the same root-level forecast markdown files. No duplicate content.

## Content Workflow

**Source of truth:** Google Drive markdown files (edited by Scott & Susan)
**Sync flow:** Google Drive → this GitHub repo → Jekyll site + chat app

Forecast files at root have Jekyll YAML frontmatter (layout, title, nav_order). The chat function strips this at load time. When updating forecasts, edit the root-level `.md` files — both deployments pick up changes automatically.

## Forecast Files

15 markdown files at the repo root. Each has Jekyll frontmatter followed by content:

```yaml
---
layout: default
title: "Forecast Title"
nav_order: N
parent: "Forecasts"
---
```

Structure: Abstract → Key Domains → Bottom Line → Old Assumptions → Emerging Norms → The Transformation → Strategic Blind Spots → Global System Implications → AREAS Strategic Landscape → Scenario Pathways → Adaptive Strategies → Current Signals

## Explore Chat App

### Architecture

Single-page vanilla app + serverless backend. No framework, no build step for frontend.

**Data flow:**
1. User sends message → conversation history collected in client-side `state.messages[]`
2. `POST /.netlify/functions/chat` with full message history
3. Backend reads forecast `.md` files from repo root, strips frontmatter, caches corpus
4. System prompt + corpus → Claude Haiku 4.5
5. Response parsed: body text + `---suggestions` block split server-side
6. Frontend renders: marked.js → DOMPurify → forecast auto-linking → DOM insert

### Key constraints

- **10-message conversation limit** (5 user turns) — enforced both client and server
- **50 requests/hour/IP** rate limit — in-memory Map, resets on function restart
- **2,048 max tokens** per response
- **Prompt caching** — forecast corpus uses `cache_control: { type: "ephemeral" }`
- **No persistent state** — conversations live only in the browser session

### Tech stack

- **Frontend**: Vanilla HTML/CSS/JS, marked.js (CDN), DOMPurify (CDN), Google Fonts (Karla, Inconsolata)
- **Backend**: Netlify Functions, Node.js, `@anthropic-ai/sdk` (only dependency)
- **Model**: `claude-haiku-4-5-20251001`

### Design system

**10F visual identity — sharp, minimal, monospace-accented.**

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#FF6123` | Orange accent, headings, links, CTAs |
| `--color-bg-dark` | `#191A1A` | Header, footer backgrounds |
| `--color-text` | `#0D0D0D` | Body text |
| `--color-bg-light` | `#FAFAF9` | Page background, text on dark |
| `--color-accent-warm` | `#FACF9F` | Secondary warm accent |

- **Typography**: Karla (body/headings, 400 weight), Inconsolata (buttons/interactive elements)
- **Geometry**: 0px border-radius everywhere
- **Weight through color**, not boldness
- **Monospace = interactive** — Inconsolata signals clickable elements

### AI behaviour

The system prompt (`explore/content/system-prompt.md`) defines voice and behaviour:

- **Matter-of-fact tone** — no encouragement, no filler warmth
- **Concise** — 2-3 paragraphs default
- **AREAS framework** as native grammar (Architecting, Resisting, Exploiting, Avoiding, Shaped)
- **Never prescriptive** — shows landscape, not path
- **British English** spelling
- **Suggestions block** required at end of every response using `---suggestions` delimiter
- **No internal references** — never mention file paths or `[[wiki-links]]`

### Frontend features

- **Forecast auto-linking**: Links "Forecast N, Title" and "AREAS" references to main site
- **Dynamic loading messages**: Rotating thematic messages during API wait
- **Conversation save**: Downloads chat as markdown after 3+ messages
- **Horizontal scroll suggestions**: Mobile-optimised with fade-out mask
- **Remaining questions counter**: Input placeholder shows questions left
- **Iframe-ready**: Headers configured for embedding on Squarespace

## Development

### Jekyll site

```bash
bundle install
bundle exec jekyll serve    # Local preview at localhost:4000
```

### Explore chat

```bash
cd explore
npm install
netlify dev                 # Local dev server at localhost:8888
```

Requires `explore/.env` with `ANTHROPIC_API_KEY`.

### File editing patterns

- **Forecast content**: Edit root-level `.md` files (affects both Jekyll site and chat)
- **Jekyll config**: `_config.yml`
- **Chat frontend**: `explore/public/index.html` (CSS, JS, HTML all inline)
- **Chat AI behaviour**: `explore/content/system-prompt.md`
- **Chat backend**: `explore/netlify/functions/chat.js`

### Deployment

- **Jekyll**: Push to `main` → GitHub Pages auto-builds
- **Chat**: Push to `main` → Netlify auto-deploys from `explore/` base directory
- **Squarespace**: Chat embedded via iframe on `/explore` page
