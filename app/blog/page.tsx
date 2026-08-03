import Link from "next/link";
import { Home, ChevronsRight, TrendingUp } from "lucide-react";
import data from "../../data/properties.json";
import type { BlogPost } from "@/types/blog";
import BlogCard from "@/app/components/BlogCard";

const blogs = data.blogs as BlogPost[];

export default function BlogPage() {
  const featured = blogs.find((b) => b.featured) ?? blogs[0];
  const rest = blogs.filter((b) => b.id !== featured?.id);

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20 lg:px-8">
          
          <h1 className="font-heading mt-4 text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            Blog & Insights
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
            Real estate trends, investment tips, and city guides from our
            expert advisors.
          </p>

          <nav
            aria-label="Breadcrumb"
            className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-sm font-medium text-white"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 transition-colors hover:text-[#B8863D]"
            >
              <Home size={15} />
              Home
            </Link>
            <ChevronsRight size={14} className="text-white/60" />
            <span className="text-[#B8863D]">Blog</span>
          </nav>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        {featured && (
          <div className="mb-10">
            <BlogCard post={featured} variant="featured" />
          </div>
        )}

        {rest.length > 0 && (
          <>
            <div className="mb-6">
              <h2 className="font-heading text-xl font-bold text-stone-900 sm:text-2xl">
                More Articles
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                Explore guides on buying, investing, and market trends.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
