import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "kankshi-jewels",
    title: "Kankshi Jewels",
    category: "Personal / Portfolio",
    period: "Jan 2025 - Mar 2025",
    role: "Full-Stack Developer",
    description:
      "A full-stack jewelry e-commerce website built with Next.js, focused on a polished shopping experience, product discovery, checkout, and secure online payments.",
    url: "https://kankshijewels.com/",
    tech: ["Next.js", "React.js", "MongoDB", "Mongoose", "Razorpay", "DigitalOcean Spaces", "Vercel"],
    highlights: [
      "Built responsive product listing, cart, and checkout flows for a real commerce storefront.",
      "Integrated Razorpay payments and image storage using DigitalOcean Spaces.",
      "Deployed on Vercel with attention to performance, scalability, and user experience.",
    ],
    result: "A live e-commerce product that demonstrates end-to-end ownership from UI to deployment.",
  },
  {
    id: "marketing-automation-healthcare",
    title: "Healthcare Marketing Automation Platform",
    category: "Enterprise / Professional",
    role: "React.js Developer",
    description:
      "A large-scale marketing automation platform for healthcare workflows, built around data-heavy screens, role-based access, approvals, and publishing processes.",
    tech: ["React.js", "TypeScript", "REST APIs", "Role-Based Access", "Dynamic Forms"],
    highlights: [
      "Created data-driven screens for plans, markets, campaigns, and multi-step workflows.",
      "Integrated frontend validation and approval flows with backend APIs.",
      "Translated complex business rules into reliable user-facing interactions.",
    ],
    result: "Improved usability for enterprise users managing regulated, workflow-heavy marketing operations.",
  },
  {
    id: "audience-a360",
    title: "Audience A360",
    category: "Enterprise / Internal Product",
    role: "Full-Stack Developer",
    description:
      "An internal data product used to combine, validate, transform, and process datasets from multiple sources for enterprise audience workflows.",
    tech: ["React.js", "Django", "REST APIs", "Cron Jobs", "Data Validation"],
    highlights: [
      "Built React interfaces for uploading, configuring, and processing large datasets.",
      "Developed and integrated Django APIs for validation and transformation flows.",
      "Implemented recurring job cycles to automate repeated processing work.",
    ],
    result: "Helped enterprise users process larger data workflows with cleaner interfaces and stronger reliability.",
  },
  {
    id: "copy-testing",
    title: "Copy Testing Analytics App",
    category: "Client Product",
    role: "Sole Frontend Developer",
    description:
      "A React-based analytics application for exploring copy-testing data through filters, tables, and visualizations.",
    tech: ["React.js", "Redux-Saga", "Ant Design", "Data Visualization", "Testing"],
    highlights: [
      "Owned frontend development with reusable components and advanced filtering workflows.",
      "Built tables, heat maps, scatter plots, and word clouds for deeper analysis.",
      "Improved stability and performance by testing and fixing issues across workflows.",
    ],
    result: "Delivered an analysis-heavy interface that made research data easier to explore and act on.",
  },
  {
    id: "concept-creation",
    title: "Concept Creation Platform",
    category: "Client Product",
    role: "Frontend Developer",
    description:
      "A marketing concept creation platform that helps users generate and organize concepts using country, category, brand, and insight filters.",
    tech: ["React.js", "Redux-Saga", "Ant Design", "Authentication", "PPT Export", "PDF Export"],
    highlights: [
      "Built CRUD workflows, image uploads, authentication, and authorization.",
      "Added export capabilities for PPT and PDF outputs.",
      "Connected concept creation flows with testing workflows for a smoother product experience.",
    ],
    result: "Supported a more connected workflow for creating, organizing, and testing marketing concepts.",
  },
  {
    id: "banking-core-system",
    title: "Core Banking System",
    category: "Financial Services",
    role: "React.js Developer",
    description:
      "A secure banking application supporting account opening, transaction processing, and customer onboarding workflows.",
    tech: ["React.js", "Secure UI", "Financial Workflows", "API Integration"],
    highlights: [
      "Contributed to frontend development for key banking operations.",
      "Worked on reliable UI flows for customer and transaction-related screens.",
      "Built with attention to secure, predictable user interactions.",
    ],
    result: "Gained hands-on experience building software for high-trust financial environments.",
  },
];
