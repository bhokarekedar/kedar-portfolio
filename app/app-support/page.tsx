import type { Metadata } from "next";
import { PolicyPage } from "@/components/sections/PolicyPage";
import { SITE_EMAIL, SITE_NAME } from "@/constants/site";
import { buildDefaultMetadata } from "@/lib/metadata";

const updated = "June 12, 2026";

const sections = [
  {
    title: "Supported Apps",
    body: [
      "This support page currently covers Yes or No Wheel, One Minute Meditation, and Offline Pet Health Tracker.",
      "Store links, package names, screenshots, and detailed FAQs will be added as the apps mature and listings are finalized.",
    ],
  },
  {
    title: "How To Get Help",
    body: [`For support, bug reports, privacy questions, or app feedback, email ${SITE_EMAIL}. Include the app name, device model, Android version, and a short description of the issue.`],
  },
  {
    title: "Common Support Topics",
    bullets: [
      "App installation or launch issues.",
      "Questions about ads or app monetization.",
      "Offline data behavior for Offline Pet Health Tracker.",
      "Feature requests or store listing feedback.",
      "Privacy policy, terms, and data deletion questions.",
    ],
  },
  {
    title: "Response Time",
    body: [
      `${SITE_NAME} is an independent developer. I aim to review support messages as soon as practical, but response times may vary based on workload and message complexity.`,
    ],
  },
];

export const metadata: Metadata = buildDefaultMetadata({
  title: "App Support",
  description:
    "Support page for Kedar Bhokare's Android apps, including Yes or No Wheel, One Minute Meditation, and Offline Pet Health Tracker.",
  alternates: {
    canonical: "/app-support",
  },
});

export default function AppSupportPage() {
  return (
    <main>
      <PolicyPage
        eyebrow="Support"
        title="App Support"
        description="Support information for my independent Android app experiments."
        updated={updated}
        sections={sections}
      />
    </main>
  );
}
