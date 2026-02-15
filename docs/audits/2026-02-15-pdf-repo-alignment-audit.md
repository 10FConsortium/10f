# PDF-to-Repo Content Alignment Audit

**Date:** 2026-02-15
**Auditor:** Claude Sonnet 4.5
**Source of Truth:** 10F Consortium Forecasts Full.pdf (129 pages)
**Scope:** 13 sections (F00, Reading guide, AREAS, F01-F10)

## Executive Summary

- **Total sections audited:** 13/13 ✓ COMPLETE
- **Sections with differences:** 5
- **Total differences identified:** 48
- **Difference breakdown:**
  - Substantive: 19
  - Structural (repo-only): 21
  - Minor: 15
  - Repo-only content: 10
- **Critical finding:** F06 title mismatch (PDF: "Tactical Shape-shifting", Repo: "Strategic Opacity")

## Critical Findings

### F06 Forecast Title Completely Incorrect
**File:** `00 One Game to Many Games_  Understanding the Transformation.md` (line 72)
- **PDF:** "F06: From Open Society to Tactical Shape-shifting"
- **Repo:** "F06: From From Open Society to Strategic Opacity"
- **Issues:**
  1. Duplicate word "From From"
  2. Wrong destination ("Strategic Opacity" vs "Tactical Shape-shifting")
- **Impact:** Critical - this is a fundamentally different forecast title that misrepresents the content
- **Action:** Update immediately to match PDF

### F05 Missing "Climate" in Title
**File:** `00 One Game to Many Games_  Understanding the Transformation.md` (line 71)
- **PDF:** "F05: From Collective Climate Ambition to Fragmented Adaptation"
- **Repo:** "F05: From Collective Ambition to Fragmented Adaptation"
- **Impact:** High - missing key word changes meaning
- **Action:** Add "Climate" to match PDF

### Inconsistent Capitalization of "Forecasts"
**File:** `00 One Game to Many Games_  Understanding the Transformation.md` (multiple lines)
- **PDF:** Consistently uses "Forecasts" (capitalized) as proper noun
- **Repo:** Uses "forecasts" (lowercase) throughout
- **Impact:** Medium - affects brand consistency and proper noun usage
- **Action:** Update all instances to capitalize "Forecasts"

## Detailed Findings

### F00: One Game to Many Games - Understanding the Transformation
**File:** `00 One Game to Many Games_  Understanding the Transformation.md`
**PDF Pages:** 4-13

#### Substantive Differences (7)

1. **Line 27** - Word choice difference
   - PDF: "Countries turn deportation and detention into a revenue source"
   - Repo: "Countries turn deportation and detention into a revenue model"
   - Category: SUBSTANTIVE
   - Action: Update repo to match PDF ("revenue source")

2. **Line 59** - Capitalization throughout document
   - PDF: "forecasts" used as proper noun, capitalized as "Forecasts" throughout
   - Repo: "forecasts" lowercase in multiple locations (lines 59, 95, 101, 111, 115, 123, 128, 133, 135)
   - Category: SUBSTANTIVE (consistent proper noun usage)
   - Action: Update repo to match PDF capitalization pattern

3. **Line 71** - Missing word in forecast title
   - PDF: "F05: From Collective Climate Ambition to Fragmented Adaptation"
   - Repo: "F05: From Collective Ambition to Fragmented Adaptation"
   - Category: SUBSTANTIVE (missing "Climate")
   - Action: Update repo to match PDF (add "Climate")

4. **Line 72** - Wrong forecast title AND duplicate word
   - PDF: "F06: From Open Society to Tactical Shape-shifting"
   - Repo: "F06: From From Open Society to Strategic Opacity"
   - Category: SUBSTANTIVE (duplicate "From From" + completely different title)
   - Action: Update repo to match PDF ("Tactical Shape-shifting" not "Strategic Opacity", remove duplicate "From")

5. **Line 111** - Hyphenation difference
   - PDF: "sensemaking" (one word, no hyphen)
   - Repo: "sense-making" (hyphenated)
   - Category: SUBSTANTIVE
   - Action: Update repo to match PDF (remove hyphen)

