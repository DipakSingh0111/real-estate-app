import { redirect } from "next/navigation";
import { allUnifiedProjects } from "@/lib/getRealEstateData";

export async function generateStaticParams() {
  return allUnifiedProjects.map((project) => ({ slug: project.slug }));
}

export default async function NewLaunchDetailRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/projects/${slug}`);
}
