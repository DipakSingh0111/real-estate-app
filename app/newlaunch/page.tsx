"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import propertiesData from "@/lib/data";
import PageBanner from "@/app/components/ui/PageBanner";
import EmptyState from "@/app/components/ui/EmptyState";
import PageContainer from "@/app/components/ui/PageContainer";
import ProjectCard, {
  type ProjectCardData,
} from "@/app/components/ui/ProjectCard";
import {
  NewLaunchCategoryFilter,
  NewLaunchProjectStatus,
} from "@/types/property";

const normalize = (str: any): string => {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
};

function NewLaunchContent() {
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");

  const [selectedStatus, setSelectedStatus] =
    useState<NewLaunchProjectStatus>("New Launch");
  const [selectedCategory, setSelectedCategory] =
    useState<NewLaunchCategoryFilter>("All");

  useEffect(() => {
    if (!statusParam) return;
    const p = normalize(statusParam);
    if (p.includes("ready")) setSelectedStatus("Ready to Move");
    else if (p.includes("under") || p.includes("construction"))
      setSelectedStatus("Under Construction");
    else setSelectedStatus("New Launch");
  }, [statusParam]);

  const rawData: any[] = (propertiesData as any)?.launchProjects || [];

  const filteredData = rawData.filter((item) => {
    const statusMatch = (() => {
      const s = normalize(item.status);
      const t = normalize(selectedStatus);
      return s === t || s.includes(t) || t.includes(s);
    })();

    const categoryMatch =
      selectedCategory === "All" ||
      (() => {
        const c = normalize(item.category);
        const t = normalize(selectedCategory);
        return c === t || c.includes(t.replace("for", "")) || t.includes(c);
      })();

    return statusMatch && categoryMatch;
  });

  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      <PageBanner
        preTitle="Fresh Inventory"
        title="New Launch Projects"
        description="Discover newly launched and upcoming residences with transparent pricing and guided site visits."
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: selectedStatus },
        ]}
      />

      {/* Content */}
      <PageContainer className="py-8 lg:py-10">
        {/* Section Label */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-heading text-lg font-bold text-slate-900 sm:text-xl">
              {selectedStatus} Projects
            </h2>
            <span className="rounded-full bg-gradient-to-r from-amber-50 to-amber-100/80 px-3 py-1 text-xs font-bold text-amber-800 shadow-sm border border-amber-200/60 ring-1 ring-amber-400/20">
              {filteredData.length}
            </span>
          </div>
        </div>

        {/* Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(filteredData as ProjectCardData[]).map((project, idx) => (
              <ProjectCard
                key={project.slug || project.id || idx}
                project={project}
                compact
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No projects found"
            description={`No properties are available for ${selectedStatus}${
              selectedCategory !== "All" ? ` in ${selectedCategory}` : ""
            }.`}
          />
        )}
      </PageContainer>
    </main>
  );
}

export default function NewLaunchPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-slate-500">Loading...</div>
      }
    >
      <NewLaunchContent />
    </Suspense>
  );
}
