import Link from "next/link";
import { Container } from "@/components/layout/Container";

const highlights = [
  "React.js",
  "TypeScript",
  "Redux-Saga",
  "Node.js",
  "Django",
  "REST APIs",
];

const impactStats = [
  { value: "4+", label: "years building web products" },
  { value: "AI", label: "analytics and automation PoCs" },
  { value: "3", label: "Android app experiments" },
];

const workflowItems = [
  {
    label: "Enterprise platforms",
    detail: "Healthcare, analytics, finance, and retail applications",
  },
  {
    label: "Full-stack delivery",
    detail: "React interfaces connected to Node.js and Django APIs",
  },
  {
    label: "Indie products",
    detail: "Yes or No Wheel, One Minute Meditation, Pet Health Tracker",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80">
      <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
            Full-stack developer based in Pune, India
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Kedar Bhokare builds scalable React products, backend APIs, and practical Android apps.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            React.js-focused full-stack developer with 4+ years of experience turning complex workflows into reliable,
            user-friendly applications across AI, healthcare marketing, finance, retail, and e-commerce.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-md bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-teal-800"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 shadow-sm transition-colors hover:border-teal-300 hover:bg-teal-50"
            >
              Contact Me
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
            {highlights.map((item) => (
              <li key={item} className="rounded-md border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:justify-self-end" aria-label="Portfolio focus areas">
          <div className="absolute -inset-4 rounded-[2rem] bg-teal-100/50 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
            <div className="border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
              <p className="text-sm font-bold">Product systems snapshot</p>
              <p className="mt-1 text-xs text-slate-300">React UI + APIs + analytics + apps</p>
            </div>

            <div className="space-y-4 p-5">
              {workflowItems.map((item, index) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-md bg-teal-700 text-sm font-black text-white">
                      0{index + 1}
                    </span>
                    <div>
                      <h2 className="text-base font-bold text-slate-950">{item.label}</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="grid gap-3 sm:grid-cols-3">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-teal-50 p-4">
                    <p className="text-2xl font-black text-teal-800">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
