export function personSchema({ name, url, sameAs }: { name: string; url?: string; sameAs?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    sameAs,
  } as const;
}

export function websiteSchema({ name, url }: { name: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
  } as const;
}

export function softwareApplicationSchema({ name, url, description }: { name: string; url: string; description?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    url,
    description,
  } as const;
}
