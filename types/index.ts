export type Project = {
  id: string;
  title: string;
  description?: string;
  category?: string;
  period?: string;
  role?: string;
  url?: string;
  repo?: string;
  tech?: string[];
  highlights?: string[];
  result?: string;
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate?: string;
  endDate?: string | null;
  summary?: string;
  highlights?: string[];
  projects?: string[];
  tech?: string[];
};

export type AppEntry = {
  id: string;
  name: string;
  tagline?: string;
  status?: string;
  category?: string;
  description?: string;
  packageName?: string;
  url?: string;
  storeUrl?: string;
  tech?: string[];
  features?: string[];
  monetization?: string;
};

export type Social = {
  id: string;
  platform: string;
  url: string;
  label?: string;
};
