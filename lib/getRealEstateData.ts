import rawSiteData from "@/data/properties.json";

export type JsonRecord = Record<string, unknown>;

export type TemplateComponentRef = {
  /** Becomes the output object key. */
  key: string;
  /** Content variant ID, never a React component name. */
  component: string;
};

export type TemplatePageConfig = {
  expand?: string;
  components?: TemplateComponentRef[];
};

export type TemplateConfig = {
  shared?: Record<string, string>;
  pages?: Record<string, TemplatePageConfig>;
};

type SectionVariants = {
  variants?: Record<string, JsonRecord>;
};

type RealEstateRoot = {
  activeTemplate: string;
  templateComponents: Record<string, TemplateConfig>;
  sections: Record<string, SectionVariants>;
};

const realEstate = rawSiteData.Realestate as RealEstateRoot;

export const activeTemplate = realEstate.activeTemplate;
export const templateComponents = realEstate.templateComponents;
export const templateSections = realEstate.sections;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getTemplate(templateId = activeTemplate): TemplateConfig | undefined {
  return templateComponents[templateId];
}

export function getPageDefinition(
  pageKey: string,
  templateId = activeTemplate,
): TemplatePageConfig | undefined {
  return getTemplate(templateId)?.pages?.[pageKey];
}

/**
 * Search sections.*.variants for a content variant ID.
 * The optional preferred key handles duplicate variant IDs predictably.
 */
export function findVariantByName(
  variantName: string,
  preferredSectionKey?: string,
): JsonRecord | undefined {
  const preferred = preferredSectionKey
    ? templateSections[preferredSectionKey]?.variants?.[variantName]
    : undefined;

  if (preferred) return preferred;

  for (const section of Object.values(templateSections)) {
    const payload = section.variants?.[variantName];
    if (payload) return payload;
  }

  return undefined;
}

/** Resolve a path such as Team.variants.RealEstateTeam1.members. */
export function resolveDataSource(path: string): unknown {
  if (!path) return undefined;

  let current: unknown = templateSections;
  for (const segment of path.split(".")) {
    if (!isRecord(current) && !Array.isArray(current)) return undefined;
    current = (current as JsonRecord)[segment];
  }

  return current;
}

/** Resolve references inside a variant while preserving its original fields. */
export function hydrateVariantPayload(payload: JsonRecord): JsonRecord {
  const hydrated: JsonRecord = { ...payload };

  if (typeof payload.dataSource === "string") {
    hydrated.resolvedData = resolveDataSource(payload.dataSource);
  }

  if (Array.isArray(payload.dataSources)) {
    hydrated.resolvedDataList = payload.dataSources
      .filter((source): source is string => typeof source === "string")
      .map(resolveDataSource);
  }

  if (typeof payload.featuresSource === "string") {
    hydrated.resolvedFeatures = resolveDataSource(payload.featuresSource);
  }

  if (typeof payload.statsSource === "string") {
    hydrated.resolvedStats = resolveDataSource(payload.statsSource);
  }

  return hydrated;
}

/**
 * Generic dynamic page resolver.
 *
 * template page: [{ key: "AboutStory", component: "RealEstateAboutStory1" }]
 * result:        { AboutStory: <RealEstateAboutStory1 payload> }
 */
export function getRealEstatePageData<
  T extends JsonRecord = JsonRecord,
>(
  pageKey: string,
  templateId = activeTemplate,
): T {
  const page = getPageDefinition(pageKey, templateId);
  const pageData: JsonRecord = {};

  for (const reference of page?.components ?? []) {
    const payload = findVariantByName(
      reference.component,
      reference.key,
    );

    if (payload) {
      pageData[reference.key] = hydrateVariantPayload(payload);
    }
  }

  return pageData as T;
}

/** Resolve template-level Topbar, Header and Footer payloads. */
export function getRealEstateSharedData<
  T extends JsonRecord = JsonRecord,
>(templateId = activeTemplate): T {
  const shared = getTemplate(templateId)?.shared;
  const sharedData: JsonRecord = {};

  for (const [key, variantName] of Object.entries(shared ?? {})) {
    const payload = findVariantByName(variantName, key);
    if (payload) {
      sharedData[key] = hydrateVariantPayload(payload);
    }
  }

  return sharedData as T;
}

/** Direct lookup when both the section and variant are already known. */
export function resolveVariant(
  sectionKey: string,
  variantName: string,
) {
  const payload = templateSections[sectionKey]?.variants?.[variantName];
  if (!payload) return undefined;

  return { sectionKey, variantName, payload };
}

/** Compatibility alias for existing consumers. */
export const resolveVariantByComponent = (componentName: string) => {
  const payload = findVariantByName(componentName);
  return payload
    ? { sectionKey: "", variantName: componentName, payload }
    : undefined;
};

/** Compatibility alias; prefer getRealEstatePageData. */
export const getPageData = getRealEstatePageData;

/** Compatibility alias; prefer getRealEstateSharedData. */
export const getSharedData = getRealEstateSharedData;

/** Compatibility output for older array-based callers. */
export function buildPage(pageKey: string, templateId = activeTemplate) {
  return Object.entries(
    getRealEstatePageData(pageKey, templateId),
  ).map(([key, payload]) => ({
    key,
    sectionKey: key,
    variantName: "",
    payload: payload as JsonRecord,
  }));
}

/** Compatibility output for older array-based callers. */
export function buildShared(templateId = activeTemplate) {
  return Object.entries(getRealEstateSharedData(templateId)).map(
    ([key, payload]) => ({
      key,
      sectionKey: key,
      variantName: "",
      payload: payload as JsonRecord,
    }),
  );
}

export type AboutValueItem = {
  title: string;
  label: string;
  number: string;
  description: string;
};

export type AboutStatItem = {
  value: string;
  label: string;
  subLabel: string;
};

export type AboutPageData = {
  PageBanner?: {
    titleField?: string;
    descriptionField?: string;
    breadcrumbEnabled?: boolean;
  };
  AboutStory?: {
    features?: string[];
  };
  AboutValues?: {
    values?: AboutValueItem[];
  };
  ExperienceStats?: {
    dataSource?: string;
    resolvedData?: AboutStatItem[];
    stats?: AboutStatItem[];
  };
};
