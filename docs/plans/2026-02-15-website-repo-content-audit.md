# Website-to-Repo Content Audit Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Compare all forecast content on https://www.10fconsortium.org with GitHub repo markdown files, document ALL differences, and update repo to match website (source of truth).

**Architecture:** Sequential manual comparison using WebFetch to retrieve each forecast page, Read to load repo files, manual diff analysis to identify all textual differences (substantive, structural, formatting), documented in comprehensive audit report, then batch update repo files.

**Tech Stack:** Claude tools (WebFetch, Read, Edit, Write), Git

---

## Prerequisites

**Working Directory:** `/Users/zeigor/GitHub/10f`

**Audit Report Location:** `docs/audits/2026-02-15-website-repo-content-audit.md`

**Forecast Mapping:**
- F00: `/forecast-index/f00-one-game-to-many` → `00 One Game to Many Games_ Understanding the Transformation.md`
- F01: `/forecast-index/f01-agreed-transparency-strategic-opacity` → `01 From Agreed Transparency to Engineered Opacity.md`
- F02: `/forecast-index/f02-political-spectrum-ideological-fog` → `02 From Political Spectrum to Ideological Fog.md`
- F03: `/forecast-index/f03-digital-empathy-localised-solidarity` → `03 From Digital Empathy to Localized Solidarity.md`
- F04: `/forecast-index/f04-special-relationship-strategic-situationship` → `04 From Special Relationships to Strategic Situationships.md`
- F05: `/forecast-index/f05-collective-climate-ambition-fragmented-adaptation` → `05 From Collective Climate Ambition to Fragmented Adaptation.md`
- F06: `/forecast-index/f06-open-society-tactical-shapeshifting` → `06 From Open Society to Strategic Opacity.md`
- F07: `/forecast-index/f07-selective-migration-people-asset-class` → `07 From Selective Migration to People as Asset Class.md`
- F08: `/forecast-index/f08-energy-hegemony-power-plurlality` → `08 From Energy Hegemony to Power Plurality.md`
- F09: `/forecast-index/f09-dollar-dominance-money-unbundled` → `09 From Dollar Dominance to Money Unbundled.md`
- F10: `/forecast-index/f10-technology-convergence-sovereign-systems` → `10 From Technology Convergence to Sovereign Systems.md`

---

## Task 1: Set Up Audit Infrastructure

**Files:**
- Create: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Create audits directory**

Run: `mkdir -p docs/audits`

Expected: Directory created (or already exists)

**Step 2: Initialize audit report**

Create `docs/audits/2026-02-15-website-repo-content-audit.md` with header:

```markdown
# Website-to-Repo Content Audit
Date: 2026-02-15
Auditor: Claude Sonnet 4.5
Source of Truth: Website (https://www.10fconsortium.org)

## Executive Summary
- Total forecasts audited: 11 (F00-F10)
- Forecasts with differences: [TBD]
- Total changes identified: [TBD]
- Change breakdown:
  - Substantive: [TBD]
  - Structural: [TBD]
  - Formatting: [TBD]
  - Missing content: [TBD]

## Detailed Findings

[Findings will be added as each forecast is audited]

## Summary of Files Requiring Updates

[Will be populated at end]

## Recommendations

- Apply all changes to synchronize repo with website
- Commit each file individually with reference to this audit
- Consider establishing process for ongoing synchronization
```

**Step 3: Commit audit infrastructure**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: initialize website-to-repo content audit report"
```

---

## Task 2: Audit F00 (One Game to Many Games)

**Files:**
- Read: `00 One Game to Many Games_ Understanding the Transformation.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F00 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f00-one-game-to-many
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

Expected: Full content from website

**Step 2: Load F00 from repo**

Run Read: `00 One Game to Many Games_ Understanding the Transformation.md`

Expected: Full markdown content

**Step 3: Compare section by section**

Manually compare:
- Title
- Abstract
- Key Domains
- Bottom Line
- Old Assumptions (each bullet)
- Emerging Norms (each bullet)
- The Transformation body text
- Strategic Blind Spots (each bullet)
- Global Implications (each bullet)
- AREAS Strategic Landscape (all 5 categories, each bullet)
- Scenario Pathways (all scenarios)
- Current Signals (all signals)

Flag EVERY difference (substantive, structural, formatting).

**Step 4: Document findings in audit report**

Append to audit report:

