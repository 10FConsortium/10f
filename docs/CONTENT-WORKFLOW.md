# Content Update Workflow

## Current Challenge

The content team works in Google Docs/Pages, which produces PDFs for final review. This creates a manual alignment process where changes must be extracted from PDFs and applied to repository markdown files—inefficient and error-prone.

## Proposed Workflow

### Source of Truth: Google Drive Markdown Files

**Setup:**
- Maintain markdown (`.md`) files in a designated Google Drive folder
- Mirror the repository structure: one markdown file per forecast/section
- All content changes happen in these Google Drive markdown files
- The repository pulls updates from Google Drive, not the other way around

**Benefits:**
- Familiar Google Drive interface (no git required)
- Version history via Google Drive
- Collaborative editing with comments
- Markdown is human-readable plain text
- Direct sync to repository when ready

### Change Flow

```
Content Team (Google Drive)
    ↓
Markdown files edited/reviewed
    ↓
Changes finalized
    ↓
Sync to GitHub repository
    ↓
Website deployment
```

### Roles & Responsibilities

**Content Authors:**
- Edit markdown files in Google Drive folder
- Use markdown syntax for formatting (headings, bullets, bold)
- Add comments for review/discussion
- Mark files as "ready for sync" when finalized

**Technical Lead:**
- Sync Google Drive markdown → GitHub repository
- Verify formatting renders correctly
- Deploy to website
- Handle any technical markdown issues

## Markdown Basics for Authors

Simple formatting in plain text:

```markdown
# Main Heading
## Subheading

**Bold text**
*Italic text*

- Bullet point
- Another bullet

1. Numbered item
2. Another item
```

## File Naming Convention

Match repository structure:
- `00 One Game to Many Games_ Understanding the Transformation.md`
- `01 From Agreed Transparency to Engineered Opacity.md`
- `02 From Political Spectrum to Ideological Fog.md`
- etc.

## Review Process

1. **Draft:** Content authors edit in Google Drive
2. **Review:** Use Google Drive comments for feedback
3. **Finalize:** Resolve all comments, mark "ready for sync"
4. **Sync:** Technical lead syncs to repository
5. **Deploy:** Changes go live on website

## Why Not Direct Git Editing?

While direct repository editing is possible, it requires:
- Git knowledge (branches, commits, pull requests)
- Markdown editor comfort
- Command-line familiarity (or GitHub web UI)

**Google Drive approach:**
- ✅ No git learning curve
- ✅ Familiar collaborative interface
- ✅ Comment/suggestion workflow
- ✅ Version history built-in
- ✅ One-way sync keeps it simple

## Implementation Checklist

- [ ] Create Google Drive folder structure matching repository
- [ ] Copy current markdown files to Google Drive
- [ ] Set up sync mechanism (manual or automated)
- [ ] Document markdown formatting guide for authors
- [ ] Test workflow with one forecast update
- [ ] Establish sync cadence (weekly? on-demand?)

## Emergency Direct Edits

For urgent typos/corrections, the technical lead can:
1. Edit directly in GitHub repository
2. Immediately sync changes back to Google Drive
3. Notify content team of out-of-band change

This keeps Google Drive as the source of truth even for emergency fixes.

---

**Next Steps:** Discuss and refine this workflow with the team. Adjust based on actual editing patterns and comfort levels.
