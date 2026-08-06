import data from "@/lib/data";
import PageBanner from "@/app/components/ui/PageBanner";
import PageContainer from "@/app/components/ui/PageContainer";
import ProjectCard, {
  type ProjectCardData,
} from "@/app/components/ui/ProjectCard";

export const metadata = {
  title: "Projects — Real Estate",
};

export default function ProjectsPage() {
  const projects = data?.projects || [];

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        preTitle="Our Portfolio"
        title="All Projects"
        description="Explore delivered and upcoming projects across Delhi NCR with clear pricing and local guidance."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <PageContainer className="py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(projects as ProjectCardData[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageContainer>
    </main>
  );
}
