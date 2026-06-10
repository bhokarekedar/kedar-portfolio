import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "../constants/site";

export function buildDefaultMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
    },
    ...overrides,
  } as Metadata;
}
