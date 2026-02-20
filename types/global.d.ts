interface ActionResponse<T = null> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  status?: number;
}

interface PaginatedActionResponse<T> extends ActionResponse {
  data?: {
    items: T[];
    total: number;
    isNext: boolean;
  };
}

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<undefined> & { success: false };
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;
type APIErrorResponse = NextResponse<ErrorResponse>;

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

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  href: string;
  src: string;
  title: string;
  activities: string;
}

export type TestimonialCategory = "property" | "car";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  category: TestimonialCategory;
}

export interface DemoVideoConfig {
  src: string;
}

export interface ReelItem {
  id: string;
  src: string;
  duration: string;
}

export interface SiteConfig {
  company: CompanyConfig;
  faqs: FaqItem[];
  projects: Project[];
  testimonials: Testimonial[];
  reels: ReelItem[];
  demo_video: DemoVideoConfig;
}
