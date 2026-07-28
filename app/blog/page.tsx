"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, TrendingUp } from "lucide-react";
import data from "../../data/properties.json";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const blogsData = data.blogs as BlogPost[];

export default function BlogInsights() {
  return (
    <section className="bg-[#FAF7F1] py-8 sm:py-16 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8863D]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#B8863D]">
              <TrendingUp size={14} />
              Knowledge Hub
            </div>
            <h2 className="font-display mt-2 text-2xl font-bold text-stone-900 sm:text-3xl lg:text-4xl">
              Latest Blogs & Market Insights
            </h2>
            <p className="mt-1 max-w-xl text-xs sm:text-sm text-stone-600">
              Stay ahead with real estate trends, expert investment advice, and
              comprehensive city guides.
            </p>
          </div>

          <Link
            href="/blogs"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8863D] transition hover:text-[#8C6226]"
          >
            View All Articles
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B8863D]/40 hover:shadow-xl hover:shadow-stone-900/5"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-100 sm:h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 rounded-lg bg-stone-950/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                  {post.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  {/* Metadata: Date & Read Time */}
                  <div className="mb-2.5 flex items-center gap-4 text-[11px] text-stone-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} className="text-[#B8863D]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} className="text-[#B8863D]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="font-display text-base font-bold text-stone-900 line-clamp-2 group-hover:text-[#B8863D] transition-colors sm:text-lg">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 text-xs leading-relaxed text-stone-600 line-clamp-2 sm:text-sm">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-stone-800 transition group-hover:text-[#B8863D]"
                  >
                    Read Full Article
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
