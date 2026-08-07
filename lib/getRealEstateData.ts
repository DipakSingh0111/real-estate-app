import rawSiteData from "@/data/properties.json";
import type {
  LatestProject,
  ProjectItem,
  Property,
  TeamMember,
  Testimonials,
  UnifiedProjectDetail,
} from "@/types/property";

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

export type AwardsPageData = {
  PageBanner?: {
    titleField?: string;
    descriptionField?: string;
    breadcrumbEnabled?: boolean;
  };
  AwardsListing?: {
    title?: string;
    stats?: Array<{ value: string; label: string }>;
    items?: Array<{
      id: string;
      year: number;
      category: string;
      title: string;
      issuer: string;
      initials: string;
      iconVariant: "solid" | "ghost";
      iconColor: string;
    }>;
  };
};

export type ServiceStat = {
  value: string;
  label: string;
};

export type ServiceStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceItem = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  icon: string;
  heroImage: string;
  accent: string;
  accentLight: string;
  features: string[];
  highlights: { title: string; desc: string }[];
  stats: ServiceStat[];
  steps: ServiceStep[];
  extra: Record<string, string[] | { title: string; desc: string }[]>;
};

type ResolvedList<T> = {
  resolvedData?: T[];
};

type ResolvedLists<T, U> = {
  resolvedDataList?: [T[], U[]];
};

export type ServicesPageData = {
  PageBanner?: {
    titleField?: string;
    descriptionField?: string;
    breadcrumbEnabled?: boolean;
  };
  ServiceListing?: ResolvedList<ServiceItem>;
};

export type HomePageData = {
  Banner?: JsonRecord;
  Featured?: ResolvedList<Property> & {
    filter?: Partial<Property>;
    limit?: number;
  };
  About?: JsonRecord & {
    resolvedFeatures?: string[];
    resolvedStats?: AboutStatItem[];
  };
  CitiesWeServe?: ResolvedList<Property>;
  LatestProjects?: { items?: LatestProject[] };
  PropertyServices?: { items?: ServiceItem[] };
  InvestmentOpportunities?: ResolvedList<JsonRecord>;
  PropertyProcess?: { steps?: JsonRecord[] };
  Blog?: { items?: JsonRecord[] };
  FAQ?: { items?: JsonRecord[] };
  Contact?: ResolvedList<JsonRecord>;
  Testimonial?: { items?: Testimonials[] };
};

export type PropertiesPageData = {
  PropertyCatalog?: ResolvedList<Property>;
};

export type PropertyDetailPageData = {
  PropertyOverview?: ResolvedList<Property>;
  PropertyAmenities?: ResolvedList<Property>;
};

export type TeamPageData = {
  TeamGrid?: ResolvedList<TeamMember>;
};

export type ProjectsPageData = {
  ProjectCatalog?: ResolvedLists<LatestProject, ProjectItem>;
};

export type ProjectDetailPageData = {
  ProjectOverview?: ResolvedLists<LatestProject, ProjectItem>;
};

export type NewLaunchPageData = {
  LaunchProjectCatalog?: ResolvedList<ProjectItem>;
};

const propertiesPageData =
  getRealEstatePageData<PropertiesPageData>("properties");
export const properties =
  propertiesPageData.PropertyCatalog?.resolvedData ?? [];

const teamPageData = getRealEstatePageData<TeamPageData>("our-team");
export const team = teamPageData.TeamGrid?.resolvedData ?? [];

const servicesPageData =
  getRealEstatePageData<ServicesPageData>("services");
export const services =
  servicesPageData.ServiceListing?.resolvedData ?? [];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

const projectDetailData =
  getRealEstatePageData<ProjectDetailPageData>("project-detail");
const [latestProjects = [], resolvedLaunchProjects = []] =
  projectDetailData.ProjectOverview?.resolvedDataList ?? [];
export const launchProjects = resolvedLaunchProjects;

function fromLatestProject(
  project: LatestProject,
): UnifiedProjectDetail {
  return {
    id: project.id,
    title: project.title,
    slug: project.slug,
    builder: project.builder,
    location: project.location,
    city: project.city,
    status: project.status,
    price: project.price,
    image: project.image,
    description: project.description,
    beds: project.bedrooms ?? null,
    baths: project.bathrooms ?? null,
    area: project.area,
    parking: project.parking,
    amenities: [],
    highlights: [
      project.status,
      project.area,
      `${project.bedrooms} BHK`,
      project.location,
    ].filter(Boolean),
    source: "projects",
  };
}

