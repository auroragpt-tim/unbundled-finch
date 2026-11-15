/**
 * Finch Technologies / Production Studio: proposed technical intake metadata.
 *
 * INACTIVE: This module does not collect data, submit forms, store files,
 * contact clients, evaluate legal questions, or connect to the live portal.
 * Technical checks must never be used to make legal or case-acceptance decisions.
 *
 * Source concepts: Inquire2Esquire's Legal Intake Playbook and Criminal Defense
 * Intake Scripts (Nov 2026 review), adapted to the Unbundled Finch
 * Client Integrity & Non-Intervention Policy v1.0.
 */

export const PRODUCTION_STAGES = [
  "received",
  "needs_clarification",
  "ready_for_production",
  "in_production",
  "technical_qc",
  "delivered",
  "closed",
] as const;

export type ProductionStage = (typeof PRODUCTION_STAGES)[number];

export const PRODUCTION_SERVICES = {
  table_of_authorities: {
    label: "Table of Authorities",
    requestedInputs: ["Final client-approved brief", "Citation/style specification"],
    technicalChecks: ["Source-to-output citation mapping", "Pagination and alignment", "Client-specified format"],
  },
  ebinder_assembly: {
    label: "eBinder Assembly",
    requestedInputs: ["Document manifest", "Client-specified sequence"],
    technicalChecks: ["File completeness and order", "Bookmarks and internal links", "Page label consistency"],
  },
  exhibit_hyperlinking: {
    label: "Exhibit Hyperlinking",
    requestedInputs: ["Exhibit files", "Client-provided cross-reference instructions"],
    technicalChecks: ["Link targets", "Exhibit labels", "Broken-link scan"],
  },
  pleading_formatting: {
    label: "Pleading Formatting",
    requestedInputs: ["Client-approved pleading", "Court/jurisdiction formatting instructions"],
    technicalChecks: ["Client-specified margins and spacing", "Pagination and numbering", "Document integrity"],
  },
  document_processing: {
    label: "Document Processing",
    requestedInputs: ["Source documents", "Requested output format"],
    technicalChecks: ["File integrity", "Readable output", "Format match"],
  },
  record_extraction: {
    label: "Record Extraction",
    requestedInputs: ["Authorized source record set", "Client-directed extraction scope"],
    technicalChecks: ["Provenance and coverage log", "Record labels", "Preservation of source content"],
  },
  pdf_remediation: {
    label: "PDF Remediation",
    requestedInputs: ["Source PDF", "Requested remediation specification"],
    technicalChecks: ["OCR/searchability when requested", "Legibility", "Page order and labels"],
  },
  technical_quality_control: {
    label: "Technical Quality Control",
    requestedInputs: ["Deliverable files", "Client specification/checklist"],
    technicalChecks: ["File manifest match", "Navigation and labels", "Technical output specification"],
  },
} as const;

export type ProductionService = keyof typeof PRODUCTION_SERVICES;

export type TechnicalIntakeFlag =
  | "missing_authorization"
  | "missing_source_files"
  | "missing_deliverable"
  | "missing_technical_instructions"
  | "missing_client_provided_jurisdiction";

export interface TechnicalIntakeSummary {
  service: ProductionService;
  sourceFileCount: number;
  requestedDeliverable?: string;
  technicalInstructions?: string;
  clientAuthorizedScope: boolean;
  /** Required only for pleading-formatting workflows; never inferred by Finch. */
  clientProvidedJurisdiction?: string;
}

/** Human-readable technical QC prompts, not legal advice or substantive review. */
export function technicalChecksFor(service: ProductionService): readonly string[] {
  return PRODUCTION_SERVICES[service].technicalChecks;
}

/**
 * Pure local validation of high-level production metadata.
 * Callers must NOT treat an empty flag list as permission to collect confidential
 * material or as a legal qualification, conflict check, or service commitment.
 */
export function inspectTechnicalIntake(summary: TechnicalIntakeSummary): TechnicalIntakeFlag[] {
  const flags: TechnicalIntakeFlag[] = [];
  if (!summary.clientAuthorizedScope) flags.push("missing_authorization");
  if (!Number.isInteger(summary.sourceFileCount) || summary.sourceFileCount <= 0) {
    flags.push("missing_source_files");
  }
  if (!summary.requestedDeliverable?.trim()) flags.push("missing_deliverable");
  if (!summary.technicalInstructions?.trim()) flags.push("missing_technical_instructions");
  if (
    summary.service === "pleading_formatting" &&
    !summary.clientProvidedJurisdiction?.trim()
  ) {
    flags.push("missing_client_provided_jurisdiction");
  }
  return flags;
}
