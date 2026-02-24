// types/config.ts
export interface FaqItem {
  id: string;
  question_en: string;
  question_ar: string;
  answer_en: string;
  answer_ar: string;
}

export interface Project {
  id: string;
  title_en: string;
  title_ar: string;
  activities_en: string;
  activities_ar: string;
  href: string;
  src: string;
  className?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role_en: string;
  role_ar: string;
  avatar: string;
  rating: number;
  review_en: string;
  review_ar: string;
  category: "property" | "car";
}

export interface ReelItem {
  id: string;
  src: string;
  duration: string;
}

export interface CompanyConfig {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  socials: {
    facebook: string;
    instagram: string;
    tiktok: string;
    twitter: string;
    youtube: string;
  };
}

export interface SiteConfig {
  company: CompanyConfig;
  faqs: FaqItem[];
  projects: Project[];
  testimonials: Testimonial[];
  reels: ReelItem[];
  demo_video: DemoVideoConfig; 
}

export interface DemoVideoConfig {
  src: string;
}
