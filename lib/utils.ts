export function absoluteUrl(path = "/", base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function removeTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}
