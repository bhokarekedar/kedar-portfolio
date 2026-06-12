import type { Metadata } from "next";
import { PolicyPage } from "@/components/sections/PolicyPage";
import { SITE_EMAIL } from "@/constants/site";
import { buildDefaultMetadata } from "@/lib/metadata";

const updated = "June 12, 2026";

const sections = [
  {
    title: "Request Data Deletion",
    body: [
      `To request deletion of information you sent through email, support, or app-related communication, contact ${SITE_EMAIL} with the subject "Data Deletion Request".`,
      "Include the app name, the email address you used to contact me, and a short description of the data you want deleted.",
    ],
  },
  {
    title: "Offline App Data",
    body: [
      "For apps that store information only on your device, such as Offline Pet Health Tracker, you can usually delete local data by deleting the app or clearing app storage in Android settings.",
      "If your device backup settings preserve app data, you may also need to manage or delete backups through your device or Google account settings.",
    ],
  },
  {
    title: "Advertising Data",
    body: [
      "If an app uses Google AdMob or similar advertising services, ad identifiers and ad-related data may be controlled by the advertising provider and your Android privacy settings.",
      "You can review Android advertising ID and ad privacy controls in your device settings.",
    ],
  },
  {
    title: "Processing Time",
    body: [
      "Deletion requests will be reviewed and handled as soon as practical, unless retention is required for security, legal, fraud prevention, or legitimate recordkeeping reasons.",
    ],
  },
];

export const metadata: Metadata = buildDefaultMetadata({
  title: "Data Deletion",
  description:
    "Instructions for requesting data deletion for Kedar Bhokare's Android apps and portfolio-related communication.",
  alternates: {
    canonical: "/data-deletion",
  },
});

export default function DataDeletionPage() {
  return (
    <main>
      <PolicyPage
        eyebrow="Data"
        title="Data Deletion"
        description="How to request deletion of contact/support information or remove local app data from your device."
        updated={updated}
        sections={sections}
      />
    </main>
  );
}
