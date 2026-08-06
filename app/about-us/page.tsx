import data from "../../data/properties.json";
import AboutPageBanner from "@/app/components/ui/AboutPageBanner";

const values = data.aboutValues;

const features = [
  "Verified premium listings",
  "Experienced property consultants",
  "End-to-end buying support",
  "Investment advisory",
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      <AboutPageBanner
        title="Our Story"
        description="Building trusted property journeys through verified opportunities, honest guidance, and relationships that last."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* ── Our Story Section (Left Image | Right Text) ── */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* 🖼️ Left Side: Image Container */}
          <div className="relative h-[350px] sm:h-[450px] w-full overflow-hidden rounded-2xl shadow-lg border border-stone-200">
            <img
              src="/images/serve_1.jpg"
              alt="Our Story Real Estate"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* 📝 Right Side: Content */}
          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              Our Story
            </span>
            <h2 className="font-heading mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Building trust through premium real estate.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base text-justify">
              Our mission is to connect people with extraordinary homes and
              investment opportunities. Every project is selected for its
              quality, prime location, and long-term value.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base text-justify">
              From luxury villas to premium apartments and commercial spaces,
              our experienced team guides every client with transparency,
              professionalism, and unmatched market knowledge.
            </p>

            {/* Features Grid */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-x p-3"
                >
                  <p className="text-xs sm:text-sm font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="border-t border-stone-200 bg-white py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              What We Stand For
            </span>
            <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Our core values
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-xl border border-stone-200 bg-[#FAF7F2] p-5 transition hover:border-[#C89234]/40 hover:shadow-md"
              >
                <span className="font-mono text-xs font-bold text-[#C89234]">
                  0{i + 1}
                </span>
                <p className="mt-2 font-heading text-lg font-bold text-slate-900">
                  {v.title}
                </p>
                <p className="mt-0.5 text-[13px] font-semibold uppercase tracking-wider text-[#B8860B]">
                  {v.label}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
