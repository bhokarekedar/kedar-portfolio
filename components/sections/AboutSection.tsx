import { Container } from "@/components/layout/Container";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript ES6+", "Redux", "Redux-Saga", "React Hooks"],
  },
  {
    title: "UI Systems",
    skills: ["Tailwind CSS", "Ant Design", "Material UI", "Bootstrap", "Responsive interfaces"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Django", "RESTful APIs", "MySQL", "PostgreSQL"],
  },
  {
    title: "Quality",
    skills: ["Git", "GitHub", "Cypress", "Jest", "Performance-minded delivery"],
  },
];

const principles = [
  "I like turning complex workflows into screens that feel simple, predictable, and hard to misuse.",
  "I care about the full path from data and APIs to the final UI, because product quality usually lives between those layers.",
  "I build with enough structure to scale, but avoid unnecessary abstraction when a clear component and a clean API will do.",
];

const careerNotes = [
  {
    label: "Current focus",
    value: "Full-stack development at Data Axle across enterprise marketing, analytics, AI, and Django API work.",
  },
  {
    label: "Past work",
    value: "React-heavy client platforms at Fractal Analytics, secure banking interfaces at Finacus, and freelance full-stack delivery.",
  },
  {
    label: "Personal products",
    value: "Small Android app experiments for passive income, including Yes or No Wheel, One Minute Meditation, and Offline Pet Health Tracker.",
  },
];

export function AboutSection() {
  return (
    <section className="border-b border-slate-200/80 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="mb-4 inline-flex rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
              About
            </p>
            <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              I build practical software for complex product workflows.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I am Kedar Bhokare, a React.js-focused full-stack developer from Pune with 4+ years of experience building
              scalable web applications across AI, finance, healthcare marketing, retail, and e-commerce.
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-950">How I Work</h2>
              <div className="mt-5 space-y-4">
                {principles.map((principle) => (
                  <p key={principle} className="leading-8 text-slate-600">
                    {principle}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-teal-800">4+</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">years of software development</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-teal-800">Full-stack</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">React interfaces plus backend APIs</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-teal-800">3</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">indie Android app experiments</p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-950">Experience Snapshot</h2>
              <div className="mt-6 space-y-4">
                {careerNotes.map((item) => (
                  <div key={item.label} className="rounded-lg bg-slate-50 p-4">
                    <h3 className="text-base font-bold text-slate-950">{item.label}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-950">Core Skills</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-base font-bold text-slate-950">{group.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                      {group.skills.map((skill) => (
                        <li key={skill} className="rounded-md bg-white px-2.5 py-1 text-sm font-semibold text-slate-700">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
              <h2 className="text-2xl font-black">Beyond The Code</h2>
              <p className="mt-4 leading-8 text-slate-300">
                My background started in Mechanical Engineering, which still shapes how I approach systems, constraints,
                and problem-solving. I communicate comfortably in English, Hindi, and Marathi, and I enjoy working with
                teams where product thinking and engineering discipline meet.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
