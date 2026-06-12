import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_DESCRIPTION, SITE_EMAIL, SITE_LINKEDIN, SITE_NAME, SITE_URL } from "@/constants/site";
import { buildDefaultMetadata } from "@/lib/metadata";
import { personSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = buildDefaultMetadata();

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8fafc",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [
    personSchema({
      name: SITE_NAME,
      url: SITE_URL,
      email: SITE_EMAIL,
      jobTitle: "React.js-focused Full-Stack Developer",
      sameAs: [SITE_LINKEDIN],
    }),
    websiteSchema({ name: SITE_NAME, url: SITE_URL, description: SITE_DESCRIPTION }),
  ];

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="site-shell">
          <Navbar />
          <div id="content" className="site-content">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
