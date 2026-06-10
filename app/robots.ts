export async function GET() {
  const body = `User-agent: *\nDisallow: /api/\nSitemap: /sitemap.xml\n`;
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
