import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

const ROUTES = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/apps",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/app-support",
  "/data-deletion",
];

const routePriority: Record<string, number> = {
  "/": 1,
  "/projects": 0.9,
  "/apps": 0.9,
  "/experience": 0.8,
  "/about": 0.7,
  "/contact": 0.6,
  "/privacy-policy": 0.3,
  "/terms-and-conditions": 0.3,
  "/app-support": 0.4,
  "/data-deletion": 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "monthly" : "weekly",
    priority: routePriority[route] ?? 0.5,
  }));
}
