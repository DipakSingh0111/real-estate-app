"use client";

import { useEffect, useRef, useState } from "react";
import { Fraunces, Inter } from "next/font/google";
import { MapPin, Phone, Mail, Send, PenSquare } from "lucide-react";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/*scroll-reveal hook*/
function useInView(
  threshold = 0.15,
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* drafting-style corner marks */
function CornerMarks({
  tone = "border-[#B8874A]",
  show = "group-hover:opacity-100",
}) {
  const base = `absolute h-5 w-5 ${tone} opacity-0 transition-opacity duration-500 ${show}`;
  return (
    <>
      <span className={`${base} left-3 top-3 border-l-2 border-t-2`} />
      <span className={`${base} right-3 top-3 border-r-2 border-t-2`} />
      <span className={`${base} bottom-3 left-3 border-b-2 border-l-2`} />
      <span className={`${base} bottom-3 right-3 border-b-2 border-r-2`} />
    </>
  );
}

/* animated input */
function FormField({ as = "input", ...props }: any) {
  const Tag: any = as;
  return (
    <div className="group relative">
      <Tag
        {...props}
        className="peer w-full rounded-lg border border-[#14181C]/15 bg-white px-4 py-3.5 text-[15px] text-[#14181C] outline-none transition-colors placeholder:text-[#14181C]/35 focus:border-[#B8874A]"
      />
      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#B8874A] transition-all duration-300 peer-focus:w-full" />
    </div>
  );
}

export default function ContactPage() {
  const [infoRef, infoInView] = useInView(0.2);
  const [formRef, formInView] = useInView(0.2);
  const [mapRef, mapInView] = useInView(0.1);

  const contactItems = [
    {
      icon: MapPin,
      label: "Office",
      value: "Sector 62, Noida, Uttar Pradesh",
    },
    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
    { icon: Mail, label: "Email", value: "info@eliteestates.com" },
  ];

  return (
    <main
      className={`${fraunces.variable} ${inter.variable} bg-[#F7F5EE]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="rounded-[32px] border border-[#D9D6CC] bg-white p-10 shadow-lg">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B8874A]/30 bg-[#F7E7B0]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6B27]">
                <PenSquare size={14} />
                Contact Us
              </span>

              <h1
                style={{ fontFamily: "var(--font-display)" }}
                className="mt-6 max-w-2xl text-4xl font-semibold text-[#14181C] sm:text-5xl"
              >
                Simple, direct support for every property need.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
                Reach out to our team for buying advice, property visits, or
                quick answers. We’ll respond with clear guidance and next steps.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-3xl border border-[#E4E1D7] bg-[#FBF8F1] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9D7A1] text-[#776327]">
                    <Icon size={18} />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#8B6B27]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#14181C]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            ref={formRef}
            className={`rounded-[32px] border border-[#D9D6CC] bg-white p-8 shadow-lg transition-all duration-700 ease-out motion-reduce:transition-none lg:p-10 ${
              formInView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6B27]">
              Send a Request
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 text-3xl font-semibold text-[#14181C]"
            >
              We’ll get back to you within one business day.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#475569]">
              Fill in your details and a property specialist will contact you
              with tailored options.
            </p>

            <form className="mt-8 space-y-4">
              <FormField type="text" placeholder="Full Name" />
              <FormField type="email" placeholder="Email Address" />
              <FormField type="tel" placeholder="Phone Number" />
              <FormField as="textarea" rows={5} placeholder="Message" />

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-[#14181C] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#333333]"
              >
                Request Contact
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          <div
            ref={infoRef}
            className={`rounded-[32px] border border-[#D9D6CC] bg-[#FFF8E7] p-8 shadow-lg transition-all duration-700 ease-out motion-reduce:transition-none lg:p-10 ${
              infoInView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6B27]">
              Why contact us?
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 text-3xl font-semibold text-[#14181C]"
            >
              Friendly support, no jargon.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#475569]">
              Whether you need a virtual tour, pricing insight, or booking help,
              our team handles every request with care and clarity.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-white p-5">
                <p className="text-sm font-semibold text-[#14181C]">
                  Visit Planning
                </p>
                <p className="mt-2 text-sm text-[#475569]">
                  We’ll help you schedule property viewings at the best times.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-5">
                <p className="text-sm font-semibold text-[#14181C]">
                  Buyer & seller guidance
                </p>
                <p className="mt-2 text-sm text-[#475569]">
                  Expert advice for every stage of your property journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div
          ref={mapRef}
          className={`overflow-hidden rounded-[32px] border border-[#D9D6CC] bg-white shadow-lg transition-all duration-700 ease-out motion-reduce:transition-none ${
            mapInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative h-[420px] w-full overflow-hidden rounded-[32px]">
            <iframe
              className="h-full w-full grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18..."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
