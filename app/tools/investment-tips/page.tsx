import PageBanner from "@/app/components/ui/PageBanner";
import {
  getPageBanner,
  getRealEstatePageData,
} from "@/lib/getRealEstateData";

const tips =
  ((getRealEstatePageData("investment-tips").InvestmentTips as
    | {
        tips?: Array<{
          id: number;
          color: string;
          title: string;
          desc: string;
          points: string[];
        }>;
      }
    | undefined)?.tips ?? []) as Array<{
  id: number;
  color: string;
  title: string;
  desc: string;
  points: string[];
}>;

export default function InvestmentTipsPage() {
  const banner = getPageBanner("investment-tips");

  return (
    <main className="bg-[#FAF7F2] min-h-screen text-slate-900">
      <PageBanner {...banner} />

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Tips Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {tips.map((tip) => {
            return (
              <div
                key={tip.id}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-[#B8860B]/30 hover:shadow-md"
              >
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors">
                  {tip.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {tip.desc}
                </p>
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {tip.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B8860B] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
