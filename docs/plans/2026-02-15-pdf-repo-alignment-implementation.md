# PDF-to-Repo Content Alignment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Systematically compare 13 sections from authoritative PDF against repo markdown files, document every difference in comprehensive audit report, get user approval, then batch apply changes to align repo with PDF.

**Architecture:** Sequential section-by-section comparison using pdftotext for extraction, manual side-by-side review for accuracy, comprehensive documentation of all differences (even punctuation), batch application after approval.

**Tech Stack:** pdftotext (poppler), Read tool, Edit tool, git

---

## Phase 1: Setup & Preparation

### Task 1: Create Audit Report Structure

**Files:**
- Create: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`

**Step 1: Create audit report template**

Create file with initial structure:

```markdown
# PDF-to-Repo Content Alignment Audit

**Date:** 2026-02-15
**Auditor:** Claude Sonnet 4.5
**Source of Truth:** 10F Consortium Forecasts Full.pdf (129 pages)
**Scope:** 13 sections (F00, Reading guide, AREAS, F01-F10)

---

## Executive Summary

- **Total sections audited:** 0/13
- **Sections with differences:** TBD
- **Total differences identified:** TBD
- **Difference breakdown:**
  - Substantive: TBD
  - Structural: TBD
  - Minor: TBD
  - Repo-only content: TBD

---

## Critical Findings

TBD

---

## Detailed Findings

[Will be populated during audit]

---

## Summary of Files Requiring Updates

TBD

---

## Files with No Differences

TBD

---

## Repo-Only Content

TBD

---

## Recommendations

- Apply all documented changes to align repo with PDF
- Commit each file individually with reference to this audit
- Archive/deprecate previous website audit documents
```

**Step 2: Verify file created**

Run: `ls -la docs/audits/`
Expected: See `2026-02-15-pdf-repo-alignment-audit.md` in listing

---

### Task 2: Verify PDF Extraction Tools

**Step 1: Test pdftotext on first page**

Run:
```bash
pdftotext -f 4 -l 4 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Expected: Output showing text from page 4 (start of "From One Game to Many Games")

**Step 2: Verify output quality**

Check that output:
- Contains readable text (not garbled)
- Preserves paragraph structure
- May have some PDF artifacts (headers/footers) - this is expected

---

## Phase 2: Audit Execution (13 Sections)

### Task 3: Audit F00 - From One Game to Many Games

