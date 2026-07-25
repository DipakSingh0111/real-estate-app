import Link from "next/link";
import Image from "next/image";
import data from "../data/properties.json";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const blogs = data.blog;

export default function BlogPage() {
  const featured = blogs[0];
  const latestBlogs = blogs.slice(1);

  return (
    <main className="bg-slate-50">
      {/* Hero */}

      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
            Real Estate Insights
          </span>

          <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
            Latest Property Blogs
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Market Trends, Investment Guides & Expert Tips to help you make
            smarter real estate decisions.
          </p>
        </div>
      </section>

      {/* Featured */}

      <section className="mx-auto max-w-7xl px-6 mt-10">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid lg:grid-cols-2">
          <div className="relative h-80 lg:h-full">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-10">
            <span className="mb-4 w-fit rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
              Featured Article
            </span>

            <h2 className="text-4xl font-bold text-slate-900">
              {featured.title}
            </h2>

            <p className="mt-6 text-slate-600">{featured.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
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
              className="mt-10 flex w-fit items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
            >
              Read Article
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-slate-900">Latest Articles</h2>

          <Link
            href="#"
            className="font-semibold text-cyan-600 hover:text-cyan-700"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latestBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {blog.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 transition group-hover:text-cyan-600">
                  {blog.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-slate-600">
                  {blog.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={15} />
                    {blog.date}
                  </span>

                  <Link
                    href="#"
                    className="flex items-center gap-2 font-semibold text-cyan-600 transition group-hover:gap-3"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
