import type { Metadata } from "next";
import { PolicyPage } from "@/components/sections/PolicyPage";
import { SITE_EMAIL, SITE_NAME } from "@/constants/site";
import { buildDefaultMetadata } from "@/lib/metadata";

const updated = "June 12, 2026";

const sections = [
  {
    title: "Who This Policy Covers",
    body: [
      `${SITE_NAME} publishes this portfolio website and independent Android app experiments, including Yes or No Wheel, One Minute Meditation, and Offline Pet Health Tracker.`,
      "This policy explains what information may be handled by the website and apps, how it may be used, and how to contact the developer with privacy questions.",
    ],
  },
  {
    title: "Information Collected",
    body: [
      "This portfolio website does not require an account and does not intentionally collect personal information through forms.",
      "If you contact me by email, phone, or LinkedIn, the information you provide is used only to respond to your message.",
    ],
    bullets: [
      "Offline Pet Health Tracker is intended to store pet care information locally on the user's device.",
      "Yes or No Wheel and One Minute Meditation are designed as lightweight utility/wellness apps.",
      "Future versions may use advertising SDKs such as Google AdMob. Advertising SDKs may process device identifiers, ad interaction data, diagnostics, and approximate usage data according to their own policies and user consent settings.",
    ],
  },
  {
    title: "How Information Is Used",
    bullets: [
      "To respond to direct inquiries sent by email, phone, or LinkedIn.",
      "To operate, maintain, and improve the website and Android apps.",
      "To support advertising, app monetization, fraud prevention, diagnostics, and app performance where advertising SDKs are integrated.",
      "To comply with applicable legal, platform, and app store requirements.",
    ],
  },
  {
    title: "Sharing With Third Parties",
    body: [
      "Personal information from direct inquiries is not sold. If advertising, analytics, hosting, or app store services are used, those providers may process limited information needed to provide their services.",
    ],
    bullets: [
      "Google AdMob may be used for advertising in Android apps.",
      "Google Play may process app listing, install, crash, and user safety information.",
      "Vercel or similar hosting providers may process server logs required to serve this website.",
    ],
  },
  {
    title: "Data Security, Retention, And Deletion",
    body: [
      "Reasonable steps are taken to keep information secure. Contact messages are retained only as long as needed for communication, recordkeeping, or legitimate business purposes.",
      "For apps that store information locally on your device, deleting the app or clearing app data should remove locally stored data unless your device backup settings keep a copy.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "The apps and website are not intentionally directed to children under 13. If you believe a child provided personal information, contact me so I can review and delete it where applicable.",
    ],
  },
  {
    title: "Contact",
    body: [`For privacy questions, contact ${SITE_NAME} at ${SITE_EMAIL}.`],
  },
];

export const metadata: Metadata = buildDefaultMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Kedar Bhokare's portfolio website and Android apps, including data use, advertising, retention, deletion, and contact information.",
  alternates: {
    canonical: "/privacy-policy",
  },
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PolicyPage
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How this portfolio website and my Android app experiments handle user data, advertising, and privacy requests."
        updated={updated}
        sections={sections}
      />
    </main>
  );
}
