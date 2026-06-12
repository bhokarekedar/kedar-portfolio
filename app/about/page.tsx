import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { buildDefaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildDefaultMetadata({
  title: "About",
  description:
    "Learn about Kedar Bhokare, a React.js-focused full-stack developer with 4+ years of experience across AI, finance, healthcare marketing, retail, and e-commerce products.",
  alternates: {
    canonical: "/about",
  },
});

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
