import type { Metadata } from "next";
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "../constants/site";

function metadataTitleToString(title: Metadata["title"]) {
  if (!title) return `${SITE_NAME} | Software Developer`;
  if (typeof title === "string") return `${title} | ${SITE_NAME}`;
  if ("absolute" in title && title.absolute) return title.absolute;
  if ("default" in title && title.default) return title.default;
  return `${SITE_NAME} | Software Developer`;
}

function canonicalPath(overrides?: Partial<Metadata>) {
  const canonical = overrides?.alternates?.canonical;

  if (!canonical) return "/";
  if (typeof canonical === "string") return canonical;
  if (canonical instanceof URL) return canonical.pathname;
  return "/";
}

export function buildDefaultMetadata(overrides?: Partial<Metadata>): Metadata {
  const title = metadataTitleToString(overrides?.title);
  const description = overrides?.description || SITE_DESCRIPTION;
  const canonical = canonicalPath(overrides);
  const url = `${SITE_URL}${canonical === "/" ? "" : canonical}`;

  return {
    title: {
      default: `${SITE_NAME} | Software Developer`,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
    creator: SITE_AUTHOR,
    publisher: SITE_AUTHOR,
    keywords: SITE_KEYWORDS,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    ...overrides,
  };
}
