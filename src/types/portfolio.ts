export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  url: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  themeColor: {
    accent: string;
    border: string;
    glow: string;
    badgeBg: string;
  };
  mockupDetails: {
    browserUrl: string;
    headline: string;
    subheadline: string;
    mockupType: 'school' | 'gym' | 'beauty';
  };
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Front-End' | 'Programming' | 'Design' | 'Modern AI';
  status: 'Learning & Practicing' | 'Core Competency' | 'Active Exploration';
  description: string;
  focusAreas: string[];
  codeSample: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface FocusPillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  topics: string[];
}
