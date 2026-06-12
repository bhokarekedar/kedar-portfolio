export function personSchema({
  name,
  url,
  sameAs,
  email,
  jobTitle,
}: {
  name: string;
  url?: string;
  sameAs?: string[];
  email?: string;
  jobTitle?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    sameAs,
    email,
    jobTitle,
  } as const;
}

export function websiteSchema({ name, url, description }: { name: string; url: string; description?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    inLanguage: "en",
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