```markdown
### F00: From One Game to Many Games
**File:** `00 One Game to Many Games_ Understanding the Transformation.md`
**Website:** https://www.10fconsortium.org/forecast-index/f00-one-game-to-many

#### Differences Found: X

##### [1] Section: [Section Name]
**Website version:**
[exact text]

**Repo version:**
[exact text]

**Change type:** [substantive|structural|formatting|missing]
**Action:** Update repo to match website

[Repeat for each difference found]
```

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F00 website vs repo content"
```

---

## Task 3: Audit F01 (Agreed Transparency to Engineered Opacity)

**Files:**
- Read: `01 From Agreed Transparency to Engineered Opacity.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F01 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f01-agreed-transparency-strategic-opacity
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F01 from repo**

Run Read: `01 From Agreed Transparency to Engineered Opacity.md`

**Step 3: Compare section by section**

Flag ALL differences.

**Step 4: Document findings in audit report**

Append F01 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F01 website vs repo content"
```

---

## Task 4: Audit F02 (Political Spectrum to Ideological Fog)

**Files:**
- Read: `02 From Political Spectrum to Ideological Fog.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F02 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f02-political-spectrum-ideological-fog
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F02 from repo**

Run Read: `02 From Political Spectrum to Ideological Fog.md`

**Step 3: Compare section by section**

Flag ALL differences.

**Step 4: Document findings in audit report**

Append F02 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F02 website vs repo content"
```

---

## Task 5: Audit F03 (Digital Empathy to Localized Solidarity)

**Files:**
- Read: `03 From Digital Empathy to Localized Solidarity.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F03 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f03-digital-empathy-localised-solidarity
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F03 from repo**

Run Read: `03 From Digital Empathy to Localized Solidarity.md`

**Step 3: Compare section by section**

Flag ALL differences.

**Step 4: Document findings in audit report**

Append F03 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F03 website vs repo content"
```

---

## Task 6: Audit F04 (Special Relationships to Strategic Situationships)

**Files:**
- Read: `04 From Special Relationships to Strategic Situationships.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F04 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f04-special-relationship-strategic-situationship
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F04 from repo**

Run Read: `04 From Special Relationships to Strategic Situationships.md`

**Step 3: Compare section by section**

Flag ALL differences.

**Step 4: Document findings in audit report**

Append F04 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F04 website vs repo content"
```

---

## Task 7: Audit F05 (Collective Climate Ambition to Fragmented Adaptation)

**Files:**
- Read: `05 From Collective Climate Ambition to Fragmented Adaptation.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F05 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f05-collective-climate-ambition-fragmented-adaptation
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F05 from repo**

Run Read: `05 From Collective Climate Ambition to Fragmented Adaptation.md`

**Step 3: Compare section by section**

Flag ALL differences.

Note: F05 was recently updated from PDF, so this validates synchronization.

**Step 4: Document findings in audit report**

Append F05 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F05 website vs repo content"
```

---

## Task 8: Audit F06 (Open Society to Strategic Opacity/Tactical Shape-shifting)

**Files:**
- Read: `06 From Open Society to Strategic Opacity.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F06 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f06-open-society-tactical-shapeshifting
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

Note: Website shows "Tactical Shape-shifting" but repo shows "Strategic Opacity" - likely title difference.

**Step 2: Load F06 from repo**

Run Read: `06 From Open Society to Strategic Opacity.md`

**Step 3: Compare section by section**

Flag ALL differences (including likely title mismatch).

**Step 4: Document findings in audit report**

Append F06 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F06 website vs repo content"
```

---

## Task 9: Audit F07 (Selective Migration to People as Asset Class)

**Files:**
- Read: `07 From Selective Migration to People as Asset Class.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F07 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f07-selective-migration-people-asset-class
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F07 from repo**

Run Read: `07 From Selective Migration to People as Asset Class.md`

**Step 3: Compare section by section**

Flag ALL differences.

**Step 4: Document findings in audit report**

Append F07 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F07 website vs repo content"
```

---

## Task 10: Audit F08 (Energy Hegemony to Power Plurality)

**Files:**
- Read: `08 From Energy Hegemony to Power Plurality.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F08 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f08-energy-hegemony-power-plurlality
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F08 from repo**

Run Read: `08 From Energy Hegemony to Power Plurality.md`

**Step 3: Compare section by section**

Flag ALL differences.

**Step 4: Document findings in audit report**

Append F08 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F08 website vs repo content"
```

---

## Task 11: Audit F09 (Dollar Dominance to Money Unbundled)

**Files:**
- Read: `09 From Dollar Dominance to Money Unbundled.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F09 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f09-dollar-dominance-money-unbundled
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F09 from repo**

Run Read: `09 From Dollar Dominance to Money Unbundled.md`

**Step 3: Compare section by section**

Flag ALL differences.

**Step 4: Document findings in audit report**

