import OurTeam from "@/app/components/ui/OurTeam";
import PageBanner from "@/app/components/ui/PageBanner";

export default function OurTeamPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      <PageBanner
        preTitle="Meet Our Experts"
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
