import PageBreadcrumb from "@/app/components/ui/PageBreadcrumb";

const tips = [
  {
    id: 1,
    color: "bg-blue-50 text-blue-600",
    title: "Location is Everything",
    desc: "Always prioritize location over property size. A smaller flat in a prime area will appreciate faster than a large one in a developing zone.",
    points: [
      "Check metro/highway connectivity",
      "Look for upcoming infrastructure projects",
      "Verify school, hospital proximity",
    ],
  },
  {
    id: 2,
    color: "bg-emerald-50 text-emerald-600",
    title: "Verify RERA Registration",
    desc: "Never invest in a project without checking its RERA registration. It protects you from builder delays and fraud.",
    points: [
      "Check on state RERA portal",
      "Verify possession date commitment",
      "Read all clauses before signing",
    ],
  },
  {
    id: 3,
    color: "bg-amber-50 text-amber-600",
    title: "Don't Over-Leverage",
    desc: "Keep your EMI below 40% of your monthly income. Over-leveraging can put you in financial stress if income drops.",
    points: [
      "Maintain 6-month emergency fund",
      "Factor in maintenance & society charges",
      "Compare home loan rates across banks",
    ],
  },
  {
    id: 4,
    color: "bg-purple-50 text-purple-600",
    title: "Ready-to-Move vs Under Construction",
    desc: "Ready-to-move properties are safer but costlier. Under-construction offers lower prices but carries delivery risk.",
    points: [
      "RTM: No GST, immediate possession",
      "UC: 10-20% cheaper, check builder track record",
      "Prefer RERA-registered UC projects only",
    ],
  },
];

export default function InvestmentTipsPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen text-slate-900">
      {/* Hero Section */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Main Title (Centered & Uppercase) */}
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            INVESTMENT TIPS
          </h1>

          <PageBreadcrumb
            items={[{ label: "Tools" }, { label: "Investment Tips" }]}
          />
        </div>
      </section>
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
