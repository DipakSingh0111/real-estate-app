"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import data from "../../data/properties.json";
import type { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";

const blogsData = data.blogs as BlogPost[];

export default function BlogInsights({
  showViewAll = true,
}: {
  showViewAll?: boolean;
}) {
  return (
    <section className="bg-[#FAF7F1] py-8 sm:py-16 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8863D]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#B8863D]">
              <TrendingUp size={14} />
              Knowledge Hub
            </div>
            <h2 className="font-heading mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
              Latest Blogs & Market Insights
            </h2>
            <p className="mt-1 max-w-xl text-xs text-stone-600 sm:text-sm">
              Stay ahead with real estate trends, expert investment advice, and
              comprehensive city guides.
            </p>
          </div>

          {showViewAll && (
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8863D] transition hover:text-[#8C6226]"
            >
              View All Articles
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogsData.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
