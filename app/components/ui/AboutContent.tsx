import Card from "@/app/components/ui/Card";
import PageBanner from "@/app/components/ui/PageBanner";
import PageContainer from "@/app/components/ui/PageContainer";
import SectionHeader from "@/app/components/ui/SectionHeader";
import {
  getPageBanner,
  type AboutPageData,
} from "@/lib/getRealEstateData";
import { templateImage } from "@/lib/templateImages";

type AboutContentProps = {
  data: AboutPageData;
};

/**
 * Presentation layer for the About page.
 * Receives already-resolved variant payloads — never looks up JSON itself
 * and never treats variant IDs as React component names.
 */
export default function AboutContent({ data }: AboutContentProps) {
  const banner = getPageBanner("about");
  const features = data.AboutStory?.features ?? [];
  const values = data.AboutValues?.values ?? [];
  const stats =
    data.ExperienceStats?.resolvedData ??
    data.ExperienceStats?.stats ??
    [];

  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      <PageBanner {...banner} />

      <PageContainer as="section" className="py-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[350px] w-full overflow-hidden rounded-2xl border border-stone-200 shadow-lg sm:h-[450px]">
            <img
              src={templateImage(12)}
              alt="Our Story Real Estate"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <SectionHeader
              preTitle="Our Story"
              title="Building trust through premium real estate."
              align="left"
            />
            <p className="mt-4 text-justify text-[15px] leading-relaxed text-slate-600 sm:text-base">
              Our mission is to connect people with extraordinary homes and
              investment opportunities. Every project is selected for its
              quality, prime location, and long-term value.
            </p>
            <p className="mt-3 text-justify text-[15px] leading-relaxed text-slate-600 sm:text-base">
              From luxury villas to premium apartments and commercial spaces,
              our experienced team guides every client with transparency,
              professionalism, and unmatched market knowledge.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-2.5 p-3">
                  <p className="text-xs font-medium text-slate-700 sm:text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>

      {stats.length > 0 && (
        <section className="border-t border-stone-200 bg-[#FAF7F2] py-8 lg:py-10">
          <PageContainer>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={`${stat.label}-${stat.value}`}
                  className="rounded-2xl border border-stone-200/80 bg-white px-5 py-6 text-center shadow-sm"
                >
                  <p className="font-heading text-3xl font-bold text-[#B8863D]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-stone-800">
                    {stat.label}
                  </p>
                  <p className="text-xs text-stone-500">{stat.subLabel}</p>
                </div>
              ))}
            </div>
          </PageContainer>
        </section>
      )}

      <section className="border-t border-stone-200 bg-white py-8 lg:py-10">
        <PageContainer>
          <SectionHeader
            preTitle="What We Stand For"
            title="Our core values"
            align="left"
            className="mb-6"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={value.title}
                interactive
                className="bg-[#FAF7F2] p-5"
              >
                <span className="font-mono text-xs font-bold text-[#C89234]">
                  0{index + 1}
                </span>
                <p className="mt-2 font-heading text-lg font-bold text-slate-900">
                  {value.title}
                </p>
                <p className="mt-0.5 text-[13px] font-semibold uppercase tracking-wider text-[#B8860B]">
                  {value.label}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
