import AboutContent from "@/app/components/ui/AboutContent";
import {
  getRealEstatePageData,
  type AboutPageData,
} from "@/lib/getRealEstateData";

/**
 * About page — real estate pattern for real estate:
 * 1. Page asks resolver for template page key "about"
 * 2. Resolver returns keyed variant payloads
 * 3. AboutContent is a normal React component that receives that data
 */
export default function AboutPage() {
  const data = getRealEstatePageData<AboutPageData>("about");

  return <AboutContent data={data} />;
}
