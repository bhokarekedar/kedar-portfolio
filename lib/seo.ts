import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "../constants/site";

export function buildOpenGraph({ title, description, path }: { title?: string; description?: string; path?: string }) {
  const url = `${SITE_URL}${path || ""}`;
  return {
    title: title || SITE_NAME,
    description: description || SITE_DESCRIPTION,
    url,
    images: [{ url: `${SITE_URL}/og-image.png` }],
  };
}

export function canonical(path = "/") {
  return `${SITE_URL}${path}`;
}