Append F09 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F09 website vs repo content"
```

---

## Task 12: Audit F10 (Technology Convergence to Sovereign Systems)

**Files:**
- Read: `10 From Technology Convergence to Sovereign Systems.md`
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Fetch F10 from website**

Run WebFetch:
```
URL: https://www.10fconsortium.org/forecast-index/f10-technology-convergence-sovereign-systems
Prompt: Extract all content sections: title, abstract, key domains, bottom line, old assumptions, emerging norms, the transformation narrative, strategic blind spots, global implications, AREAS strategic landscape, scenario pathways, and current signals. Return complete text for each section.
```

**Step 2: Load F10 from repo**

Run Read: `10 From Technology Convergence to Sovereign Systems.md`

**Step 3: Compare section by section**

Flag ALL differences.

**Step 4: Document findings in audit report**

Append F10 section with all differences found.

**Step 5: Commit audit findings**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: audit F10 website vs repo content"
```

---

## Task 13: Finalize Audit Report

**Files:**
- Modify: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 1: Count and categorize all differences**

Review entire audit report and tally:
- Total forecasts with differences
- Total changes identified
- Breakdown by type (substantive/structural/formatting/missing)

**Step 2: Update Executive Summary**

Replace `[TBD]` placeholders with actual counts.

**Step 3: Create Summary of Files Requiring Updates**

List all files needing changes with change counts.

Example:
```markdown
## Summary of Files Requiring Updates

1. `00 One Game to Many Games_ Understanding the Transformation.md` — 5 changes
2. `01 From Agreed Transparency to Engineered Opacity.md` — 3 changes
3. `06 From Open Society to Strategic Opacity.md` — 12 changes (includes title change)
[... etc]

Total files requiring updates: X
Total files already synchronized: Y
```

**Step 4: Commit finalized audit report**

```bash
git add docs/audits/2026-02-15-website-repo-content-audit.md
git commit -m "docs: finalize website-to-repo content audit with summary"
```

---

## Task 14: Present Audit Report to User

**Step 1: Read complete audit report**

Run Read: `docs/audits/2026-02-15-website-repo-content-audit.md`

**Step 2: Present summary to user**

Show:
- Executive summary (total changes, breakdown by type)
- List of files requiring updates
- Highlight any major structural changes or concerns

**Step 3: Request approval to proceed with updates**

Ask: "Review complete. Ready to apply all X changes to synchronize repo with website?"

Expected: User approval to proceed

---

## Task 15: Apply Updates to Repo Files

**Note:** Only execute after user approval from Task 14.

**For each file with differences:**

**Step 1: Apply changes using Edit tool**

Use Edit to update repo file with website content.

For each difference documented in audit report:
- Locate exact text in repo file
- Replace with website version
- Verify change applied correctly

**Step 2: Commit file individually**

```bash
git add "[filename].md"
git commit -m "docs: sync [forecast-name] with website

Updates based on website-to-repo content audit (2026-02-15).
Changes: [brief summary of types of changes]

Ref: docs/audits/2026-02-15-website-repo-content-audit.md"
```

**Repeat for all files requiring updates.**

---

## Task 16: Final Verification

**Step 1: Review git log**

Run: `git log --oneline -15`

Expected: See all individual file commits plus audit commits

**Step 2: Verify all changes applied**

For each file that had differences:
- Read updated file
- Verify changes match website content from audit

**Step 3: Create final summary**

Report to user:
```
✅ Website-to-repo content audit complete

Files audited: 11 (F00-F10)
Files updated: X
Total changes applied: Y
Commits created: Z

Audit report: docs/audits/2026-02-15-website-repo-content-audit.md

All repo markdown files now synchronized with website.
```

**Step 4: Push to remote (if requested)**

Run: `git push`

Expected: All commits pushed to GitHub

---

## Success Criteria

- ✅ All 11 forecasts (F00-F10) fetched from website
- ✅ All 11 repo markdown files read and compared
- ✅ Every textual difference documented (no matter how small)
- ✅ Comprehensive audit report created with before/after for each change
- ✅ All differences categorized by type
- ✅ User approval obtained before applying changes
- ✅ Repo files updated to match website exactly
- ✅ Individual git commits created for each updated file
- ✅ Final verification completed
- ✅ Repo fully synchronized with website

---

## Notes

- This follows the same successful pattern used for F05 PDF-to-repo sync
- Website is source of truth per user confirmation
- Manual section-by-section comparison ensures nuanced changes are captured
- Each forecast gets its own audit section for clear tracking
- Each updated file gets its own commit for clear history
- Audit report serves as permanent record of what changed and why
