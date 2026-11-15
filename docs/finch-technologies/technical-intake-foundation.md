# Finch Production Studio — Technical Intake Foundation

**Status:** Internal design proposal (not deployed or offered as a new public service)
**Owner:** Finch Technologies
**Scope:** Legal-document production intake, structured technical handoffs, and production quality control.

## Why this belongs in UnbundledFinch

The November 2026 source review covers Patrick Tepedino / Inquire2Esquire's *The Legal Intake Playbook* (75-page PDF) and *Criminal Defense Intake Scripts* (8-page PDF). The publications describe a firm's prospective-client intake and sales operation; UnbundledFinch instead provides **technical document production** under its Client Integrity & Non-Intervention Policy (v1.0). Adapt the **workflow architecture**, not the business model or copyrighted scripts.

Relevant source concepts:
- An inquiry needs a known owner, timestamps, visible status and explicit next action (Playbook pp. 5–6, 8–9).
- Capture required information in structured fields, not scattered correspondence (Playbook pp. 11–14, 15–20).
- Every completed interaction needs a disposition and follow-up ownership (Playbook pp. 21–24).
- Measure technical handoff completeness and failed transfers (Playbook pp. 13, 42–46).
- The criminal-defense example demonstrates how *urgency flags* and *case metadata* can be routed without asking an intake employee to decide substantive legal questions (Criminal Defense Scripts pp. 2–6).

All items below are newly articulated for UnbundledFinch; they are **not** verbatim copied scripts or a claim of endorsement by Inquire2Esquire.

## Proposed Intake-to-Delivery Workflow

1. **Received** — Create a unique work-order reference and record receipt timestamp; acknowledge the requester through an approved channel.
2. **Needs Clarification** — Flag missing source files, unclear technical output, inaccessible/corrupt documents, or contradictory instructions. **Preserve and escalate; do not guess or edit substantive content.**
3. **Ready for Production** — Authorized requester confirms scope, deliverable specifications, materials and turnaround expectations; production staff accepts the technical work.
4. **In Production** — Log technical actions on client-provided files and track source-to-output provenance.
5. **Technical QC** — Verify file counts, specified order, links, bookmarks, OCR/searchability, page/Bates labels, deliverable format and client-provided instructions, as applicable.
6. **Delivered** — Record delivery timestamp, file list, versions and delivery confirmation through an approved method.
7. **Closed** — Resolve any client-directed revisions under the existing policy and follow configured retention/deletion rules.

Do **not** auto-transition based on an AI legal conclusion, a criminal charge, a deadline or a claim's merits. A request may move back to Needs Clarification from any production stage.

## Minimal Structured Fields

Keep the initial form **technical and data-minimized**:
- Requested Finch production service (eBinder, Table of Authorities, Exhibit Hyperlinking, Pleading Formatting, Document Processing, Record Extraction, PDF Remediation, or Technical QC).
- Requester identity/contact from an authenticated account, where possible; opaque client matter/work-order reference rather than an unnecessary person's name.
- Requested output format, document order, and written client specifications.
- Number of source files and an authenticated upload manifest **only after** secure storage is implemented.
- Client-provided due date/urgency and specific court/jurisdiction formatting requirement **only where relevant**; never infer a legal deadline.
- Internal owner, current state, outstanding questions, last follow-up, technical QC result, and delivery reference.
- Audit trail: actor, timestamp, field changed, source version and reason, with appropriate access control.

For criminal-defense **clients of a law firm**, the source's custody/booking/charge details are the **firm's** counsel-reviewed intake process, *not default UnbundledFinch intake fields*. Do not collect guilt narratives or criminal facts in Finch production forms. If ever building a separate firm-controlled intake platform, require counsel approval, verified conflicts/privacy design, urgent human escalation, and strict access controls before collecting any client matter data.

## Work Queue and Dispositions

Internal technical dispositions could be:
- Acknowledged — awaiting material
- Clarification requested — awaiting requester
- Ready — assignment pending
- In production
- QC failed — return to production
- QC passed — delivery pending
- Delivered — confirmation pending
- Closed / cancelled by requester

All states should have one responsible internal owner. A pending clarification should schedule a follow-up **only within the agreed communication permissions**, without copying the vendor's aggressive sales call cadence.

## Metrics Worth Instrumenting

Prefer metrics aligned to legal production:
- Time from technical request to first acknowledgment (median, and slowest decile)
- Intake completeness at first submission
- Requests awaiting clarification, by age
- Production cycle time and on-time delivery relative to **agreed** dates
- First-pass technical QC rate, QC rework rate and missing-file incidents
- Failed delivery / transfer alerts and resolution time

Avoid importing the source's *signed-retainer conversion rate*, *lead cost*, and *call attempts per lead* into Finch's production dashboard. These measure a law firm's marketing/sales floor, not Finch service quality.

## Implementation Gates / Security

The current repository README identifies a **demo portal without production-grade authentication, backend storage, or secure uploads**. The current `src/pages/portal/NewRequest.tsx` also contains a live-looking Formspree submission with a file input, despite the README's demo-mode description. **Reconcile this discrepancy before any real-client intake:** confirm the actual behavior and endpoint ownership, privacy notice, access controls, storage location, retention, file handling and approved categories of information. Do not describe that page as a secure legal-matter intake channel until these checks pass.

Implementation order:
1. Agree on precise technical fields and data-minimization policy; create synthetic request fixtures.
2. Implement a local-only, non-submitting technical intake prototype using `src/lib/productionIntake.ts`.
3. Build protected authentication, server-side validation, file security, audit logs, retention and access controls.
4. Add the workflow to a dedicated Finch Production Studio workspace; verify with synthetic test materials.
5. Only after security and policy review, evaluate whether a public/requester-facing form should replace the existing work-order page.

## What Is Out of Scope

- Legal advice, case qualification, legal deadlines computed by Finch, conflict determinations, substantive edits, representations about expected outcomes or attorney-client privilege.
- CRM sales-floor operation, autodialers, bulk texts, recorded-call QA, retainers, or collecting criminal-defense case narratives.
- Reusing or republishing Inquire2Esquire's original scripts.
- Deploying changes to the live site on the basis of these documents alone.

## Source provenance and review

- Patrick Tepedino, Inquire2Esquire, *The Legal Intake Playbook*, uploaded 14 Nov 2026. Concepts drawn mainly from chapters 1–5, 9–10, 14 and the appendix.
- Patrick Tepedino, Inquire2Esquire, *Criminal Defense Intake Scripts*, uploaded 14 Nov 2026. Concepts drawn from pp. 2–6.
- Unbundled Finch, *Client Integrity & Non-Intervention Policy*, version 1.0 (existing internal policy).

This document is a workflow/product-design note, **not a regulatory compliance opinion**. Before any firm-client calling or recording capabilities are proposed, qualified counsel must review current jurisdiction-specific requirements.
