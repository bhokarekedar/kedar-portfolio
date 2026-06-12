import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SITE_EMAIL, SITE_LOCATION, SITE_PHONE } from "@/constants/site";
import { social } from "@/data/social";

const contactMethods = [
  {
    label: "Email",
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
    note: "Best for portfolio, project, and collaboration conversations.",
  },
  {
    label: "Phone",
    value: SITE_PHONE,
    href: `tel:${SITE_PHONE}`,
    note: "Available for direct conversations when a quick call makes sense.",
  },
  {
    label: "Location",
    value: SITE_LOCATION,
    href: null,
    note: "Open to remote-friendly work and Pune-based collaboration.",
  },
];

const discussionTopics = [
  "React.js and full-stack product roles",
  "Frontend-heavy enterprise applications",
  "Next.js portfolio or e-commerce projects",
  "Android app ideas and passive-income experiments",
];

export function ContactSection() {
  return (
    <section className="border-b border-slate-200/80 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="mb-4 inline-flex rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
              Contact
            </p>
            <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Let&apos;s talk about building useful software.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I am open to conversations around React.js-focused full-stack roles, product engineering, e-commerce
              builds, and thoughtful Android app ideas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`mailto:${SITE_EMAIL}`}
                className="rounded-md bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-teal-800"
              >
                Email Me
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 shadow-sm transition-colors hover:border-teal-300 hover:bg-teal-50"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-950">Contact Details</h2>
              <div className="mt-6 grid gap-4">
                {contactMethods.map((method) => (
                  <div key={method.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-bold uppercase text-slate-500">{method.label}</p>
                    {method.href ? (
                      <Link
                        href={method.href}
                        className="mt-1 inline-flex break-all text-lg font-black text-slate-950 transition-colors hover:text-teal-800"
                      >
                        {method.value}
                      </Link>
                    ) : (
                      <p className="mt-1 text-lg font-black text-slate-950">{method.value}</p>
                    )}
                    <p className="mt-2 text-sm leading-6 text-slate-600">{method.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-950">Profiles</h2>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                {social.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-md border border-slate-300 bg-white px-4 py-3 text-center text-sm font-bold text-slate-950 transition-colors hover:border-teal-300 hover:bg-teal-50"
                  >
                    {item.label || item.platform}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
              <h2 className="text-2xl font-black">Good reasons to reach out</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {discussionTopics.map((topic) => (
                  <li key={topic} className="rounded-lg bg-white/10 p-4 text-sm font-semibold leading-6 text-slate-200">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