function fromLaunchProject(
  project: ProjectItem,
): UnifiedProjectDetail {
  return {
    id: project.id,
    title: project.title,
    slug: project.slug,
    builder: project.builder || "NestVista Partners",
    location: project.location,
    city: project.city || "",
    status: project.status,
    price: project.price,
    image: project.image,
    description: project.description || "",
    beds: project.beds ?? null,
    baths: project.baths ?? null,
    category: project.category,
    possessionDate: project.possessionDate,
    amenities: project.amenities || [],
    highlights: project.highlights || [],
    source: "launchProjects",
  };
}

export const allUnifiedProjects: UnifiedProjectDetail[] = [
  ...latestProjects.map(fromLatestProject),
  ...launchProjects.map(fromLaunchProject),
];

export function getPropertyById(id: string) {
  return properties.find((property) => property.id === id);
}

export function getTeamMemberBySlug(slug: string) {
  return team.find((member) => member.slug === slug);
}

export function getOtherTeamMembers(slug: string, limit = 3) {
  return team
    .filter((member) => member.slug !== slug)
    .slice(0, limit);
}

export function getLaunchProjectBySlug(slug: string) {
  return launchProjects.find((project) => project.slug === slug);
}

export function getRelatedLaunchProjects(slug: string, limit = 3) {
  const current = getLaunchProjectBySlug(slug);
  const candidates = launchProjects.filter(
    (project) => project.slug !== slug,
  );
  if (!current) return candidates.slice(0, limit);

  const sameStatus = candidates.filter(
    (project) => project.status === current.status,
  );
  const rest = candidates.filter(
    (project) =>
      !sameStatus.some((same) => same.slug === project.slug),
  );
  return [...sameStatus, ...rest].slice(0, limit);
}

export function getUnifiedProjectBySlug(slug: string) {
  return allUnifiedProjects.find((project) => project.slug === slug);
}

export function getRelatedUnifiedProjects(slug: string, limit = 3) {
  const current = getUnifiedProjectBySlug(slug);
  const candidates = allUnifiedProjects.filter(
    (project) => project.slug !== slug,
  );
  if (!current) return candidates.slice(0, limit);

  const sameStatus = candidates.filter(
    (project) => project.status === current.status,
  );
  const rest = candidates.filter(
    (project) =>
      !sameStatus.some((same) => same.slug === project.slug),
  );
  return [...sameStatus, ...rest].slice(0, limit);
}

export function getStatusListingHref(status: string) {
  const normalized = status.toLowerCase();
  if (normalized.includes("ready")) {
    return "/newlaunch?status=ready-to-move";
  }
  if (
    normalized.includes("under") ||
    normalized.includes("construction")
  ) {
    return "/newlaunch?status=under-construction";
  }
  if (normalized.includes("new")) {
    return "/newlaunch?status=new-launch";
  }
  return "/projects";
}

export type PageBannerContent = {
  preTitle: string;
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
};

/** Inner-page banner copy from PageBanner.RealEstateInnerBanner1.byPage. */
export function getPageBanner(pageKey: string): PageBannerContent {
  const payload = findVariantByName("RealEstateInnerBanner1", "PageBanner");
  const byPage = isRecord(payload?.byPage) ? payload.byPage : undefined;
  const entry = byPage && isRecord(byPage[pageKey]) ? byPage[pageKey] : undefined;

  const breadcrumbs = Array.isArray(entry?.breadcrumbs)
    ? entry.breadcrumbs
        .filter(isRecord)
        .map((item) => ({
          label: typeof item.label === "string" ? item.label : "",
          ...(typeof item.href === "string" ? { href: item.href } : {}),
        }))
        .filter((item) => item.label)
    : [];

  return {
    preTitle: typeof entry?.preTitle === "string" ? entry.preTitle : "",
    title: typeof entry?.title === "string" ? entry.title : "",
    description:
      typeof entry?.description === "string" ? entry.description : "",
    breadcrumbs,
  };
}
