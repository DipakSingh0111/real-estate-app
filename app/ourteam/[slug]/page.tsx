import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  getOtherTeamMembers,
  getTeamMemberBySlug,
  teamMembers,
} from "@/lib/team";
import PageBanner from "@/app/components/ui/PageBanner";

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};

  return {
    title: `${member.name} — ${member.role} | NestVista`,
    description: member.bio,
  };
}

export default async function TeamMemberDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const others = getOtherTeamMembers(slug, 3);
  const phoneHref = member.phone
    ? `tel:${member.phone.replace(/\s/g, "")}`
    : undefined;

  return (
    <div className=" bg-[#FAF7F2] text-slate-900">
      <PageBanner
        preTitle="Meet Our Team"
        title={member.name}
        description={`${member.role} with ${member.experience} of experience, helping clients make confident property decisions.`}
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Our Team", href: "/ourteam" },
          { label: member.name },
        ]}
      />

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-4 lg:py-3">
        <Link
          href="/ourteam"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8863D] transition hover:text-[#A37430]"
        >
          <ArrowLeft size={16} />
          Back to team
        </Link>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
          {/* Main */}
          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="grid gap-0 md:grid-cols-[280px_1fr]">
                <div className="relative min-h-[320px] bg-slate-100 md:min-h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
                    About
                  </p>
                  <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {member.about || member.bio}
                  </p>

                  {(member.email || member.phone) && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.phone && phoneHref && (
                        <a
                          href={phoneHref}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#B8863D] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#A37430]"
                        >
                          <Phone size={15} />
                          Call
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#B8863D] hover:text-[#B8863D]"
                        >
                          <Mail size={15} />
                          Email
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {member.specialties && member.specialties.length > 0 && (
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-gradient-to-r from-[#FAF7F2] to-white px-6 py-5 sm:px-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
                    Expertise
                  </p>
                  <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
                    Areas of focus
                  </h2>
                </div>
                <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
                  {member.specialties.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#FAF7F2] px-4 py-3.5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#B8863D] shadow-sm">
                        <CheckCircle2 size={16} />
                      </span>
                      <p className="text-sm font-medium text-slate-800">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 transition hover:text-[#B8863D]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-[#B8863D]">
                      <Mail size={15} />
                    </span>
                    <span className="truncate">{member.email}</span>
                  </a>
                )}
                {member.phone && phoneHref && (
                  <a
                    href={phoneHref}
                    className="flex items-center gap-3 transition hover:text-[#B8863D]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-[#B8863D]">
                      <Phone size={15} />
                    </span>
                    <span>{member.phone}</span>
                  </a>
                )}
              </div>

              {member.socials && (
                <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-[#B8863D] hover:text-[#B8863D]"
                    >
                      <FaLinkedinIn size={15} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-[#B8863D] hover:text-[#B8863D]"
                    >
                      <FaTwitter size={15} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-[#B8863D] hover:text-[#B8863D]"
                    >
                      <FaInstagram size={15} />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-[#B8863D]/20 bg-gradient-to-br from-[#322f2a] via-[#4a4338] to-[#6b5c3e] p-5 text-white shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#E6C687]">
                Need help?
              </p>
              <h3 className="font-heading mt-1 text-xl font-bold">
                Talk to {member.name.split(" ")[0]}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Get personalized guidance for buying, selling, or investing.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#B8863D] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#A37430]"
              >
                Contact NestVista
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Other members */}
        {others.length > 0 && (
          <div className="mt-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
              More from the team
            </p>
            <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
              Meet other experts
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((person) => (
                <Link
                  key={person.slug}
                  href={`/ourteam/${person.slug}`}
                  className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-[#B8863D]/30 hover:shadow-md"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="64px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-bold text-slate-900 transition group-hover:text-[#B8863D]">
                      {person.name}
                    </h3>
                    <p className="text-sm text-slate-500">{person.role}</p>
                    <p className="mt-1 text-xs font-semibold text-[#B8863D]">
                      View profile →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
