"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import teamData from "@/data/team.json";

interface TeamMember {
  name: string;
  role: string;
  tag: string;
  image: string;
  experience: string;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const tagColors: Record<string, string> = {
  Leadership: "bg-amber-50 text-amber-700 border-amber-200",
  Operations: "bg-blue-50 text-blue-700 border-blue-200",
  Sales: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Consulting: "bg-purple-50 text-purple-700 border-purple-200",
  Investment: "bg-rose-50 text-rose-700 border-rose-200",
  Marketing: "bg-cyan-50 text-cyan-700 border-cyan-200",
};

export default function OurTeam() {
  const members = (teamData || []) as TeamMember[];

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
            Meet the Team
          </span>
          <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            People who make it happen
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
            A close-knit team of real estate professionals who genuinely care
            about finding the right home for every client.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex gap-4 rounded-2xl border border-slate-100 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-[#B8860B]/30 hover:bg-white hover:shadow-md"
            >
              {/* Avatar */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="80px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="truncate text-[20px] font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[18px] font-medium text-slate-500">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500 line-clamp-2">
                    {member.bio}
                  </p>
                </div>

                {/* Footer row */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[13px] font-semibold text-slate-600">
                    {member.experience}
                  </span>

                  {member.socials && (
                    <div className="flex items-center gap-1.5">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 transition hover:text-[#B8860B]"
                        >
                          <FaLinkedinIn size={15} />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 transition hover:text-[#B8860B]"
                        >
                          <FaTwitter size={15} />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 transition hover:text-[#B8860B]"
                        >
                          <FaInstagram size={15} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
