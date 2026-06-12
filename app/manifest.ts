import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} Portfolio`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#f8fafc",
    categories: ["portfolio", "productivity", "developer"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
