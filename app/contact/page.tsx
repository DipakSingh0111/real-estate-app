import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Home,
  ChevronsRight,
  MessageSquare,
  Headphones,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Tower B, Sector 62", "Noida, Uttar Pradesh 201309"],
    color: "bg-amber-50 text-[#C89234]",
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+91 87366 74937", "Mon–Sat, 9 AM – 7 PM"],
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["support@eliteestates.com", "sales@eliteestates.com"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday – Saturday: 9 AM – 7 PM", "Sunday: Closed"],
    color: "bg-purple-50 text-purple-600",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20 lg:px-8">
          <h1 className="font-heading mt-4 text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-sm font-medium text-white"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 transition-colors hover:text-[#f0d9a8]"
            >
              <Home size={15} />
              Home
            </Link>
            <ChevronsRight size={14} className="text-white/50" />
            <span className="text-[#C89234]">Contact</span>
          </nav>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="relative z-10 -mt-8 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm transition hover:border-[#C89234]/30 hover:shadow-md"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-stone-900">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p
                    key={line}
                    className="mt-0.5 text-xs leading-relaxed text-stone-500"
                  >
                    {line}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + info */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left — info panel */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89234]">
              Reach Out
            </span>
            <h2 className="font-heading mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
              Let&apos;s find your perfect property
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Whether you&apos;re buying, selling, or investing — our advisors
              provide personalized guidance at every step. Fill out the form and
              we&apos;ll get back to you shortly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-stone-100 bg-white p-4">
                <MessageSquare
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C89234]"
                />
                <div>
                  <p className="text-sm font-semibold text-stone-900">
                    Free Consultation
                  </p>
                  <p className="mt-0.5 text-xs text-stone-500">
                    No obligation property advice from certified consultants.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-stone-100 bg-white p-4">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#C89234]" />
                <div>
                  <p className="text-sm font-semibold text-stone-900">
                    Instant Callback
                  </p>
                  <p className="mt-0.5 text-xs text-stone-500">
                    Request a call and hear back within 2 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
              <div
                className="relative h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')",
                }}
              >
                <div className="absolute inset-0 bg-stone-900/30" />
                <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-stone-800 backdrop-blur-sm">
                  Noida Sector 62
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
              <div className="border-b border-stone-100 bg-gradient-to-r from-[#322f2a] to-[#6b5c3e] px-6 py-5 sm:px-8">
                <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
                  Send Us a Message
                </h2>
                <p className="mt-1 text-xs text-white/70">
                  All fields marked with * are required
                </p>
              </div>

              <form className="space-y-5 p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-[#C89234] focus:bg-white focus:ring-2 focus:ring-[#C89234]/15"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-[#C89234] focus:bg-white focus:ring-2 focus:ring-[#C89234]/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-[#C89234] focus:bg-white focus:ring-2 focus:ring-[#C89234]/15"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Subject
                  </label>
                  <select className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-[#C89234] focus:bg-white focus:ring-2 focus:ring-[#C89234]/15">
                    <option>Property Inquiry</option>
                    <option>Schedule Site Visit</option>
                    <option>Investment Advisory</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about the property you're looking for..."
                    required
                    className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-[#C89234] focus:bg-white focus:ring-2 focus:ring-[#C89234]/15"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#C89234] py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#b07e28] active:scale-[0.99]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
