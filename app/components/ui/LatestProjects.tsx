"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import {
  getRealEstatePageData,
  type HomePageData,
} from "@/lib/getRealEstateData";
import PageContainer from "./PageContainer";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const projects =
  getRealEstatePageData<HomePageData>("home").LatestProjects
    ?.items ?? [];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function LatestProjects() {
  return (
    <section className="bg-[#FAF7F2] py-5 lg:py-7 overflow-hidden">
      <PageContainer>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <SectionHeader
            preTitle="Latest Projects"
            title="Homes & Spaces Recently Delivered"
            description="Explore handovers, premium layouts, and world-class architecture."
            align="left"
          />
        </motion.div>

        {/* 4 Cards Static Grid */}
        <div className="w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2"
          >
            {projects.slice(0, 4).map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <ProjectCard project={project} compact />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex justify-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#B8863D] active:scale-95"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </PageContainer>
    </section>
  );
}
