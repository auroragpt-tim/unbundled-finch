# Finch Technologies — Technical Intake Foundation

**Status:** Public inquiry experience implemented on the research branch; secure document-intake workspace **not** implemented.
**Scope:** Legal-document production, structured *technical* questions, client-directed production QC and safe handoffs.
**Reference principle:** Unbundled Finch Client Integrity & Non-Intervention Policy v1.0 — *You write it. We preserve it. If something is unclear, we ask rather than guess.*

## Source review and adaptation

The client shared Patrick Tepedino / Inquire2Esquire's *The Legal Intake Playbook* (75 pages) and *Criminal Defense Intake Scripts* (8 pages) on November 14, 2026. These describe the **law firm's prospective-client intake and sales process**, not Unbundled Finch's own service offering.

Reusable architectural concepts: clear process ownership, structured intake fields, visible status/disposition, identified follow-up, reliable handoffs, technical quality-control checkpoints, and operational measurements (Playbook pp. 5–14, 21–24, 42–46, 61–66). The criminal-defense guide's emphasis on urgent escalation, sparse identifying information and avoiding case facts on recorded calls (Scripts pp. 2–6) reinforces a critical boundary: **Unbundled Finch does not collect criminal defense matter details or decide legal urgency.** The firm must own those processes.

No original scripts were reproduced. This document and the new web form use independent Finch-specific language.

## What was engineered

### Public technical inquiry (non-confidential only)

- `src/components/ProductionInquiryForm.tsx`: one accessible four-stage form reused by `/contact` and `/portal`.
- `src/lib/productionIntake.ts`: central eight-service catalog matching the active Services page and a reusable list of *technical* QC prompts.
- Stages: **Service → Scope → Contact → Review**, with conditional date fields, validation, back navigation, and deliberate review before submission.
- Captured data: contact name/email, optional firm/phone, primary requested service, estimated file volume, requested output, desired timing and optional **non-confidential** technical overview.
- Informed acknowledgment required: no confidential case details, source materials, client identities or privileged information through the public form.
- No file input, account creation, browser persistence, automated acceptance, legal deadline calculation, or representation about privileged status.
- Existing contact and registration Formspree destinations are preserved. Processor/account ownership and actual inbox routing are **not independently verified**.

### Retired prototype

`src/pages/portal/NewRequest.tsx` and `.js` no longer contain the obsolete construction-change-order template or file-upload submission. The active router already redirects legacy portal paths to `/portal`. The public navigation now says **Request Services**, not Register Interest. The README and public privacy text reflect current behavior.

## Future authenticated production workflow — not yet live

1. **Received** — authenticated project reference and receipt time; the responsible person is recorded.
2. **Needs clarification** — missing source files, unreadable technical files or ambiguous client instructions are flagged; do not independently correct the substance.
3. **Ready for production** — client approves scope, deliverables and project-specific requirements.
4. **In production** — preserve source-to-output traceability and authorized transformation history.
5. **Technical QC** — check document counts, order, navigation, OCR, page labels, numbering, bookmarks, link targets and other accepted specifications.
6. **Delivered** — verified transfer, manifest, receipt time and responsible person.
7. **Closed** — client-directed revisions, correction of Finch production errors, and retention/deletion responsibilities.

A technical flag is **not** a determination of legal sufficiency, conflicts, case acceptance, attorney workload or court deadlines. No stage should advance automatically on a legal conclusion from AI.

## Security gates before real document upload or privileged content

- Authenticated users and scoped server-side permissions for every matter, upload and download.
- Encrypted private storage with controlled temporary access; retention/deletion policy and auditable events.
- Malware/type/size validation, verified source manifest, file integrity checks and failed-transfer alerts.
- Written policies governing client authorization, privacy, third-party processors, breach response and data access.
- Genuine technical and legal review of consent, data handling, confidentiality and jurisdictional obligations.
- No fake dashboards, client accounts, file-upload promises or claims that an email form is a secure legal document portal.

## Operational measurements (once a secure workflow exists)

- Time from inquiry to first **acknowledgment** (including high-percentile delays)
- Percent of technical requests submitted with complete specifications
- Requests stalled awaiting clarification, by age and owner
- Production cycle time against **agreed**, not inferred, commitments
- First-pass *technical* QC rate and rework causes
- Missing/failed document transfer events and time to resolution

Do not import sales KPIs like signed retainer rate, dial attempts, or lead cost without a separate, approved product scope.

## Testing / release checklist

Before merging this public-inquiry change:
- `npm ci && npm run build` completes; no TS/JSX diagnostics
- Both `/contact` and `/portal` render the four-stage form
- Each service is selectable, steps navigate back/forward and changing timing clears an obsolete date
- Required name, email, service, volume, output, timing and acknowledgments block advance when missing
- Phone preference requires a telephone number
- Review displays the selected metadata, and failed HTTP responses show a non-success alert
- A successful submission resets the form and shows a confirmation without implying an accepted work order
- Confirm no upload element, backend storage or active legacy portal route is exposed
- Check keyboard navigation, focus, mobile layout and screen-reader labels
- Confirm both Formspree account owners, routing, privacy, permission and retention settings with the site operator **before soliciting real confidential material**
- Verify Netlify deploy preview and production monitoring

Source PDFs are product-design reference material only; they are not legal/compliance authorities or endorsements of Unbundled Finch.
