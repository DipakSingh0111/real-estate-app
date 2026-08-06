import data from "@/lib/data";
import type { BlogPost } from "@/types/blog";
import BlogCard from "@/app/components/ui/BlogCard";
import PageBanner from "@/app/components/ui/PageBanner";

const blogs = data.blogs as BlogPost[];

export default function BlogPage() {
  const featured = blogs.find((b) => b.featured) ?? blogs[0];
  const rest = blogs.filter((b) => b.id !== featured?.id);

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-stone-900">
      <PageBanner
        preTitle="Market Insights"
        title="Blog & Insights"
        description="Practical guides and local market notes to help you buy, rent, or invest with confidence."
        breadcrumbs={[{ label: "Blog" }]}
      />

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
