import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import data from "../../../data/properties.json";
import type { BlogPost } from "@/types/blog";
import BlogCard from "@/app/components/BlogCard";
import {
  Calendar,
  Clock,
  Home,
  ChevronsRight,
  ArrowLeft,
  User,
} from "lucide-react";

const blogs = data.blogs as BlogPost[];

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);
  const paragraphs =
    post.content && post.content.length > 0 ? post.content : [post.excerpt];

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-stone-900">
      {/* Article hero */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <span className="inline-flex rounded-lg bg-[#B8863D] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            {post.category}
          </span>
          <h1 className="font-heading mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-white/80 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-[#f0d9a8]" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-[#f0d9a8]" />
              {post.readTime}
            </span>
            {post.author && (
              <span className="inline-flex items-center gap-1.5">
                <User size={14} className="text-[#f0d9a8]" />
                {post.author}
              </span>
            )}
          </div>

          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex flex-wrap items-center justify-center gap-1.5 text-sm text-white/70"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 transition-colors hover:text-[#B8863D]"
            >
              <Home size={14} />
              Home
            </Link>
            <ChevronsRight size={14} />
            <Link href="/blog" className="transition-colors hover:text-[#B8863D]">
              Blog
            </Link>
            <ChevronsRight size={14} />
            <span className="line-clamp-1 max-w-[180px] text-white sm:max-w-xs">
              {post.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8863D] transition hover:text-[#8C6226]"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs sm:p-8">
          <p className="text-base font-medium leading-relaxed text-stone-700">
            {post.excerpt}
          </p>
          <div className="mt-6 space-y-4 border-t border-stone-100 pt-6">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-sm leading-[1.85] text-stone-600 sm:text-[15px]"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-stone-200 py-10 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
            <h2 className="font-heading mb-6 text-xl font-bold text-stone-900 sm:text-2xl">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <BlogCard key={item.id} post={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
