"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import data from "../../data/properties.json";
import { Calendar, ArrowRight, Clock, PenSquare } from "lucide-react";

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

const blogs = data.blog;

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

function CornerMarks({ tone = "border-[#B8874A]" }) {
  const base = `absolute h-5 w-5 ${tone} opacity-0 transition-opacity duration-500 group-hover:opacity-100`;
  return (
    <>
      <span className={`${base} left-3 top-3 border-l-2 border-t-2`} />
      <span className={`${base} right-3 top-3 border-r-2 border-t-2`} />
      <span className={`${base} bottom-3 left-3 border-b-2 border-l-2`} />
      <span className={`${base} bottom-3 right-3 border-b-2 border-r-2`} />
    </>
  );
}

function ArticleCard({ blog, index }: { blog: any; index: number }) {
  const [ref, inView] = useInView();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 90}ms` : "0ms" }}
      className={`group relative overflow-hidden rounded-2xl border border-[#14181C]/10 bg-white transition-all duration-700 ease-out motion-reduce:transition-none hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(20,24,28,0.35)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative h-64 overflow-hidden bg-[#14181C]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover opacity-90 grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-100 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14181C]/50 via-transparent to-transparent" />
        <CornerMarks />
      </div>

      <div className="p-7">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6531]">
          <span className="h-px w-4 bg-[#B8874A]" />
          {blog.category}
        </span>

        <h3
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-4 text-2xl font-medium leading-snug text-[#14181C] transition-colors group-hover:text-[#8A6531]"
        >
          {blog.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[#14181C]/60">
          {blog.description}
        </p>

        <div className="mt-7 flex items-center justify-between border-t border-[#14181C]/10 pt-5">
          <span className="flex items-center gap-1.5 text-xs text-[#14181C]/50">
            <Calendar size={14} />
            {blog.date}
          </span>

          <Link
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#14181C] transition-all group-hover:gap-2.5 group-hover:text-[#8A6531]"
          >
            Read More
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const featured = blogs[0];
  const latestBlogs = blogs.slice(1);
  const [featuredRef, featuredInView] = useInView(0.2);

  return (
    <main
      className={`${fraunces.variable} ${inter.variable} bg-[#F3F1EA]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#161F2E] py-28 text-white">
        {/* blueprint grid */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16] [animation:gridIn_1.4s_ease-out]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="42"
              height="42"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 42 0 L 0 0 0 42"
                fill="none"
                stroke="#7FA6C9"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-b from-[#161F2E]/40 via-transparent to-[#161F2E]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center [animation:fadeUp_0.9s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8874A]/40 bg-[#B8874A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D7A96A]">
            <PenSquare size={13} />
            Real Estate Insights
          </span>

          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="mx-auto mt-7 max-w-3xl text-5xl font-medium leading-[1.1] lg:text-6xl [animation:fadeUp_0.9s_ease-out_0.15s_both]"
          >
            Latest Property{" "}
            <em className="text-[#D7A96A] not-italic font-medium italic">
              Blogs
            </em>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 [animation:fadeUp_0.9s_ease-out_0.3s_both]">
            Market trends, investment guides & expert notes to help you make
            sharper real estate decisions.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 pt-14">
        <div
          ref={featuredRef}
          className={`group relative overflow-hidden rounded-3xl border border-[#14181C]/10 bg-white shadow-xl transition-all duration-700 ease-out lg:grid lg:grid-cols-2 ${
            featuredInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative h-80 overflow-hidden lg:h-full">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <CornerMarks tone="border-white" />
          </div>

          <div className="flex flex-col justify-center p-10 lg:p-14">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#B8874A]/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6531]">
              Featured Dispatch
            </span>

            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl font-medium leading-tight text-[#14181C]"
            >
              {featured.title}
            </h2>

            <p className="mt-6 leading-relaxed text-[#14181C]/60">
              {featured.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#14181C]/50">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {featured.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />5 min read
              </div>
            </div>

            <Link
              href="#"
              className="mt-10 flex w-fit items-center gap-2 rounded-xl bg-[#14181C] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:gap-3 hover:bg-[#8A6531]"
            >
              Read Article
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between border-b border-[#14181C]/10 pb-6">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl font-medium text-[#14181C]"
          >
            Latest Articles
          </h2>

          <Link
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#8A6531] transition-all hover:gap-2.5"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latestBlogs.map((blog, i) => (
            <ArticleCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
