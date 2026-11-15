# Unbundled Finch — document production & Finch Technologies

A public website and **non-confidential** technical production inquiry experience, built with React 19, TypeScript, Tailwind CSS and Wouter, deployed with Netlify.

## Active public routes

- `/`, `/services`, `/process`, `/about`, `/technologies`, `/projects`: Public company information
- `/contact`: Guided non-confidential technical inquiry (existing contact Formspree destination)
- `/portal`: Guided non-confidential project inquiry (existing registration Formspree destination)
- `/portal/*` legacy routes: Redirect to `/portal` (no user account, secure document portal or billing dashboard is enabled)

## Inquiry design

`src/components/ProductionInquiryForm.tsx` is shared by /contact and /portal. It collects:

1. One primary technical production service (or "not sure").
2. Approximate file count, desired output format, requested timing, and optional *non-confidential* technical summary.
3. Contact name and email, optional organization and phone, preferred reply method, and explicit acknowledgments.
4. A confirmation review before external submission.

The catalog of services and internal technical QC prompts is in `src/lib/productionIntake.ts`. The form **does not** upload files, collect client names or legal narratives as designated fields, create a login, or automatically accept work / commit to deadlines. Do not use it for confidential or privileged information. No localStorage, cookies or draft persistence are added by this form.

### Third-party form destination

These are the repository's **pre-existing** Formspree endpoints:

- Contact inquiries → `https://formspree.io/f/meeeqkyp`
- Project inquiries → `https://formspree.io/f/moejzwne`

Before using live production inquiries, verify ownership, inbox routing, processor terms, privacy notice, data retention and access permissions for both endpoints. A successful HTTP response is **not** a signed service agreement, deliverable commitment or a secure client-file handoff. The external Formspree account has not been inspected here.

The former /portal/new-request template had an attachment upload input and a different form endpoint. Its TSX and JS components have been retired; old portal paths redirect to the public form.

## Deployment and local development

```bash
npm ci
npm run build
npm run dev
```

The Netlify publish directory is `dist` (see `netlify.toml`). The site must be smoke-tested after the deployment, including both endpoints, responsive step navigation, input validation, no-file-upload restrictions and privacy notice.

## Boundaries

Unbundled Finch provides client-directed technical document production, **not** legal advice, case evaluation, representation or confidential criminal-defense intake. Do not import third-party law-firm sales scripts or request factual details about legal matters on the public website. See `docs/finch-technologies/technical-intake-foundation.md` and the existing Client Integrity & Non-Intervention Policy for principles.

## Future secure production workspace (not implemented)

A secure authenticated document-transfer system would require a threat model, private storage, server-side authorization, encryption, malware/file-type checks, audit logs, retention rules, independent privacy/security review and explicit client instructions. Public Formspree forms are not a substitute.
