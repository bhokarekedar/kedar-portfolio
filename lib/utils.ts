import { SITE_URL } from "@/constants/site";

export function absoluteUrl(path = "/", base = SITE_URL) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function removeTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