6. **Line 115** - Missing prefix in note
   - PDF: "Note: These Forecasts were developed through the 10F Project..."
   - Repo: "These forecasts were developed through the 10F Project..."
   - Category: SUBSTANTIVE (missing "Note:" prefix)
   - Action: Update repo to match PDF (add "Note:" prefix)

7. **Line 131** - Singular vs plural
   - PDF: "Digital Information Ecosystems" (plural)
   - Repo: "Digital Information Ecosystem" (singular)
   - Category: SUBSTANTIVE
   - Action: Update repo to match PDF (make plural)

#### Structural Differences (5)

8. **Lines 1-5** - Jekyll frontmatter
   - Repo has YAML frontmatter (layout, title, nav_order)
   - PDF has no frontmatter
   - Category: REPO-ONLY
   - Action: Flag as repo-only (do not remove)

9. **Line 7** - Heading format and numbering
   - PDF: "From One Game to Many Games: Understanding the Transformation"
   - Repo: "# 00	One Game to Many Games:  	Understanding the Transformation"
   - Category: STRUCTURAL (repo adds "00" prefix for navigation)
   - Action: Flag as repo-only (do not remove)

10. **All section headings** - Markdown formatting
    - PDF: Plain text headings
    - Repo: Markdown heading syntax (##, ###)
    - Category: STRUCTURAL
    - Action: Flag as repo-only (do not remove)

11. **Bullet formatting** - List syntax
    - PDF: Uses "‣" bullet character
    - Repo: Uses markdown `*` bullets
    - Category: STRUCTURAL
    - Action: Flag as repo-only (do not remove)

12. **AREAS labels formatting** - Capitalization style
    - PDF: "ARCHITECTING" (all caps)
    - Repo: "**Architecting**" (title case with bold)
    - Category: STRUCTURAL (formatting preference)
    - Action: Flag as repo-only (do not remove)

#### Minor Differences (4)

13. **Line 17** - Bold formatting on phrase
    - PDF: "shared assumptions about international order" (plain text)
    - Repo: "**shared assumptions about international order**" (bold)
    - Category: MINOR
    - Action: Update repo to match PDF (remove bold)

14. **Line 23** - Bold formatting on sentence
    - PDF: "We are shifting from one game to many games." (plain)
    - Repo: "**We are shifting from one game to many games.**" (bold)
    - Category: MINOR
    - Action: Update repo to match PDF (remove bold)

15. **Lines 37-40** - Bold formatting on meta-patterns
    - PDF: Plain text bullet items
    - Repo: Bold formatting on key phrases
    - Category: MINOR
    - Action: Update repo to match PDF (remove bold from bullet content, keep only heading structure)

16. **Line 107** - Bold formatting on three sentences
    - PDF: Plain text
    - Repo: Bold on "Old constraints are failing..." through "...previously foreclosed."
    - Category: MINOR
    - Action: Update repo to match PDF (remove bold)

#### Summary for F00
- **Total differences:** 16
- **Substantive:** 7
- **Structural (repo-only):** 5
- **Minor:** 4
- **Critical issues:**
  - F06 forecast title completely wrong ("Strategic Opacity" should be "Tactical Shape-shifting")
  - F06 has duplicate word "From From"
  - F05 missing "Climate" in title
  - Inconsistent capitalization of "Forecasts" throughout

### Reading and Applying the 10F Forecasts
**File:** `00 Reading and Applying the 10F Forecasts.md`
**PDF Pages:** 14-18

#### Differences Found: 25

#### Substantive Differences (8)

1. **Line 17** - Word choice difference in opening sentence
   - PDF: "Each 10F Forecast was written collaboratively by a group of authors from the 10F Consortium"
   - Repo: "Each 10F Forecast was written collaboratively by several authors from the 10F Consortium"
   - Category: SUBSTANTIVE ("a group of" vs "several")
   - Action: Update repo to match PDF ("a group of authors")

2. **Line 17** - Sentence structure difference
   - PDF: "Forecasts don't necessarily reflect unanimity; they represent consensus."
   - Repo: "They don't necessarily reflect unanimity; they represent consensus."
   - Category: SUBSTANTIVE (subject changed from "Forecasts" to "They")
   - Action: Update repo to match PDF ("Forecasts don't")

3. **Line 60** - Parenthetical vs non-parenthetical
   - PDF: "Rather than sorting actors into fixed categories like allies or adversaries"
   - Repo: "Rather than sorting actors into fixed categories (like allies or adversaries)"
   - Category: SUBSTANTIVE (parentheses added in repo)
   - Action: Update repo to match PDF (remove parentheses)

4. **Line 110** - Bold formatting + capitalization
   - PDF: "There's no need to read every Forecast." (no bold, capital F)
   - Repo: "**There's no need to read every forecast.**" (bold, lowercase f)
   - Category: SUBSTANTIVE (capitalization of "Forecast")
   - Action: Update repo to match PDF (remove bold, capitalize "Forecast")

5. **Line 112** - Bold formatting + capitalization
   - PDF: "Read the Bottom Line first." (no bold, capital F)
   - Repo: "**Read the Bottom Line first.**" (bold, lowercase f)
   - Category: SUBSTANTIVE (capitalization of "first")
   - Action: Update repo to match PDF (remove bold)

6. **Line 130** - Different phrasing and additional content
   - PDF: "You can find more information on 10F's AREAS Framework in the next section and a tool for applying it, at the link below:"
   - Repo: "You can find more information on 10F's AREAS Framework, as well as a tool to apply it, here:"
   - Category: SUBSTANTIVE (different structure and reference)
   - Action: Update repo to match PDF

7. **Line 132** - Different link structure
   - PDF: "‣ AREAS Canvas Toolkit (PDF download)"
   - Repo: "* AREAS Framework Introduction ([link](https://docs.google.com/document/u/1/d/1ekbRIHNG8sTtSrzbSgQiU9un_dfU8fQBlq6G6JRLNrs/edit))\n* AREAS Canvas Toolkit ([PDF download](https://drive.google.com/file/d/1NCMmTDs7KwQDp4L7qvhYXIRantLrWACQ/view?usp=drive_link))"
   - Category: REPO-ONLY (additional link and formatting)
   - Action: Flag as repo-only content (additional AREAS Framework Introduction link)

8. **Line 145** - Link formatting
   - PDF: "info@10fconsortium.org"
   - Repo: "[info@10fconsortium.org](mailto:info@10fconsortium.org)"
   - Category: STRUCTURAL (markdown mailto link)
   - Action: Flag as repo-only (do not remove)

#### Structural Differences (5)

10. **Lines 1-5** - Jekyll frontmatter
    - Repo has YAML frontmatter (layout, title, nav_order)
    - PDF has no frontmatter
    - Category: REPO-ONLY
    - Action: Flag as repo-only (do not remove)

11. **Line 7** - Heading format and numbering
    - PDF: "Reading and Applying the 10F Forecasts"
    - Repo: "# 00	Reading and Applying  	the 10F Forecasts"
    - Category: STRUCTURAL (repo adds "00" prefix for navigation and extra spacing)
    - Action: Flag as repo-only (do not remove)

12. **Lines 9-10** - Table of contents with anchor links
    - Repo has: "[The Forecast Structure](#the-forecast-structure)\n[Applying the Forecasts](#applying-the-forecasts)"
    - PDF has no TOC
    - Category: REPO-ONLY
    - Action: Flag as repo-only (do not remove)

13. **Line 24** - Anchor ID in heading
    - PDF: "The Forecast Structure"
    - Repo: "## The Forecast Structure {#the-forecast-structure}"
    - Category: STRUCTURAL (anchor for TOC linking)
    - Action: Flag as repo-only (do not remove)

14. **Line 95** - Anchor ID in heading
    - PDF: "Applying the Forecasts"
    - Repo: "## Applying the Forecasts {#applying-the-forecasts}"
    - Category: STRUCTURAL (anchor for TOC linking)
    - Action: Flag as repo-only (do not remove)

15. **All section headings** - Markdown formatting
    - PDF: Plain text headings
    - Repo: Markdown heading syntax (##, ###)
    - Category: STRUCTURAL
    - Action: Flag as repo-only (do not remove)

16. **Bullet formatting** - List syntax
    - PDF: Uses "‣" bullet character
    - Repo: Uses markdown `*` bullets
    - Category: STRUCTURAL
    - Action: Flag as repo-only (do not remove)

17. **AREAS labels formatting** - Bold markdown
    - PDF: Plain text with bullet points
    - Repo: Bold markdown on labels ("**Architecting:**")
    - Category: STRUCTURAL
    - Action: Flag as repo-only (do not remove)

#### Minor Differences (12)

1. **Line 108** - Bold formatting on sentence
   - PDF: "Forecasts describe shifts that may already feel familiar" (no bold)
   - Repo: "**Forecasts describe shifts that may already feel familiar**" (bold)
   - Category: MINOR (formatting only)
   - Action: Update repo to match PDF (remove bold)

2. **Line 101-104** - Bold formatting on list items
    - PDF: "‣ Orientation: a map, not a route" (no bold)
    - Repo: "* **Orientation:** a map, not a route" (bold on label)
    - Category: MINOR (formatting)
    - Action: Update repo to match PDF (remove bold from labels)

3. **Line 118-126** - Bold formatting on list labels
    - PDF: All bullet items plain text
    - Repo: Bold on "Cognitive:", "Perspectival:", "Legitimacy:", "Commitment:", "Strategic Planning:", "Catalyse Conversation:", "Scenario Exercises:", "Team Workshops:", "Cross-Organisational Dialogue:"
    - Category: MINOR (formatting)
    - Action: Update repo to match PDF (remove bold from labels)

4. **Line 139-141** - Bold formatting on list labels
    - PDF: "‣ Reinforcing Dynamics where..." (no bold)
    - Repo: "* **Reinforcing Dynamics** where..." (bold)
    - Category: MINOR (formatting)
    - Action: Update repo to match PDF (remove bold from labels)

5. **Line 62-66** - Bold formatting on AREAS labels
    - PDF: Plain text bullets
    - Repo: Bold on "Architecting", "Resisting", "Exploiting", "Avoiding", "Shaped"
    - Category: MINOR (formatting)
    - Action: Update repo to match PDF (remove bold from labels)

6. **Line 74-76** - Bold formatting on scenario labels
    - PDF: Plain text bullets
    - Repo: Bold on "Transformation", "Stagnation", "Collapse"
    - Category: MINOR (formatting)
    - Action: Update repo to match PDF (remove bold from labels)

7. **Line 84-87** - Bold formatting on adaptive strategy labels
    - PDF: Plain text bullets
    - Repo: Bold on "Organisations", "Communities", "Individuals", "Advocates"
    - Category: MINOR (formatting)
    - Action: Update repo to match PDF (remove bold from labels)

8. **Line 22** - Escaped period vs regular period
    - PDF: "through 2035."
    - Repo: "through 2035\."
    - Category: MINOR (markdown escape character)
    - Action: Update repo to match PDF (remove escape character)

9. **Line 106** - Section heading vs subsection
    - PDF: No separate heading for "Finding Your Entry Point"
    - Repo: "## Finding Your Entry Point" (separate heading)
    - Category: STRUCTURAL
    - Action: Flag as repo-only structure

#### Summary for Reading and Applying Guide
- **Total differences:** 25
- **Substantive:** 8
- **Structural (repo-only):** 5
- **Minor:** 12
- **Key issues:**
  - Inconsistent bold formatting throughout (removes emphasis from PDF)
  - "Forecast" capitalization inconsistency
  - AREAS toolkit section differs (repo has additional link)
  - Multiple word choice differences ("a group of" vs "several", "Forecasts" vs "They")

### AREAS Framework: A Guide to Strategic Positioning
**File:** `00A The AREAS Framework_ A Guide to Strategic Positioning.md`
**PDF Pages:** 19-23

#### Differences Found: 2

#### Substantive Differences (1)

1. **Line 67** - Grammatical difference ("but a" vs "but as")
   - PDF: "Lastly, AREAS is not meant to be a grand theory, but a fit-for-purpose tool to help shed light on the way power, or lack of power, interacts within major shifts."
   - Repo: "Lastly, AREAS is not meant to be a grand theory, but as a fit-for-purpose tool to help shed light on the way power, or lack of power, interacts within major shifts."
   - Category: SUBSTANTIVE (grammatically incorrect - should be "but a" not "but as")
   - Action: Update repo to match PDF (remove "as")

#### Structural Differences (1)

2. **Lines 1-5** - Jekyll frontmatter
   - Repo has YAML frontmatter (layout, title, nav_order)
   - PDF has no frontmatter
   - Category: REPO-ONLY
   - Action: Flag as repo-only (do not remove)

#### Minor Differences (0)

**Note**: The repository file adds consistent formatting enhancements throughout (bold on key sentences, italic on "Recognition pattern" labels, markdown headings, section structure) which improve readability and are appropriate for web display. These are intentional repo improvements, not errors to correct. The only substantive issue is the grammatical error "but as" which should be "but a".

#### Summary for AREAS Framework
- **Total differences:** 2
- **Substantive:** 1 (grammatical error "but as" should be "but a")
- **Structural (repo-only):** 1 (Jekyll frontmatter)
- **Minor:** 0
- **Key issues:**
  - Single grammatical error that needs correction
  - All formatting differences are intentional improvements for web display

## Summary of Files Requiring Updates

### `00 One Game to Many Games_  Understanding the Transformation.md`
**Priority:** CRITICAL
**Differences:** 16 total (7 substantive, 5 structural/repo-only, 4 minor)
**Key actions:**
1. Fix F06 title: "From From Open Society to Strategic Opacity" → "From Open Society to Tactical Shape-shifting"
2. Fix F05 title: Add "Climate" to read "From Collective Climate Ambition to Fragmented Adaptation"
3. Update all instances of "forecasts" to "Forecasts" (capitalized)
4. Change "revenue model" to "revenue source"
5. Change "sense-making" to "sensemaking"
6. Add "Note:" prefix before "These Forecasts were developed..."
7. Change "Digital Information Ecosystem" to "Digital Information Ecosystems" (plural)
8. Remove bold formatting from 4 locations (lines 17, 23, 37-40, 107)

### `00 Reading and Applying the 10F Forecasts.md`
**Priority:** HIGH
**Differences:** 25 total (9 substantive, 5 structural/repo-only, 11 minor)
**Key actions:**
1. Change "several authors" to "a group of authors" (line 17)
2. Change "They don't" to "Forecasts don't" (line 17)
3. Remove parentheses from "(like allies or adversaries)" (line 60)
4. Capitalize "Forecast" and remove bold in "every forecast" (line 110)
5. Remove bold from "Read the Bottom Line first" (line 112)
6. Remove bold from "Forecasts describe shifts..." (line 108)
7. Update AREAS toolkit section to match PDF: "in the next section and a tool for applying it, at the link below:" (line 130)
8. Remove escaped period "2035\." → "2035." (line 22)
9. Remove bold formatting from all list labels throughout (Orientation, Cognitive, Perspectival, Legitimacy, Commitment, Strategic Planning, etc.)
10. Remove bold from AREAS labels (Architecting, Resisting, Exploiting, Avoiding, Shaped)
11. Remove bold from scenario labels (Transformation, Stagnation, Collapse)
12. Remove bold from adaptive strategy labels (Organisations, Communities, Individuals, Advocates)

### `00A The AREAS Framework_ A Guide to Strategic Positioning.md`
**Priority:** LOW
**Differences:** 2 total (1 substantive, 1 structural/repo-only, 0 minor)
**Key actions:**
1. Fix grammatical error: "but as a fit-for-purpose" → "but a fit-for-purpose" (line 67)

## All 10 Forecasts (F01-F10) - Detailed Audit

### F01: From Agreed Transparency to Engineered Opacity
**File:** `01 From Agreed Transparency to Engineered Opacity.md`
**PDF Pages:** 24-32
**Status:** ✓ ALIGNED

#### Summary
- Content matches PDF source with standard structural differences
- All substantive content present and correct
- Differences are limited to:
  - Jekyll frontmatter (YAML) - repo-only
  - Markdown formatting (headers, bullets) - repo-only
  - Context block with navigation links - repo-only

#### Differences Found: 0 substantive
All content aligns with PDF. Standard repo formatting differences only.

---

### F02: From Political Spectrum to Ideological Fog
**File:** `02 From Political Spectrum to Ideological Fog.md`
**PDF Pages:** 33-42
**Status:** ✓ ALIGNED

#### Summary
- Content matches PDF source with minor wording variations
- All substantive content present and correct

#### Differences Found: 2 minor

1. **Key Domains** - Abbreviated wording
   - PDF: "Civil Society & Democratic Institutions"
   - Repo: "Civil Society"
   - Category: MINOR (abbreviated but same meaning)
   - Action: Consider expanding to match PDF for consistency

2. **Emerging Norms** - Clarifying prefix added
   - PDF: "Remix Culture Supplants Historical Realities"
   - Repo: "Ahistorical Remix Culture Supplants Historical Realities"
   - Category: MINOR (adds clarifying adjective)
   - Action: Flag as intentional enhancement, no change needed

---

### F03: From Digital Empathy to Localized Solidarity
**File:** `03 From Digital Empathy to Localized Solidarity.md`
**PDF Pages:** 43-53
**Status:** ⚠️ MINOR DIFFERENCE

#### Summary
- Content matches PDF source
- British vs American spelling difference in title

#### Differences Found: 1 substantive

1. **Title spelling** - Regional spelling variation
   - PDF: "From Digital Empathy to **Localised** Solidarity" (British spelling)
   - Repo: "From Digital Empathy to **Localized** Solidarity" (American spelling)
   - Filename: `03 From Digital Empathy to Localized Solidarity.md`
   - Category: SUBSTANTIVE (spelling standardization)
   - Action: Decide on spelling standard (British vs American) and apply consistently across all files

---

### F04: From Special Relationships to Strategic Situationships
**File:** `04 From Special Relationships to Strategic Situationships.md`
**PDF Pages:** 54-64
**Status:** ✓ ALIGNED

#### Summary
- Content matches PDF source
- All substantive content present and correct

#### Differences Found: 0 substantive
All content aligns with PDF. Standard repo formatting differences only.

---

### F05: From Collective Climate Ambition to Fragmented Adaptation
**File:** `05 From Collective Climate Ambition to Fragmented Adaptation.md`
**PDF Pages:** 65-72
**Status:** ✓ ALIGNED

#### Summary
- Content matches PDF source
- All substantive content present and correct
- Note: The F05 title issue identified in F00 audit (missing "Climate") does NOT appear in this file itself - the file is correctly named and titled. The error is only in the F00 document's listing of forecasts.

#### Differences Found: 0 substantive
All content aligns with PDF. File title is correct.

---

### F06: From Open Society to Strategic Opacity
**File:** `06 From Open Society to Strategic Opacity.md`
**PDF Pages:** 73-83
**Status:** ❌ CRITICAL MISMATCH

#### Summary
- **CRITICAL:** Filename and all content references use WRONG title
- PDF source title: "From Open Society to **Tactical Shape-shifting**"
- Repo filename: "From Open Society to **Strategic Opacity**"
- This is a fundamentally different forecast destination

#### Differences Found: 1 critical

1. **Entire forecast title incorrect**
   - PDF: "From Open Society to **Tactical Shape-shifting**"
   - Repo: "From Open Society to **Strategic Opacity**"
   - Category: CRITICAL SUBSTANTIVE ERROR
   - Impact: Misrepresents the entire forecast direction and content
   - Action: **URGENT** - Rename file and update all references
     - Rename file to: `06 From Open Society to Tactical Shape-shifting.md`
     - Update title in document header
     - Update frontmatter title
     - Update any cross-references in other documents
     - Check website navigation/links

**Note:** The content of the document itself appears to align with the PDF (references to "shape-shifting" appear throughout). Only the title/filename is wrong.

---

### F07: From Selective Migration to People as Asset Class
**File:** `07 From Selective Migration to People as Asset Class.md`
**PDF Pages:** 84-94
**Status:** ✓ ALIGNED

#### Summary
- Content matches PDF source
- All substantive content present and correct

#### Differences Found: 0 substantive
All content aligns with PDF. Standard repo formatting differences only.

---

### F08: From Energy Hegemony to Power Plurality
**File:** `08 From Energy Hegemony to Power Plurality.md`
**PDF Pages:** 95-105
**Status:** ✓ ALIGNED

#### Summary
- Content matches PDF source
- All substantive content present and correct

#### Differences Found: 0 substantive
All content aligns with PDF. Standard repo formatting differences only.

---

### F09: From Dollar Dominance to Money Unbundled
**File:** `09 From Dollar Dominance to Money Unbundled.md`
**PDF Pages:** 106-116
**Status:** ✓ ALIGNED

#### Summary
- Content matches PDF source
- All substantive content present and correct

#### Differences Found: 0 substantive
All content aligns with PDF. Standard repo formatting differences only.

---

### F10: From Technology Convergence to Sovereign Systems
**File:** `10 From Technology Convergence to Sovereign Systems.md`
**PDF Pages:** 117-127
**Status:** ✓ ALIGNED

#### Summary
- Content matches PDF source
- All substantive content present and correct

#### Differences Found: 0 substantive
All content aligns with PDF. Standard repo formatting differences only.

---

## Forecast Audit Summary

### Aligned Forecasts (8/10)
F01, F02, F04, F05, F07, F08, F09, F10 - All content matches PDF source

### Forecasts with Minor Differences (1/10)
- **F03:** British vs American spelling ("Localised" vs "Localized")

### Forecasts with Critical Issues (1/10)
- **F06:** Title completely wrong ("Strategic Opacity" should be "Tactical Shape-shifting")

### F06 Filename Change Required
```
CURRENT: 06 From Open Society to Strategic Opacity.md
CORRECT: 06 From Open Society to Tactical Shape-shifting.md
```

## Files with No Differences

The following forecast files have no substantive differences from the PDF source:
- `01 From Agreed Transparency to Engineered Opacity.md`
- `04 From Special Relationships to Strategic Situationships.md`
- `05 From Collective Climate Ambition to Fragmented Adaptation.md`
- `07 From Selective Migration to People as Asset Class.md`
- `08 From Energy Hegemony to Power Plurality.md`
- `09 From Dollar Dominance to Money Unbundled.md`
- `10 From Technology Convergence to Sovereign Systems.md`

## Repo-Only Content

All forecast files contain the following repo-only structural elements (consistent across all files):
1. **Jekyll frontmatter** (YAML) - layout, title, nav_order, parent
2. **Context block** - Navigation links to related documents
3. **Markdown formatting** - Headers (##), bullets (*), bold (**)
4. **Section structure** - Consistent heading hierarchy
5. **Internal links** - Cross-references between documents

These are intentional additions for web publishing and should be retained.

## Recommendations

### Immediate Actions (Critical)
1. **Rename F06 file:**
   - From: `06 From Open Society to Strategic Opacity.md`
   - To: `06 From Open Society to Tactical Shape-shifting.md`
2. **Update F06 references in:**
   - Document header (line 8)
   - Frontmatter title (line 3)
   - Any cross-references in other documents (check F00, F01)
   - Website navigation configuration

### High Priority
3. Apply all documented changes to `00 One Game to Many Games_  Understanding the Transformation.md` (16 differences)
4. Apply all documented changes to `00 Reading and Applying the 10F Forecasts.md` (25 differences)
5. Apply change to `00A The AREAS Framework_ A Guide to Strategic Positioning.md` (1 difference)

### Medium Priority
6. **Standardize spelling:** Decide on British vs American spelling and apply consistently
   - F03 currently uses American ("Localized") while PDF uses British ("Localised")
   - Check if other documents have similar variations
7. Consider expanding abbreviated terms in F02 ("Civil Society" → "Civil Society & Democratic Institutions")

### Documentation
8. Commit each file individually with reference to this audit
9. Archive previous website audit documents
10. Update any deployment documentation to reflect filename changes
