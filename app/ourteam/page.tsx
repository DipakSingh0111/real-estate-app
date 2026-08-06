import OurTeam from "@/app/components/OurTeam";
import AboutPageBanner from "@/app/components/ui/AboutPageBanner";

export default function OurTeamPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      <AboutPageBanner
        title="Our Team"
        description="Meet the experienced advisors and specialists who make every NestVista property journey personal and dependable."
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Our Team" },
        ]}
      />

      {/* Team Component */}
      <OurTeam />
    </main>
  );
}
