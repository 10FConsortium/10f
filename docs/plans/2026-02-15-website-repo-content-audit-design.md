# Website-to-Repo Content Audit Design

**Date:** 2026-02-15
**Goal:** Compare all forecast content on https://www.10fconsortium.org with GitHub repo markdown files and update repo to match website (source of truth)
**Scope:** 11 forecasts (F00-F10)
**Approach:** Sequential manual fetch and compare

---

## Objectives

1. Identify ALL textual differences between website and repo (substantive, structural, formatting)
2. Document every difference in a comprehensive audit report
3. Update repo markdown files to match website content exactly
4. Create audit trail via git commits

---

## Workflow

### Phase 1: Discovery
For each forecast (F00 through F10):
1. Fetch forecast page from website using WebFetch
2. Extract all content sections
3. Load corresponding repo markdown file
4. Perform section-by-section comparison

### Phase 2: Documentation
1. Create structured diff report documenting ALL differences
2. Categorize each difference (substantive/structural/formatting/missing)
3. Note action required (update repo to match website)

### Phase 3: Review
1. Present complete audit report to user
2. Confirm which changes to apply

### Phase 4: Application
1. Apply approved changes to repo files using Edit tool
2. Commit each file update with descriptive message
3. Reference audit report in commit messages

### Phase 5: Verification
1. Verify all changes applied correctly
2. Final summary of files updated

---

## URL-to-File Mapping

| Website URL | Repo File |
|-------------|-----------|
| `/forecast-index/f00-one-game-to-many` | `00 One Game to Many Games_ Understanding the Transformation.md` |
| `/forecast-index/f01-agreed-transparency-strategic-opacity` | `01 From Agreed Transparency to Engineered Opacity.md` |
| `/forecast-index/f02-political-spectrum-ideological-fog` | `02 From Political Spectrum to Ideological Fog.md` |
| `/forecast-index/f03-digital-empathy-localised-solidarity` | `03 From Digital Empathy to Localized Solidarity.md` |
| `/forecast-index/f04-special-relationship-strategic-situationship` | `04 From Special Relationships to Strategic Situationships.md` |
| `/forecast-index/f05-collective-climate-ambition-fragmented-adaptation` | `05 From Collective Climate Ambition to Fragmented Adaptation.md` |
| `/forecast-index/f06-open-society-tactical-shapeshifting` | `06 From Open Society to Strategic Opacity.md` |
| `/forecast-index/f07-selective-migration-people-asset-class` | `07 From Selective Migration to People as Asset Class.md` |
| `/forecast-index/f08-energy-hegemony-power-plurlality` | `08 From Energy Hegemony to Power Plurality.md` |
| `/forecast-index/f09-dollar-dominance-money-unbundled` | `09 From Dollar Dominance to Money Unbundled.md` |
| `/forecast-index/f10-technology-convergence-sovereign-systems` | `10 From Technology Convergence to Sovereign Systems.md` |

---

## Comparison Methodology

### Content Sections to Compare

For each forecast, compare these sections:
- Title
- Abstract/summary
- Key Domains
- Bottom Line
- Old Assumptions (all bullets)
- Emerging Norms (all bullets)
- The Transformation (narrative body)
- Strategic Blind Spots (all bullets)
- Global Implications (all bullets)
- AREAS Strategic Landscape (all 5 categories with bullets)
- Scenario Pathways (all scenarios with adaptive strategies)
- Current Signals (all signals with examples and URLs)

### Difference Detection

**Flag ALL differences including:**
- **Substantive:** Changed facts, arguments, examples, statistics, wording that alters meaning
- **Structural:** Reordered bullets, renamed sections, content moved between sections, added/removed sections
- **Formatting:** British vs American spelling, punctuation, capitalization, hyphenation
- **Missing:** Content exists on website but not in repo (or vice versa)

**Ignore ONLY:**
- Jekyll frontmatter (repo-specific metadata)
- Markdown syntax variations that produce identical rendered output (e.g., `**bold**` vs `__bold__`)

**Even minor changes matter:** A comma, a period, a single word—flag everything.

### Edge Cases

- **Section exists on website but not repo:** Flag as missing, add to repo
- **Section exists in repo but not on website:** Flag for clarification
- **Major content reorganization:** Document old structure vs new structure
- **Completely rewritten sections:** Show full before/after
- **Title mismatches:** Note and update repo to match website

---

## Diff Report Format

Create: `docs/audits/2026-02-15-website-repo-content-audit.md`

### Report Structure

```markdown
# Website-to-Repo Content Audit
Date: 2026-02-15
Auditor: Claude Sonnet 4.5
Source of Truth: Website (https://www.10fconsortium.org)

## Executive Summary
- Total forecasts audited: 11 (F00-F10)
- Forecasts with differences: X
- Total changes identified: Y
- Change breakdown:
  - Substantive: X
  - Structural: X
  - Formatting: X
  - Missing content: X

## Detailed Findings

### F00: From One Game to Many Games
**File:** `00 One Game to Many Games_ Understanding the Transformation.md`
**Website:** https://www.10fconsortium.org/forecast-index/f00-one-game-to-many

#### Differences Found: X

##### [1] Section: Title
**Website version:**
[exact text from website]

**Repo version:**
[exact text from repo]

**Change type:** [substantive|structural|formatting|missing]
**Action:** Update repo to match website

##### [2] Section: Abstract
[continue for all differences]

---

### F01: From Agreed Transparency to Engineered Opacity
[repeat format]

[... continue for all forecasts F00-F10]

## Summary of Files Requiring Updates

1. `00 One Game to Many Games_ Understanding the Transformation.md` — X changes
2. `01 From Agreed Transparency to Engineered Opacity.md` — X changes
[... list all files needing updates]

## Recommendations

- Apply all changes to synchronize repo with website
- Commit each file individually with reference to this audit
- Consider establishing process for ongoing synchronization
```

---

## Success Criteria

- [ ] All 11 forecasts (F00-F10) examined
- [ ] Every textual difference documented (no matter how small)
- [ ] Diff report created with clear before/after for each change
- [ ] All differences categorized by type
- [ ] Repo files updated to match website exactly
- [ ] Git commits created for each updated file
- [ ] Final verification that repo matches website

---

## Tools

- **WebFetch:** Retrieve website content
- **Read:** Load repo markdown files
- **Edit:** Apply changes to repo files
- **Write:** Create audit report
- **Bash/Git:** Commit changes with descriptive messages

---

## Timeline Estimate

- **Discovery Phase:** ~20-30 minutes (11 forecasts × 2-3 min each)
- **Documentation Phase:** ~15-20 minutes (formatting diff report)
- **Review Phase:** ~5-10 minutes (user review)
- **Application Phase:** ~15-25 minutes (applying changes)
- **Verification Phase:** ~5 minutes

**Total estimated time:** 60-90 minutes

---

## Notes

- This approach mirrors the successful F05 PDF-to-repo sync completed earlier today
- Website is established as source of truth per user confirmation
- Manual review ensures nuanced changes (like F05 Australia paragraph) are properly captured
- Future audits can reuse this methodology
