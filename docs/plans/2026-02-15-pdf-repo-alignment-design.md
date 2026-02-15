# PDF-to-Repo Content Alignment Design

**Date:** 2026-02-15
**Goal:** Compare all content in the repo with the authoritative PDF and align repo to match PDF exactly
**Source of Truth:** `/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf` (129 pages)
**Scope:** 13 sections (F00, Reading guide, AREAS framework, F01-F10)
**Approach:** Sequential section-by-section comparison with comprehensive audit

---

## Context & Requirements

### Background

The repo contains markdown files for the 10F Consortium Forecasts. A previous website-to-repo audit was in progress, but the PDF is now established as the single source of truth. All repo content must align exactly with the PDF.

### Key Requirements

- **Source of truth:** PDF only (website audit abandoned)
- **Comparison unit:** Section-by-section mapping (not strict page-by-page)
- **Granularity:** Flag every difference including punctuation, capitalization, single words, spacing
- **Formatting:** Ignore - content only (don't care about bold/italic markdown)
- **Repo-only content:** Flag but don't remove (document for reference)
- **Workflow:** Create audit report → get approval → batch apply all changes
- **Infrastructure:** Preserve Jekyll frontmatter in all repo files

### Known Issues

- F06 title mismatch: repo says "Strategic Opacity" but PDF says "Tactical Shape-shifting"
- Previous website audit documents should be archived/deprecated

---

## Architecture & File Mapping

### Overall Workflow

```
1. PDF Section Identification
   ↓
2. Text Extraction (pdftotext)
   ↓
3. Repo File Loading
   ↓
4. Manual Comparison
   ↓
5. Difference Documentation
   ↓
6. Audit Report Compilation
   ↓
7. User Approval
   ↓
8. Batch Change Application
   ↓
9. Verification & Commit
```

### PDF-to-Repo File Mapping

| PDF Section | PDF Pages | Repo File | Priority |
|-------------|-----------|-----------|----------|
| From One Game to Many Games | 4-13 | `00 One Game to Many Games_ Understanding the Transformation.md` | High |
| Reading and Applying | 14-18 | `00 Reading and Applying the 10F Forecasts.md` | High |
| AREAS Framework | 19-23 | `00A The AREAS Framework_ A Guide to Strategic Positioning.md` | High |
| F01: Agreed Transparency → Engineered Opacity | 24-32 | `01 From Agreed Transparency to Engineered Opacity.md` | High |
| F02: Political Spectrum → Ideological Fog | 33-42 | `02 From Political Spectrum to Ideological Fog.md` | High |
| F03: Digital Empathy → Localised Solidarity | 43-53 | `03 From Digital Empathy to Localized Solidarity.md` | High |
| F04: Special Relationships → Strategic Situationships | 54-64 | `04 From Special Relationships to Strategic Situationships.md` | High |
| F05: Collective Climate → Fragmented Adaptation | 65-72 | `05 From Collective Climate Ambition to Fragmented Adaptation.md` | High |
| F06: Open Society → Tactical Shape-shifting | 73-83 | `06 From Open Society to Strategic Opacity.md` | **Critical** |
| F07: Selective Migration → People as Asset Class | 84-94 | `07 From Selective Migration to People as Asset Class.md` | High |
| F08: Energy Hegemony → Power Plurality | 95-105 | `08 From Energy Hegemony to Power Plurality.md` | High |
| F09: Dollar Dominance → Money Unbundled | 106-116 | `09 From Dollar Dominance to Money Unbundled.md` | High |
| F10: Technology Convergence → Sovereign Systems | 117-127 | `10 From Technology Convergence to Sovereign Systems.md` | High |

**Note:** F06 is marked **Critical** because we already know the title is wrong.

### Processing Order

Process sequentially in the order listed above (F00 → Reading → AREAS → F01-F10). This follows the PDF's natural flow and makes progress tracking easier.

---

## Comparison Methodology

### PDF Text Extraction

For each section, use `pdftotext` (from poppler) to extract text:

```bash
pdftotext -f [start_page] -l [end_page] '/Users/zeigor/Desktop/10F Consortium Forecasts Full.pdf' -
```

**Extraction Characteristics:**
- Plain text output (no formatting codes)
- Preserves line breaks and paragraph structure
- May include PDF artifacts (page numbers, headers, footers)
- Ligatures may render differently (e.g., "fi" → "fi")

### Text Normalization

Before comparison, normalize both PDF and repo text:

1. **Strip Jekyll frontmatter** from repo files (typically lines 1-6)
2. **Remove PDF artifacts**: page numbers, headers like "10F-XXX-1.0", footers like "10Fconsortium.org"
3. **Normalize whitespace**: collapse multiple spaces, standardize line breaks
4. **Preserve structure**: keep paragraph breaks, bullet points, section headers

### Comparison Process

For each file:

1. Load repo content (skip frontmatter)
2. Extract PDF section (using page range)
3. Normalize both texts
4. Manual side-by-side review:
   - Read through both versions paragraph by paragraph
   - Flag every textual difference (words, punctuation, spacing)
   - Ignore formatting (bold/italic) - content only
   - Note structural differences (missing sections, reordered content)

### Difference Categories

Every difference gets tagged with a category:

- **SUBSTANTIVE**: Changed facts, different wording, altered meaning
- **STRUCTURAL**: Missing/added sections, reordered content, heading changes
- **MINOR**: Punctuation, capitalization, spelling variations (but still flagged!)
- **REPO-ONLY**: Content exists in repo but not in PDF (flag but don't remove)

### Example Difference Documentation

```markdown
##### [3] Section: Abstract

**PDF version:**
"...shape shifting by changing how they portray..."

**Repo version (line 14):**
"...shape‑shifting by changing how they portray..."

**Change type:** MINOR (hyphenation difference)
**Action:** Update repo to match PDF
```

---

## Audit Report Structure

### Report Location & Format

**File:** `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`

This creates a new audit document separate from the website audit (which is deprecated).

### Report Template

```markdown
# PDF-to-Repo Content Alignment Audit

**Date:** 2026-02-15
**Auditor:** Claude Sonnet 4.5
**Source of Truth:** 10F Consortium Forecasts Full.pdf (129 pages)
**Scope:** 13 sections (F00, Reading guide, AREAS, F01-F10)

---

## Executive Summary

- **Total sections audited:** 13
- **Sections with differences:** [X]
- **Total differences identified:** [Y]
- **Difference breakdown:**
  - Substantive: [X]
  - Structural: [X]
  - Minor: [X]
  - Repo-only content: [X]

---

## Critical Findings

[Highlight major issues like F06 title mismatch, missing sections, etc.]

---

## Detailed Findings

### F00: From One Game to Many Games
**File:** `00 One Game to Many Games_ Understanding the Transformation.md`
**PDF Pages:** 4-13

#### Differences Found: [X]

##### [1] Title Format
**PDF version:**
[exact text]

**Repo version (line X):**
[exact text]

**Change type:** [SUBSTANTIVE|STRUCTURAL|MINOR|REPO-ONLY]
**Action:** Update repo to match PDF / Flag as repo-only

[Continue for all differences in this file]

---

[Repeat format for all 13 sections]

---

## Summary of Files Requiring Updates

1. `00 One Game to Many Games_ Understanding the Transformation.md` — X differences
2. `01 From Agreed Transparency to Engineered Opacity.md` — X differences
[... list all files]

---

## Files with No Differences

[List any files that perfectly match PDF]

---

## Repo-Only Content

[List content that exists in repo but not PDF - flagged but not removed]

---

## Recommendations

- Apply all documented changes to align repo with PDF
- Commit each file individually with reference to this audit
- Archive/deprecate previous website audit documents
```

### Progress Tracking

During the audit phase, provide status updates:
- "Auditing F00... [1/13]"
- "Found 5 differences in F00, documenting..."
- "Moving to Reading guide... [2/13]"

---

## Change Application Process

### After Approval

Once the audit report is reviewed and approved, apply changes in this sequence:

### Application Workflow

```
For each file with differences:
1. Load current repo file
2. Apply changes using Edit tool
   - One edit per distinct difference
   - Preserve Jekyll frontmatter
   - Match PDF text exactly
3. Verify changes applied correctly (re-read file)
4. Git commit with descriptive message
5. Move to next file
```

### Commit Strategy

**One commit per file** with structured messages:

```
docs: align F06 with PDF (5 changes)

- Fix title: "Strategic Opacity" → "Tactical Shape-shifting"
- Update abstract hyphenation
- Correct Bottom Line paragraph 2
- Fix Old Assumptions bullet 3 capitalization
- Update Emerging Norms section header

Reference: docs/audits/2026-02-15-pdf-repo-alignment-audit.md
```

This creates a clear audit trail and makes it easy to revert specific changes if needed.

### Handling Different Change Types

**For simple text replacements:**
- Use Edit tool with old_string/new_string

**For missing sections (repo doesn't have, PDF does):**
- Use Edit tool to insert at appropriate location
- Match PDF structure and content exactly

**For repo-only content:**
- Leave untouched (flagged in audit but not removed)
- Document in audit report for future reference

### Safety Checks

Before each commit:
1. Re-read the file to verify changes applied correctly
2. Check line count - major changes should be intentional
3. Verify Jekyll frontmatter intact - never accidentally remove it
4. Confirm no merge conflicts (unlikely in solo work)

---

## Verification & Completion

### Post-Application Verification

After all changes are applied and committed:

1. **Git Status Check**
   ```bash
   git status
   ```
   Confirm: working tree clean, all changes committed

2. **Commit History Review**
   ```bash
   git log --oneline -15
   ```
   Verify: one commit per updated file, clear messages

3. **Spot-Check Critical Changes**
   - Re-read F06 to confirm title change applied
   - Sample 2-3 other files to verify changes match audit
   - Check that Jekyll frontmatter preserved in all files

4. **File Count Verification**
   - Confirm 13 files were audited (even if some had no changes)
   - No files accidentally deleted or created

### Final Deliverables

At completion, you'll have:

1. ✅ Audit report at `docs/audits/2026-02-15-pdf-repo-alignment-audit.md`
2. ✅ Updated repo files aligned with PDF content
3. ✅ Git commits documenting each change
4. ✅ Verification summary confirming all changes applied correctly

### Success Criteria

- [ ] All 13 sections audited
- [ ] Every difference documented in audit report
- [ ] All approved changes applied to repo files
- [ ] Jekyll frontmatter preserved in all files
- [ ] One git commit per updated file
- [ ] Repo-only content flagged but not removed
- [ ] Verification checks passed

---

## Time Estimate

- **Audit phase:** ~90-120 minutes (13 sections × 7-9 min each)
- **Review & approval:** ~10-15 minutes (user time)
- **Application phase:** ~30-45 minutes (applying + committing changes)
- **Verification:** ~10 minutes

**Total work time:** ~2.5-3 hours

---

## Edge Cases & Considerations

### PDF Extraction Challenges

- **Page headers/footers:** May appear in extracted text, need to be filtered out
- **Hyphenation:** PDF may break words across lines, need to rejoin
- **Special characters:** Ligatures (fi, fl) may render differently
- **Whitespace:** Inconsistent spacing between PDF and markdown

### Structural Differences

- **Section ordering:** If PDF reorders sections, document as STRUCTURAL change
- **Missing sections:** If entire section missing from repo, flag as critical
- **Extra sections:** If repo has sections not in PDF, mark as REPO-ONLY

### Quality Assurance

- **Double-check critical changes:** Title changes, section headers, substantive edits
- **Preserve repo infrastructure:** Never touch Jekyll frontmatter, .gitignore, etc.
- **Conservative edits:** When in doubt about a difference, flag it but ask before changing

---

## Alternative Approaches Considered

### Automated Diff Tool
**Rejected because:** PDF extraction creates too many artifacts; automated diff would generate false positives; manual review ensures accuracy for "flag everything" requirement.

### Parallel Agent Processing
**Rejected because:** Only 13 sections; coordination overhead not worth it; sequential processing easier to track and verify.

### Website + PDF Reconciliation
**Rejected because:** User confirmed PDF is single source of truth; website audit abandoned.

---

## Success Metrics

- **Completeness:** All 13 sections audited, no files skipped
- **Accuracy:** Every difference flagged, even minor punctuation
- **Traceability:** Clear audit trail from finding → documentation → change → commit
- **Reversibility:** Individual commits allow selective rollback if needed
- **Transparency:** User can review full audit before any changes applied
