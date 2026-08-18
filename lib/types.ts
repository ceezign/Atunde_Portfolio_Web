export interface SkillItem {
  name: string;
  pct: number;
}

export interface SkillCategory {
  icon: string;
  title: string;
  items: SkillItem[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  points: string[];
  stack: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  duration: string;
  points: string[];
}

export interface Project {
  category: string;
  title: string;
  description: string;
  stack: string[];
  features: string[];
  challenge: string;
  lesson: string;
  github: string;
  demo: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Certification {
  icon: string;
  name: string;
  issuer: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
