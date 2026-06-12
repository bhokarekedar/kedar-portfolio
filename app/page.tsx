import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { buildDefaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildDefaultMetadata({
  title: "React Full-Stack Developer Portfolio",
  description:
    "Explore Kedar Bhokare's portfolio: React.js, TypeScript, Node.js, Django, AI analytics platforms, e-commerce work, and Android app experiments.",
  alternates: {
    canonical: "/",
  },
});

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
