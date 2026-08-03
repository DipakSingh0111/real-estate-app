"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured";
}

export default function BlogCard({
  post,
  index = 0,
  variant = "default",
}: BlogCardProps) {
  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="group grid overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xs transition-all duration-300 hover:border-[#B8863D]/40 hover:shadow-xl lg:grid-cols-2"
        >
          <div className="relative h-56 overflow-hidden bg-stone-100 sm:h-64 lg:h-auto lg:min-h-[300px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <span className="absolute left-4 top-4 rounded-lg bg-[#B8863D] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              Featured
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <span className="inline-flex w-fit rounded-lg bg-[#B8863D]/10 px-2.5 py-1 text-[11px] font-semibold text-[#B8863D]">
              {post.category}
            </span>
            <h2 className="font-heading mt-3 text-xl font-bold leading-snug text-stone-900 transition-colors group-hover:text-[#B8863D] sm:text-2xl">
              {post.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-stone-500">
              <span className="inline-flex items-center gap-1">
                <Calendar size={13} className="text-[#B8863D]" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={13} className="text-[#B8863D]" />
                {post.readTime}
              </span>
            </div>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-stone-800 transition group-hover:text-[#B8863D]">
              Read Full Article
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B8863D]/40 hover:shadow-xl hover:shadow-stone-900/5"
      >
        <div className="relative h-48 w-full overflow-hidden bg-stone-100 sm:h-52">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-lg bg-stone-950/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div>
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
            <h3 className="font-body text-base font-bold text-stone-900 line-clamp-2 transition-colors group-hover:text-[#B8863D] sm:text-lg">
              {post.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-stone-600 line-clamp-2 sm:text-sm">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-4 border-t border-stone-100 pt-3">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-stone-800 transition group-hover:text-[#B8863D]">
              Read Full Article
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
