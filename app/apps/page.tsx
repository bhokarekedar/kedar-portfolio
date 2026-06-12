import type { Metadata } from "next";
import { AppsSection } from "@/components/sections/AppsSection";
import { buildDefaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildDefaultMetadata({
  title: "Android Apps",
  description:
    "Explore Kedar Bhokare's Android app experiments, including Yes or No Wheel, One Minute Meditation, and Offline Pet Health Tracker.",
  alternates: {
    canonical: "/apps",
  },
});

export default function AppsPage() {
  return (
    <main>
      <AppsSection />
    </main>
  );
}
