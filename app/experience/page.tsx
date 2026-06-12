import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { buildDefaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildDefaultMetadata({
  title: "Experience",
  description:
    "Review Kedar Bhokare's full-stack developer experience across Data Axle, Fractal Analytics, Finacus, and freelance React.js projects.",
  alternates: {
    canonical: "/experience",
  },
});

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceSection />
    </main>
  );
}
