"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import teamData from "@/data/team.json";

const tagColors: Record<string, string> = {
  Leadership: "bg-amber-50 text-amber-700 border-amber-200",
  Operations: "bg-slate-50 text-slate-600 border-slate-200",
  Sales: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Consulting: "bg-blue-50 text-blue-700 border-blue-200",
  Investment: "bg-purple-50 text-purple-700 border-purple-200",
  Marketing: "bg-rose-50 text-rose-700 border-rose-200",
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function OurTeam() {
  return (
    <section className="bg-[#FAF7F2] py-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
            Our Team
          </span>
          <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The experts behind <br />
            every great deal.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            Our seasoned professionals bring decades of combined expertise to
            help you buy, sell, and invest with complete confidence.
          </p>
          {/* Gold divider */}
          <div className="mt-6 h-0.5 w-16 rounded-full bg-[#C89234]" />
        </motion.div>
        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100/60"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tag */}
                <span
                  className={`absolute left-3 top-3 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${tagColors[member.tag] ?? "bg-stone-50 text-stone-600 border-stone-200"}`}
                >
                  {member.tag}
                </span>
                {/* Experience badge */}
                <span className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-bold text-[#B8860B] backdrop-blur-sm">
                  {member.experience}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between px-5 pt-4 pb-5">
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-[#C89234]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-[#B8860B]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500 line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Social Footer */}
                <div className="mt-4 flex items-center gap-2 border-t border-stone-100 pt-4">
                  <a
                    href={member.socials.linkedin}
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200 text-slate-400 transition-colors hover:border-[#C89234] hover:bg-amber-50 hover:text-[#C89234]"
                  >
                    <FaLinkedinIn size={13} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    aria-label="Twitter"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200 text-slate-400 transition-colors hover:border-[#C89234] hover:bg-amber-50 hover:text-[#C89234]"
                  >
                    <FaTwitter size={13} />
                  </a>
                  <a
                    href={member.socials.instagram}
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200 text-slate-400 transition-colors hover:border-[#C89234] hover:bg-amber-50 hover:text-[#C89234]"
                  >
                    <FaInstagram size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