**Progress:** [1/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `00 One Game to Many Games_ Understanding the Transformation.md`
- Extract: PDF pages 4-13

**Step 1: Extract PDF section**

Run:
```bash
pdftotext -f 4 -l 13 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Save output mentally or to temp location for comparison.

**Step 2: Load repo file**

Run: Read tool on `00 One Game to Many Games_ Understanding the Transformation.md`

**Step 3: Compare section-by-section**

Manual comparison:
1. Strip Jekyll frontmatter from repo (lines 1-6 typically)
2. Remove PDF artifacts (page numbers, "10F-INTRO-1.0", "10Fconsortium.org")
3. Compare paragraph by paragraph
4. Flag EVERY difference:
   - Words changed
   - Punctuation differences
   - Capitalization
   - Spacing
   - Missing/added content
   - Structural changes

**Step 4: Document findings in audit report**

Add to audit report under "Detailed Findings":

```markdown
### F00: From One Game to Many Games
**File:** `00 One Game to Many Games_ Understanding the Transformation.md`
**PDF Pages:** 4-13

#### Differences Found: [X]

##### [1] [Section Name]
**PDF version:**
[exact text from PDF]

**Repo version (line X):**
[exact text from repo]

**Change type:** [SUBSTANTIVE|STRUCTURAL|MINOR|REPO-ONLY]
**Action:** Update repo to match PDF

[Continue for each difference found]

---
```

**Step 5: Update progress**

Output: "Auditing F00... [1/13] - Found X differences"

---

### Task 4: Audit Reading and Applying Guide

**Progress:** [2/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `00 Reading and Applying the 10F Forecasts.md`
- Extract: PDF pages 14-18

**Step 1: Extract PDF section**

Run:
```bash
pdftotext -f 14 -l 18 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

**Step 2: Load repo file**

Run: Read tool on `00 Reading and Applying the 10F Forecasts.md`

**Step 3: Compare and document**

Follow same comparison process as Task 3:
- Strip frontmatter
- Remove PDF artifacts
- Compare paragraph by paragraph
- Flag every difference
- Document in audit report

**Step 4: Update progress**

Output: "Auditing Reading guide... [2/13] - Found X differences"

---

### Task 5: Audit AREAS Framework

**Progress:** [3/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `00A The AREAS Framework_ A Guide to Strategic Positioning.md`
- Extract: PDF pages 19-23

**Step 1: Extract PDF section**

Run:
```bash
pdftotext -f 19 -l 23 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

**Step 2: Load repo file**

Run: Read tool on `00A The AREAS Framework_ A Guide to Strategic Positioning.md`

**Step 3: Compare and document**

Follow same comparison process.

**Step 4: Update progress**

Output: "Auditing AREAS Framework... [3/13] - Found X differences"

---

### Task 6: Audit F01 - Agreed Transparency to Engineered Opacity

**Progress:** [4/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `01 From Agreed Transparency to Engineered Opacity.md`
- Extract: PDF pages 24-32

**Step 1: Extract PDF section**

Run:
```bash
pdftotext -f 24 -l 32 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

**Step 2: Load repo file and compare**

Run: Read tool on `01 From Agreed Transparency to Engineered Opacity.md`

**Step 3: Document findings**

Add to audit report following template.

**Step 4: Update progress**

Output: "Auditing F01... [4/13] - Found X differences"

---

### Task 7: Audit F02 - Political Spectrum to Ideological Fog

**Progress:** [5/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `02 From Political Spectrum to Ideological Fog.md`
- Extract: PDF pages 33-42

**Step 1: Extract and compare**

Run:
```bash
pdftotext -f 33 -l 42 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Then load repo file and compare.

**Step 2: Document findings**

Add to audit report.

**Step 3: Update progress**

Output: "Auditing F02... [5/13] - Found X differences"

---

### Task 8: Audit F03 - Digital Empathy to Localised Solidarity

**Progress:** [6/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `03 From Digital Empathy to Localized Solidarity.md`
- Extract: PDF pages 43-53

**Step 1: Extract and compare**

Run:
```bash
pdftotext -f 43 -l 53 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Then load repo file and compare.

**Step 2: Document findings**

Add to audit report.

**Step 3: Update progress**

Output: "Auditing F03... [6/13] - Found X differences"

---

### Task 9: Audit F04 - Special Relationships to Strategic Situationships

**Progress:** [7/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `04 From Special Relationships to Strategic Situationships.md`
- Extract: PDF pages 54-64

**Step 1: Extract and compare**

Run:
```bash
pdftotext -f 54 -l 64 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Then load repo file and compare.

**Step 2: Document findings**

Add to audit report.

**Step 3: Update progress**

Output: "Auditing F04... [7/13] - Found X differences"

---

### Task 10: Audit F05 - Collective Climate to Fragmented Adaptation

**Progress:** [8/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `05 From Collective Climate Ambition to Fragmented Adaptation.md`
- Extract: PDF pages 65-72

**Step 1: Extract and compare**

Run:
```bash
pdftotext -f 65 -l 72 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Then load repo file and compare.

**Step 2: Document findings**

Add to audit report.

**Step 3: Update progress**

Output: "Auditing F05... [8/13] - Found X differences"

---

### Task 11: Audit F06 - Open Society to Tactical Shape-shifting **[CRITICAL]**

**Progress:** [9/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `06 From Open Society to Strategic Opacity.md`
- Extract: PDF pages 73-83

**CRITICAL:** We already know the title is wrong: repo says "Strategic Opacity" but PDF says "Tactical Shape-shifting"

**Step 1: Extract PDF section**

Run:
```bash
pdftotext -f 73 -l 83 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

**Step 2: Load repo file and compare**

Run: Read tool on `06 From Open Society to Strategic Opacity.md`

**Step 3: Document findings**

Add to audit report, ensuring title mismatch is documented as first critical finding.

**Step 4: Update progress**

Output: "Auditing F06 [CRITICAL]... [9/13] - Found X differences including title mismatch"

---

### Task 12: Audit F07 - Selective Migration to People as Asset Class

**Progress:** [10/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `07 From Selective Migration to People as Asset Class.md`
- Extract: PDF pages 84-94

**Step 1: Extract and compare**

Run:
```bash
pdftotext -f 84 -l 94 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Then load repo file and compare.

**Step 2: Document findings**

Add to audit report.

**Step 3: Update progress**

Output: "Auditing F07... [10/13] - Found X differences"

---

### Task 13: Audit F08 - Energy Hegemony to Power Plurality

**Progress:** [11/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `08 From Energy Hegemony to Power Plurality.md`
- Extract: PDF pages 95-105

**Step 1: Extract and compare**

Run:
```bash
pdftotext -f 95 -l 105 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Then load repo file and compare.

**Step 2: Document findings**

Add to audit report.

**Step 3: Update progress**

Output: "Auditing F08... [11/13] - Found X differences"

---

### Task 14: Audit F09 - Dollar Dominance to Money Unbundled

**Progress:** [12/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `09 From Dollar Dominance to Money Unbundled.md`
- Extract: PDF pages 106-116

**Step 1: Extract and compare**

Run:
```bash
pdftotext -f 106 -l 116 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Then load repo file and compare.

**Step 2: Document findings**

Add to audit report.

**Step 3: Update progress**

Output: "Auditing F09... [12/13] - Found X differences"

---

### Task 15: Audit F10 - Technology Convergence to Sovereign Systems

**Progress:** [13/13]

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
- Read: `10 From Technology Convergence to Sovereign Systems.md`
- Extract: PDF pages 117-127

**Step 1: Extract and compare**

Run:
```bash
pdftotext -f 117 -l 127 '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

Then load repo file and compare.

**Step 2: Document findings**

Add to audit report.

**Step 3: Update progress**

Output: "Auditing F10... [13/13] - AUDIT PHASE COMPLETE"

---

## Phase 3: Finalization

### Task 16: Complete Audit Report Executive Summary

**Files:**
- Modify: `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`

**Step 1: Count all differences**

Review entire audit report and count:
- Total sections with differences
- Total differences identified
- Breakdown by type (SUBSTANTIVE, STRUCTURAL, MINOR, REPO-ONLY)

**Step 2: Update Executive Summary**

Replace "TBD" placeholders with actual counts:

```markdown
## Executive Summary

- **Total sections audited:** 13
- **Sections with differences:** X
- **Total differences identified:** Y
- **Difference breakdown:**
  - Substantive: X
  - Structural: X
  - Minor: X
  - Repo-only content: X
```

**Step 3: Populate Critical Findings**

Add critical findings section highlighting:
- F06 title mismatch (if found)
- Any missing sections
- Any major structural changes

**Step 4: Create Summary of Files Requiring Updates**

List all files with differences and their change count.

**Step 5: List Files with No Differences**

If any files perfectly match PDF, list them.

---

### Task 17: Commit Audit Report

**Step 1: Verify audit report is complete**

Run: Read tool on `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`

Verify:
- Executive summary filled in
- All 13 sections documented
- Critical findings highlighted
- Recommendations included

**Step 2: Commit audit report**

Run:
```bash
git add docs/audits/2026-02-15-pdf-repo-alignment-audit.md && git commit -m "$(cat <<'EOF'
docs: complete PDF-to-repo alignment audit

Comprehensive audit of 13 sections comparing repo content against
authoritative PDF (129 pages).

Findings:
- Total sections audited: 13
- Sections with differences: X
- Total differences: Y (SUBSTANTIVE: X, STRUCTURAL: X, MINOR: X)

Critical issues:
- [List critical findings, e.g., F06 title mismatch]

All differences documented with exact line numbers, change types,
and recommended actions.

Next step: User review and approval before applying changes.

Reference: docs/plans/2026-02-15-pdf-repo-alignment-design.md

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

**Step 3: Verify commit**

Run: `git log --oneline -1`
Expected: See audit report commit

---

## Phase 4: User Approval (Manual Step)

**STOP HERE AND PRESENT AUDIT REPORT TO USER**

Present the audit report to user for review:
1. Read and display the audit report
2. Highlight critical findings
3. Summarize total changes required
4. Request approval to proceed with batch application

**Do not proceed to Phase 5 without explicit user approval.**

---

## Phase 5: Batch Application (After Approval)

**NOTE:** This phase will be executed only after user approves the audit report. Tasks will be created dynamically based on which files have differences.

### General Application Pattern (Per File)

**For each file with documented differences:**

**Step 1: Load current repo file**

Run: Read tool on file

**Step 2: Apply each change**

For each difference documented in audit:
- Use Edit tool with old_string/new_string
- Match exact text from PDF
- Preserve Jekyll frontmatter
- One edit per difference

**Step 3: Verify changes**

Run: Read tool on file again
Confirm: All changes applied correctly, frontmatter intact

**Step 4: Commit**

Run:
```bash
git add [filename] && git commit -m "$(cat <<'EOF'
docs: align [filename] with PDF (X changes)

- [List each change, e.g., "Fix title: 'Old' → 'New'"]
- [Change 2]
- [Change 3]

Reference: docs/audits/2026-02-15-pdf-repo-alignment-audit.md

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 6: Verification

### Task N+1: Final Verification (After All Changes Applied)

**Step 1: Git status check**

Run: `git status`
Expected: Clean working tree, all changes committed

**Step 2: Commit history review**

Run: `git log --oneline -15`
Expected: See individual commits for each updated file

**Step 3: Spot-check critical changes**

Re-read F06 to verify title change applied (if it was changed)

**Step 4: Verify frontmatter preserved**

Sample 2-3 files to confirm Jekyll frontmatter intact

**Step 5: Count files updated**

Verify expected number of files were updated (per audit report)

---

## Success Criteria

- [ ] All 13 sections audited
- [ ] Every difference documented in audit report
- [ ] Audit report committed with complete findings
- [ ] User approval obtained
- [ ] All approved changes applied to repo files
- [ ] Jekyll frontmatter preserved in all files
- [ ] One git commit per updated file
- [ ] Repo-only content flagged but not removed
- [ ] Final verification checks passed

---

## Time Estimate

- **Phase 1 (Setup):** ~5 minutes
- **Phase 2 (Audit):** ~90-120 minutes (13 sections × 7-9 min each)
- **Phase 3 (Finalization):** ~15 minutes
- **Phase 4 (User approval):** ~10-15 minutes (user time)
- **Phase 5 (Application):** ~30-45 minutes (depends on number of changes)
- **Phase 6 (Verification):** ~10 minutes

**Total:** ~2.5-3 hours

---

## Notes

- This is a content alignment task, not traditional code development
- Manual comparison ensures highest accuracy for "flag everything" requirement
- Sequential processing makes progress tracking transparent
- Batch application after approval minimizes risk of unwanted changes
- Individual commits per file allows selective rollback if needed
