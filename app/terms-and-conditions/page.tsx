import type { Metadata } from "next";
import { PolicyPage } from "@/components/sections/PolicyPage";
import { SITE_EMAIL, SITE_NAME } from "@/constants/site";
import { buildDefaultMetadata } from "@/lib/metadata";

const updated = "June 12, 2026";

const sections = [
  {
    title: "Use Of This Website And Apps",
    body: [
      `These Terms and Conditions apply to ${SITE_NAME}'s portfolio website and independent Android app experiments, including Yes or No Wheel, One Minute Meditation, and Offline Pet Health Tracker.`,
      "By using the website or apps, you agree to use them responsibly and only for lawful purposes.",
    ],
  },
  {
    title: "No Professional Advice",
    body: [
      "Content on this website and within the apps is provided for general information and utility. It is not professional, medical, legal, financial, or veterinary advice.",
      "Offline Pet Health Tracker can help organize pet care notes, but it is not a replacement for a qualified veterinarian.",
    ],
  },
  {
    title: "App Availability And Changes",
    body: [
      "Apps and website content may change, be updated, or become unavailable at any time. Features, store listings, screenshots, app names, and monetization may evolve as products mature.",
    ],
  },
  {
    title: "Advertising And Third-Party Services",
    body: [
      "Some Android apps may include advertising or third-party SDKs such as Google AdMob. These services may show ads, measure ad performance, or help prevent abuse according to their own policies.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Website copy, design, app concepts, and project descriptions are owned by their respective owners. Client and employer project summaries are described at a high level to respect confidentiality.",
    ],
  },
  {
    title: "Limitation Of Liability",
    body: [
      "The website and apps are provided as-is. To the fullest extent permitted by law, the developer is not liable for indirect, incidental, or consequential damages arising from use of the website or apps.",
    ],
  },
  {
    title: "Contact",
    body: [`For questions about these terms, contact ${SITE_NAME} at ${SITE_EMAIL}.`],
  },
];

export const metadata: Metadata = buildDefaultMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Kedar Bhokare's portfolio website and Android apps, including app use, advertising, third-party services, and contact information.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
});

export default function TermsAndConditionsPage() {
  return (
    <main>
      <PolicyPage
        eyebrow="Terms"
        title="Terms and Conditions"
        description="Usage terms for this portfolio website and independent Android app experiments."
        updated={updated}
        sections={sections}
      />
    </main>
  );
}
