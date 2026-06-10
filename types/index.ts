export type Project = {
  id: string;
  title: string;
  description?: string;
  url?: string;
  repo?: string;
  tech?: string[];
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  startDate?: string;
  endDate?: string | null;
  summary?: string;
};

export type AppEntry = {
  id: string;
  name: string;
  packageName?: string;
  url?: string;
  storeUrl?: string;
};

export type Social = {
  id: string;
  platform: string;
  url: string;
};
