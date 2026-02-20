import fs from "fs";
import path from "path";
import type {
  SiteConfig,
  CompanyConfig,
  FaqItem,
  Project,
  Testimonial,
  ReelItem,
  DemoVideoConfig,
} from "@/types/global";

const CONFIG_PATH = path.join(process.cwd(), "lib", "config.json");

// ─── Core ─────────────────────────────────────────────────────────────────────

export function readConfig(): SiteConfig {
  const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
  return JSON.parse(raw) as SiteConfig;
}

export function writeConfig(config: SiteConfig): void {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
}

// ─── Company ──────────────────────────────────────────────────────────────────

export function updateCompany(data: Partial<CompanyConfig>): SiteConfig {
  const config = readConfig();
  config.company = { ...config.company, ...data };
  writeConfig(config);
  return config;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export function addFaq(item: Omit<FaqItem, "id">): SiteConfig {
  const config = readConfig();
  config.faqs.push({ id: Date.now().toString(), ...item });
  writeConfig(config);
  return config;
}

export function updateFaq(
  id: string,
  data: Partial<Omit<FaqItem, "id">>
): SiteConfig {
  const config = readConfig();
  const index = config.faqs.findIndex((f) => f.id === id);
  if (index === -1) throw new Error(`FAQ item with id "${id}" not found`);
  config.faqs[index] = { ...config.faqs[index], ...data };
  writeConfig(config);
  return config;
}

export function deleteFaq(id: string): SiteConfig {
  const config = readConfig();
  config.faqs = config.faqs.filter((f) => f.id !== id);
  writeConfig(config);
  return config;
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export function addProject(item: Omit<Project, "id">): SiteConfig {
  const config = readConfig();
  config.projects.push({ id: Date.now().toString(), ...item });
  writeConfig(config);
  return config;
}

export function updateProject(
  id: string,
  data: Partial<Omit<Project, "id">>
): SiteConfig {
  const config = readConfig();
  const index = config.projects.findIndex((p) => p.id === id);
  if (index === -1) throw new Error(`Project with id "${id}" not found`);
  config.projects[index] = { ...config.projects[index], ...data };
  writeConfig(config);
  return config;
}

export function deleteProject(id: string): SiteConfig {
  const config = readConfig();
  config.projects = config.projects.filter((p) => p.id !== id);
  writeConfig(config);
  return config;
}

// ─── Reels ────────────────────────────────────────────────────────────────────

export function addReel(item: Omit<ReelItem, "id">): SiteConfig {
  const config = readConfig();
  config.reels.push({ id: Date.now().toString(), ...item });
  writeConfig(config);
  return config;
}

export function updateReel(
  id: string,
  data: Partial<Omit<ReelItem, "id">>
): SiteConfig {
  const config = readConfig();
  const index = config.reels.findIndex((r) => r.id === id);
  if (index === -1) throw new Error(`Reel with id "${id}" not found`);
  config.reels[index] = { ...config.reels[index], ...data };
  writeConfig(config);
  return config;
}

export function deleteReel(id: string): SiteConfig {
  const config = readConfig();
  config.reels = config.reels.filter((r) => r.id !== id);
  writeConfig(config);
  return config;
}

// ─── Demo Video ───────────────────────────────────────────────────────────────

export function updateDemoVideo(data: Partial<DemoVideoConfig>): SiteConfig {
  const config = readConfig();
  config.demo_video = { ...config.demo_video, ...data };
  writeConfig(config);
  return config;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export function addTestimonial(item: Omit<Testimonial, "id">): SiteConfig {
  const config = readConfig();
  config.testimonials.push({ id: Date.now().toString(), ...item });
  writeConfig(config);
  return config;
}

export function updateTestimonial(
  id: string,
  data: Partial<Omit<Testimonial, "id">>
): SiteConfig {
  const config = readConfig();
  const index = config.testimonials.findIndex((t) => t.id === id);
  if (index === -1) throw new Error(`Testimonial "${id}" not found`);
  config.testimonials[index] = { ...config.testimonials[index], ...data };
  writeConfig(config);
  return config;
}

export function deleteTestimonial(id: string): SiteConfig {
  const config = readConfig();
  config.testimonials = config.testimonials.filter((t) => t.id !== id);
  writeConfig(config);
  return config;
}