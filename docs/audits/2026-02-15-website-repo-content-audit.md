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

### F00: From One Game to Many Games
**File:** `00 One Game to Many Games_  Understanding the Transformation.md`
**Website:** https://www.10fconsortium.org/forecast-index/f00-one-game-to-many

#### Architectural Discovery
The website forecast pages are **landing pages** with minimal content (title, Bottom Line summary, PDF download link, tags), not full content pages. The repo files contain the full detailed content from the PDFs. This creates a structural ambiguity:

- **Website page content:** Title, Bottom Line, PDF link, tags
- **PDF/Repo content:** Full detailed forecast with sections for Old Assumptions, Emerging Norms, Transformation narrative, Strategic Blind Spots, Global Implications, AREAS, Scenario Pathways, Current Signals

**Implication:** If "website is source of truth" means the landing page content, then repo files should be minimal. If it means the PDF content (linked from the website), then repo files should match PDFs. This affects all forecasts.

#### Differences Found: 2

##### [1] Title Format
**Website version:**
"From One Game to Many Games: Understanding the Transformation"

**Repo version (line 7):**
"00	One Game to Many Games:  	Understanding the Transformation"
(includes section number "00", has extra whitespace/tabs between elements)

**Change type:** formatting
**Action:** TBD - depends on whether section numbers should be in titles

##### [2] Bottom Line Section
**Website version:**
Distinct "Bottom Line" section with condensed summary:
"We are shifting from "one game" with recognised rules to "many games" with incompatible arrangements. Strategic advantage now accrues to those who can navigate multiple systems simultaneously—processing complexity where others cannot and maintaining access through both formal and informal channels. These ten forecasts map where this transformation is most visible and consequential."

**Repo version:**
No distinct "Bottom Line" section. Similar concept appears in expanded form in line 23:
"We are shifting from one game to many games. Where previously leaders, companies and organisations navigated a single global system with recognised rules and institutions, they now simultaneously operate across multiple incompatible arrangements..."

**Change type:** structural
**Action:** TBD - repo has full PDF content, not landing page structure

#### Note on Content Scope
The repo file contains extensive content (145 lines) covering:
- The Shared Fiction and Its Collapse
- The Mechanism: Accelerating Norm Cascades
- Four Meta-Patterns of Transformation
- Three Essential Capabilities for Navigation
- Ten Forecasts Mapping the Transformation
- The AREAS Framework
- Why This Work Matters Now
- About These Forecasts

None of this detailed content appears on the website landing page, which only shows the Bottom Line summary and link to PDF.

## Summary of Files Requiring Updates

[Will be populated at end]

## Recommendations

- Apply all changes to synchronize repo with website
- Commit each file individually with reference to this audit
- Consider establishing process for ongoing synchronization
