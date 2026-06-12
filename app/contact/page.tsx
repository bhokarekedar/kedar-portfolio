import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { SITE_EMAIL, SITE_LOCATION } from "@/constants/site";
import { buildDefaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildDefaultMetadata({
  title: "Contact",
  description: `Contact Kedar Bhokare for React.js, full-stack development, Next.js projects, and Android app conversations. Based in ${SITE_LOCATION}. Email: ${SITE_EMAIL}.`,
  alternates: {
    canonical: "/contact",
  },
});

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
