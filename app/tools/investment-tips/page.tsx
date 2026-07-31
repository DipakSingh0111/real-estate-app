import Link from "next/link";
import {
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  MapPin,
  FileCheck,
  Building2,
  AlertTriangle,
  Lightbulb,
  IndianRupee,
} from "lucide-react";

const tips = [
  {
    id: 1,
    category: "Location",
    icon: MapPin,
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
    category: "Legal",
    icon: FileCheck,
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
    category: "Finance",
    icon: IndianRupee,
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
    category: "Investment",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600",
    title: "Ready-to-Move vs Under Construction",
    desc: "Ready-to-move properties are safer but costlier. Under-construction offers lower prices but carries delivery risk.",
    points: [
      "RTM: No GST, immediate possession",
      "UC: 10-20% cheaper, check builder track record",
      "Prefer RERA-registered UC projects only",
    ],
  },
  {
    id: 5,
    category: "Due Diligence",
    icon: ShieldCheck,
    color: "bg-rose-50 text-rose-600",
    title: "Check Title & Encumbrance",
    desc: "Always get a title search done by a lawyer. Ensure the property has no pending loans, disputes, or legal issues.",
    points: [
      "Get Encumbrance Certificate (EC)",
      "Verify seller's ownership documents",
      "Check for any court orders on property",
    ],
  },
  {
    id: 6,
    category: "Market",
    icon: Building2,
    color: "bg-cyan-50 text-cyan-600",
    title: "Commercial vs Residential",
    desc: "Commercial properties offer higher rental yields (6-10%) vs residential (2-4%) but require larger capital and carry higher vacancy risk.",
    points: [
      "Grade-A offices in IT hubs are safer bets",
      "Retail spaces near metro stations perform well",
      "Co-working spaces are growing asset class",
    ],
  },
  {
    id: 7,
    category: "Timing",
    icon: Lightbulb,
    color: "bg-orange-50 text-orange-600",
    title: "Buy in Pre-Launch or Early Phase",
    desc: "Pre-launch prices are typically 15-25% lower than final prices. Early buyers get the best units and maximum appreciation.",
    points: [
      "Research builder's past project delivery",
      "Negotiate for better floor/facing",
      "Lock in price before price revision",
    ],
  },
  {
    id: 8,
    category: "Risk",
    icon: AlertTriangle,
    color: "bg-slate-50 text-slate-600",
    title: "Avoid These Common Mistakes",
    desc: "Many first-time buyers make avoidable mistakes that cost them lakhs. Know what to watch out for.",
    points: [
      "Don't skip site visit — visit multiple times",
      "Never pay in cash — always bank transfer",
      "Don't ignore maintenance charges & parking costs",
    ],
  },
];

const categories = [
  "All",
  "Location",
  "Legal",
  "Finance",
  "Investment",
  "Due Diligence",
  "Market",
  "Timing",
  "Risk",
];

export default function InvestmentTipsPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      <section className="relative text-white overflow-hidden border-b border-stone-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#C89234] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="font-medium text-[#C89234]">Investment Tips</span>
          </nav>
          <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Real Estate <span className="text-[#C89234]">Investment Tips</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
            Practical, honest advice from 15+ years of real estate experience —
            before you invest a single rupee.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Tips Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.id}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-[#B8860B]/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tip.color}`}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="rounded-full border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                    {tip.category}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors">
                  {tip.title}
                </h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500 line-clamp-3">
                  {tip.desc}
                </p>
                <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
                  {tip.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-1.5 text-[11px] text-slate-600"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C89234]" />
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
