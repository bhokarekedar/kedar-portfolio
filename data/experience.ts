import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    id: "data-axle",
    company: "Data Axle Pvt Ltd",
    position: "Full-Stack Developer",
    location: "Pune, Maharashtra, India",
    startDate: "Jan 2025",
    endDate: "Present",
    summary:
      "Working on enterprise marketing and analytics platforms with a focus on scalable React.js interfaces, AI-enabled workflows, and backend API integration.",
    projects: ["Healthcare marketing automation platform", "Audience A360", "Multi-MCP Server PoC", "PostHog analytics PoC"],
    highlights: [
      "Built data-driven screens with role-based access, multi-step workflows, and dynamic forms.",
      "Integrated React interfaces with Django APIs for validation, approval, publishing, and data transformation flows.",
      "Worked on AI and analytics PoCs connected to enterprise data sources and user behavior tracking.",
    ],
    tech: ["React.js", "TypeScript", "Django", "REST APIs", "Python", "PostHog"],
  },
  {
    id: "fractal-analytics",
    company: "Fractal Analytics Pvt Ltd",
    position: "Full-Stack Developer",
    location: "Pune, Maharashtra, India",
    startDate: "Jun 2022",
    endDate: "Dec 2024",
    summary:
      "Delivered React.js-heavy client applications across retail, analytics, and marketing workflows, from UI implementation through API integration and deployment support.",
    projects: ["P&G Web TV screen", "Estée Lauder API development", "CCHellenic web forms", "Copy Testing", "Concept Creation", "Concept Testing"],
    highlights: [
      "Led frontend development for copy-testing analytics with filters, tables, heat maps, scatter plots, and word clouds.",
      "Built concept creation workflows with CRUD, image uploads, authentication, authorization, and PPT/PDF exports.",
      "Delivered full-stack web form solutions using React.js and Django with access controls and row-level security.",
    ],
    tech: ["React.js", "Redux-Saga", "Ant Design", "Node.js", "Django", "MySQL"],
  },
  {
    id: "finacus",
    company: "Finacus Solutions Pvt Ltd",
    position: "Junior Software Developer",
    location: "Mumbai, Maharashtra, India",
    startDate: "Apr 2021",
    endDate: "Jun 2022",
    summary:
      "Built secure React.js interfaces for financial-sector applications used in core banking workflows.",
    projects: ["Core Banking System"],
    highlights: [
      "Contributed frontend development for account opening, transaction processing, and customer onboarding workflows.",
      "Worked with secure, predictable UI patterns suitable for high-trust banking environments.",
    ],
    tech: ["React.js", "Financial Workflows", "API Integration"],
  },
  {
    id: "freelance",
    company: "Freelancer",
    position: "Full-Stack Developer",
    location: "Satara, Maharashtra, India",
    startDate: "Oct 2019",
    endDate: "Mar 2021",
    summary:
      "Delivered independent full-stack projects from development through deployment, including a regional matrimonial platform.",
    projects: ["Regional matrimonial website"],
    highlights: [
      "Built registration, authentication, profile management, image uploads, and payment integration.",
      "Owned both frontend and backend implementation using React.js and Node.js.",
    ],
    tech: ["React.js", "Node.js", "Authentication", "Payments"],
  },
];
