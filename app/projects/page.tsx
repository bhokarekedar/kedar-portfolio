import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { buildDefaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildDefaultMetadata({
  title: "Projects",
  description:
    "Explore Kedar Bhokare's projects and case studies across Next.js e-commerce, React analytics platforms, Django APIs, marketing workflows, and financial systems.",
  alternates: {
    canonical: "/projects",
  },
});

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsSection />
    </main>
  );
}
