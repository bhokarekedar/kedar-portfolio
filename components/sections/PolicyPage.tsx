import { Container } from "@/components/layout/Container";

type PolicySection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: PolicySection[];
};

export function PolicyPage({ eyebrow, title, description, updated, sections }: PolicyPageProps) {
  return (
    <section className="border-b border-slate-200/80 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="mb-4 inline-flex rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
            <p className="mt-5 text-sm font-semibold text-slate-500">Last updated: {updated}</p>
          </div>

          <div className="space-y-5">
            {sections.map((section) => (
              <article key={section.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-8 text-slate-600">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="border-l-2 border-teal-600 pl-3 text-sm leading-6 text-slate-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
