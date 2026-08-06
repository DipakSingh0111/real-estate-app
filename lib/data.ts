import rawSiteData from "@/data/properties.json";
import type {
  FAQItem,
  LatestProject,
  ProjectItem,
  Property,
  TeamMember,
  Testimonials,
  UnifiedProjectDetail,
} from "@/types/property";

const realEstate = rawSiteData.Realestate;
const sections = realEstate.sections;

/**
 * Compatibility view for application components.
 * The source JSON is template-driven; this adapter exposes concise datasets
 * so UI components never need to know the active variant's nested path.
 */
const siteData = {
  header: sections.Banner.variants.RealEstateBanner1,
  properties:
    sections.PropertyListings.variants.RealEstatePropertyListings1.items,
  team: sections.Team.variants.RealEstateTeam1.members,
  projects: sections.LatestProjects.variants.RealEstateLatestProject1.items,
  launchProjects:
    sections.LaunchProjects.variants.RealEstateLaunchProjects1.items,
  blogs: sections.Blog.variants.RealEstateBlog1.items,
  faqs: sections.FAQ.variants.RealEstateFAQ1.items,
  testimonials: sections.Testimonial.variants.RealEstateTestimonial1.items,
  aboutValues: sections.AboutValues.variants.RealEstateAboutValues1.values,
  aboutFeatures: sections.AboutStory.variants.RealEstateAboutStory1.features,
  aboutStats: sections.CompanyStatistics.variants.RealEstateStats1.stats,
  careerJobOpenings:
    sections.CareerJobs.variants.RealEstateCareerJobs1.openings,
  careerPerks:
    sections.CareerBenefits.variants.RealEstateCareerBenefits1.perks,
  visionCoreValues:
    sections.CompanyValues.variants.RealEstateCompanyValues1.values,
  visionCommitments:
    sections.MissionPillars.variants.RealEstateMissionPillars1.commitments,
  whyFeatures: sections.WhyChooseUs.variants.RealEstateWhyChooseUs1.features,
  whyProcess: sections.WhyChooseUs.variants.RealEstateWhyChooseUs1.process,
  investmentTips:
    sections.InvestmentTips.variants.RealEstateInvestmentTips1.tips,
  contactInfo: sections.ContactDetails.variants.RealEstateContactDetails1.items,
  propertyServices:
    sections.PropertyServices.variants.RealEstatePropertyServices1.items,
  propertyProcess:
    sections.PropertyProcess.variants.RealEstatePropertyProcess1.steps,
  officeInventory:
    sections.RentalListing.variants.RealEstateRentalListing1.officeInventory,
};

export {
  activeTemplate,
  templateComponents,
  templateSections,
  resolveVariant,
  resolveVariantByComponent,
  resolveDataSource,
  hydrateVariantPayload,
  getPageDefinition,
  getPageData,
  getSharedData,
  findVariantByName,
  buildPage,
  buildShared,
  getRealEstatePageData,
  getRealEstateSharedData,
  type AboutPageData,
} from "@/lib/getRealEstateData";

export const data = siteData;

export const header = siteData.header;
export const properties = siteData.properties as Property[];
export const team = siteData.team as TeamMember[];
export const projects = siteData.projects as LatestProject[];
export const launchProjects = siteData.launchProjects as ProjectItem[];
export const blogs = siteData.blogs;
export const faqs = siteData.faqs as FAQItem[];
export const testimonials = siteData.testimonials as Testimonials[];
export const aboutValues = siteData.aboutValues;
export const aboutFeatures = siteData.aboutFeatures;
export const aboutStats = siteData.aboutStats;
export const careerJobOpenings = siteData.careerJobOpenings;
export const careerPerks = siteData.careerPerks;
export const visionCoreValues = siteData.visionCoreValues;
export const visionCommitments = siteData.visionCommitments;
export const whyFeatures = siteData.whyFeatures;
export const whyProcess = siteData.whyProcess;
export const investmentTips = siteData.investmentTips;
export const contactInfo = siteData.contactInfo;
export const propertyServices = siteData.propertyServices;
export const propertyProcess = siteData.propertyProcess;
export const officeInventory = siteData.officeInventory;

function fromLatestProject(project: LatestProject): UnifiedProjectDetail {
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

function fromLaunchProject(project: ProjectItem): UnifiedProjectDetail {
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
  ...projects.map(fromLatestProject),
  ...launchProjects.map(fromLaunchProject),
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((item) => item.id === id);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}

export function getOtherTeamMembers(slug: string, limit = 3): TeamMember[] {
  return team.filter((member) => member.slug !== slug).slice(0, limit);
}

export function getLaunchProjectBySlug(slug: string): ProjectItem | undefined {
  return launchProjects.find((project) => project.slug === slug);
}

export function getRelatedLaunchProjects(
  slug: string,
  limit = 3,
): ProjectItem[] {
  const current = getLaunchProjectBySlug(slug);
  if (!current) {
    return launchProjects.filter((p) => p.slug !== slug).slice(0, limit);
  }

  const sameStatus = launchProjects.filter(
    (p) => p.slug !== slug && p.status === current.status,
  );
  if (sameStatus.length >= limit) return sameStatus.slice(0, limit);

  const rest = launchProjects.filter(
    (p) => p.slug !== slug && !sameStatus.some((s) => s.slug === p.slug),
  );
  return [...sameStatus, ...rest].slice(0, limit);
}

export function getProjectBySlug(slug: string): LatestProject | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getUnifiedProjectBySlug(
  slug: string,
): UnifiedProjectDetail | undefined {
  return allUnifiedProjects.find((project) => project.slug === slug);
}

export function getRelatedUnifiedProjects(
  slug: string,
  limit = 3,
): UnifiedProjectDetail[] {
  const current = getUnifiedProjectBySlug(slug);
  if (!current) {
    return allUnifiedProjects.filter((p) => p.slug !== slug).slice(0, limit);
  }

  const sameStatus = allUnifiedProjects.filter(
    (p) => p.slug !== slug && p.status === current.status,
  );
  if (sameStatus.length >= limit) return sameStatus.slice(0, limit);

  const rest = allUnifiedProjects.filter(
    (p) => p.slug !== slug && !sameStatus.some((s) => s.slug === p.slug),
  );
  return [...sameStatus, ...rest].slice(0, limit);
}

export function getStatusListingHref(status: string): string {
  const normalized = status.toLowerCase();
  if (normalized.includes("ready")) return "/newlaunch?status=ready-to-move";
  if (normalized.includes("under") || normalized.includes("construction")) {
    return "/newlaunch?status=under-construction";
  }
  if (normalized.includes("new")) return "/newlaunch?status=new-launch";
  return "/projects";
}

export default siteData;
