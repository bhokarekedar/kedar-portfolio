import { SITE_URL } from "../constants/site";

const ROUTES = ["/", "/about", "/experience", "/projects", "/apps", "/contact", "/privacy-policy"];

function buildSitemap(url: string) {
  const urls = ROUTES.map((route) => `  <url>\n    <loc>${url}${route}</loc>\n  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export async function GET() {
  const url = SITE_URL || "https://example.com";
  const xml = buildSitemap(url);
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
