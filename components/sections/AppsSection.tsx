import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { apps } from "@/data/apps";

const productSignals = [
  { value: "3", label: "Android products built" },
  { value: "Offline", label: "privacy-aware app thinking" },
  { value: "Passive", label: "income-focused experiments" },
];

export function AppsSection() {
  return (
    <section className="border-b border-slate-200/80 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
              Android Apps
            </p>
            <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Small Android products built for utility, wellness, and passive income.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              These apps are separate from my formal resume experience. I built them as independent product experiments
              to learn mobile product positioning, simple user flows, and passive-income opportunities.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {productSignals.map((signal) => (
              <div key={signal.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-teal-800">{signal.value}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {apps.map((app) => (
            <article key={app.id} className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-teal-800">{app.category}</p>
                    <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">{app.name}</h2>
                  </div>
                  <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs font-bold text-white">{app.status}</span>
                </div>
                {app.tagline ? <p className="mt-4 text-base font-semibold leading-7 text-slate-700">{app.tagline}</p> : null}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="leading-8 text-slate-600">{app.description}</p>

                <div className="mt-6">
                  <h3 className="text-sm font-black uppercase text-slate-500">Product Focus</h3>
                  <ul className="mt-3 space-y-3">
                    {app.features?.map((feature) => (
                      <li key={feature} className="rounded-md bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2" aria-label={`${app.name} focus areas`}>
                  {app.tech?.map((item) => (
                    <span key={item} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>

                {app.monetization ? (
                  <p className="mt-6 rounded-lg bg-teal-50 p-4 text-sm font-bold leading-6 text-teal-900">
                    {app.monetization}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-black">More app details coming later</h2>
              <p className="mt-3 max-w-3xl leading-8 text-slate-300">
                I plan to add store links, screenshots, package names, and richer app metrics as these products mature.
                For now, this section captures the product direction without mixing it into my resume-backed experience.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-md bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition-colors hover:bg-teal-100"
            >
              Ask About Apps
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
