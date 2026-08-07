import OurTeam from "@/app/components/ui/OurTeam";
import PageBanner from "@/app/components/ui/PageBanner";
import { getPageBanner } from "@/lib/getRealEstateData";

export default function OurTeamPage() {
  const banner = getPageBanner("our-team");

  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      <PageBanner {...banner} />

      {/* Team Component */}
      <OurTeam />
    </main>
  );
}
