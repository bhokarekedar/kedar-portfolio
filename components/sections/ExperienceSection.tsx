import { Container } from "@/components/layout/Container";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="border-b border-slate-200/80 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
            Experience
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            4+ years building React.js and full-stack products across enterprise domains.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            My work spans healthcare marketing, enterprise analytics, AI PoCs, retail workflows, financial systems, and
            independent full-stack delivery.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {experience.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="text-sm font-bold text-teal-800">
                    {item.startDate} - {item.endDate}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">{item.company}</h2>
                  <p className="mt-2 text-base font-bold text-slate-700">{item.position}</p>
                  {item.location ? <p className="mt-1 text-sm font-semibold text-slate-500">{item.location}</p> : null}
                </div>

                <div>
                  <p className="leading-8 text-slate-600">{item.summary}</p>

                  {item.projects?.length ? (
                    <div className="mt-5">
                      <h3 className="text-sm font-black uppercase text-slate-500">Relevant Work</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.projects.map((project) => (
                          <span key={project} className="rounded-md bg-slate-100 px-2.5 py-1 text-sm font-semibold text-slate-700">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {item.highlights?.length ? (
                    <ul className="mt-5 space-y-3">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="border-l-2 border-teal-600 pl-3 text-sm leading-6 text-slate-600">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.tech?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2" aria-label={`${item.company} technologies`}>
                      {item.tech.map((tech) => (
                        <span key={tech} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-sm font-semibold text-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
