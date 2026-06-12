import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";

const featuredProject = projects[0];
const caseStudies = projects.slice(1);

export function ProjectsSection() {
  return (
    <section className="border-b border-slate-200/80 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
            Projects
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Product work across commerce, analytics, AI workflows, and financial systems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A mix of public portfolio work and professional case studies. Some enterprise projects are summarized at a
            high level to keep client and company details confidential.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-white shadow-2xl shadow-slate-200/70">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <p className="text-sm font-bold text-teal-200">{featuredProject.category}</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{featuredProject.title}</h2>
              <p className="mt-4 leading-8 text-slate-300">{featuredProject.description}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {featuredProject.url ? (
                  <Link
                    href={featuredProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition-colors hover:bg-teal-100"
                  >
                    Visit Live Site
                  </Link>
                ) : null}
                <Link
                  href="/contact"
                  className="rounded-md border border-slate-600 px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:border-teal-300 hover:bg-white/10"
                >
                  Discuss Similar Work
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase text-slate-400">Role</dt>
                  <dd className="mt-1 font-semibold">{featuredProject.role}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase text-slate-400">Timeline</dt>
                  <dd className="mt-1 font-semibold">{featuredProject.period}</dd>
                </div>
              </dl>

              <ul className="mt-6 space-y-3">
                {featuredProject.highlights?.map((highlight) => (
                  <li key={highlight} className="rounded-md bg-white/10 p-3 text-sm leading-6 text-slate-200">
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2" aria-label={`${featuredProject.title} technologies`}>
                {featuredProject.tech?.map((item) => (
                  <span key={item} className="rounded-md bg-teal-300/15 px-2.5 py-1 text-sm font-semibold text-teal-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((project) => (
            <article key={project.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-teal-800">{project.category}</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">{project.title}</h2>
                </div>
                {project.role ? (
                  <p className="rounded-md bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">{project.role}</p>
                ) : null}
              </div>

              <p className="mt-4 leading-8 text-slate-600">{project.description}</p>

              <ul className="mt-5 space-y-3">
                {project.highlights?.map((highlight) => (
                  <li key={highlight} className="border-l-2 border-teal-600 pl-3 text-sm leading-6 text-slate-600">
                    {highlight}
                  </li>
                ))}
              </ul>

              {project.result ? (
                <p className="mt-5 rounded-lg bg-teal-50 p-4 text-sm font-semibold leading-6 text-teal-900">
                  {project.result}
                </p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.tech?.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
