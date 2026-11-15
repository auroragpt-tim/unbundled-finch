/**
 * Finch Technologies — technical production workflow catalog.
 *
 * The public inquiry form uses service labels and technical scope hints only.
 * The internal workflow/QC helpers do not infer legal deadlines, determine
 * conflicts, evaluate a case, or authorize confidential document collection.
 */
export const PRODUCTION_STAGES = [
  "received", "needs_clarification", "ready_for_production",
  "in_production", "technical_qc", "delivered", "closed",
] as const;
export type ProductionStage = (typeof PRODUCTION_STAGES)[number];

export const PRODUCTION_SERVICES = {
  pdf_assembly: {
    label: "PDF Assembly & Sequencing",
    summary: "Combine files into a client-directed order.",
    requestedInputs: ["Source-file list", "Client-specified sequence"],
    technicalChecks: ["File count and order", "Page continuity", "Output integrity"],
  },
  ebinder: {
    label: "eBinder Architecture",
    summary: "Build bookmarks, sections and navigation.",
    requestedInputs: ["Document manifest", "Requested tab and section hierarchy"],
    technicalChecks: ["Bookmark destinations", "Section order", "Navigation usability"],
  },
  hyperlinking: {
    label: "Exhibit & Internal Hyperlinking",
    summary: "Connect exhibits and references to intended pages.",
    requestedInputs: ["Source files", "Client-provided cross-reference instructions"],
    technicalChecks: ["Link destinations", "Reference labels", "Broken links"],
  },
  ocr: {
    label: "OCR & Searchable Text",
    summary: "Make suitable scanned files searchable.",
    requestedInputs: ["Scanned source files", "Requested searchability outcome"],
    technicalChecks: ["Searchable text layer", "Page count", "Original visual fidelity"],
  },
  numbering: {
    label: "Pagination, Bates & Indexing",
    summary: "Apply numbering, page labels and document indexes.",
    requestedInputs: ["Client-specified numbering scheme", "Source file order"],
    technicalChecks: ["Numbering sequence", "Index targets", "Page labels"],
  },
  authorities: {
    label: "Table of Authorities Production",
    summary: "Format and verify a table from client-provided citations.",
    requestedInputs: ["Final client-approved brief", "Client-provided citation/style specifications"],
    technicalChecks: ["Reference mapping", "Table pagination", "Technical formatting"],
  },
  formatting: {
    label: "Technical Formatting",
    summary: "Apply client-specified document formatting.",
    requestedInputs: ["Approved source text", "Client-provided formatting instructions"],
    technicalChecks: ["Specified layout", "Pagination", "Source-content preservation"],
  },
  optimization_qc: {
    label: "Optimization & Production QC",
    summary: "Check and optimize technical file quality.",
    requestedInputs: ["Completed draft files", "Technical acceptance criteria"],
    technicalChecks: ["File integrity", "Navigation", "Client-specified output requirements"],
  },
} as const;

export type ProductionService = keyof typeof PRODUCTION_SERVICES;

/** Human-oriented prompts; never a determination of legal sufficiency. */
export function technicalChecksFor(service: ProductionService): readonly string[] {
  return PRODUCTION_SERVICES[service].technicalChecks;
}

export interface TechnicalIntakeSummary {
  service: ProductionService;
  sourceFileCount: number;
  requestedDeliverable?: string;
  technicalInstructions?: string;
  clientAuthorizedScope: boolean;
}

export type TechnicalIntakeFlag =
  | "missing_authorization"
  | "missing_source_files"
  | "missing_deliverable"
  | "missing_technical_instructions";

/** Local-only metadata validation for a future authenticated production workspace. */
export function inspectTechnicalIntake(summary: TechnicalIntakeSummary): TechnicalIntakeFlag[] {
  const flags: TechnicalIntakeFlag[] = [];
  if (!summary.clientAuthorizedScope) flags.push("missing_authorization");
  if (!Number.isInteger(summary.sourceFileCount) || summary.sourceFileCount <= 0) flags.push("missing_source_files");
  if (!summary.requestedDeliverable?.trim()) flags.push("missing_deliverable");
  if (!summary.technicalInstructions?.trim()) flags.push("missing_technical_instructions");
  return flags;
}
