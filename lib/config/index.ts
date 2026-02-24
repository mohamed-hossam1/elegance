import { createClient } from "@supabase/supabase-js";
import type { SiteConfig, CompanyConfig, FaqItem, Project, Testimonial, ReelItem, DemoVideoConfig } from "@/types/config";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ─── Core ─────────────────────────────────────────────────────────────────────

export async function readConfig(): Promise<SiteConfig> {
  const { data, error } = await supabase
    .from("site_config")
    .select("data")
    .eq("id", 1)
    .single();

  if (error) throw new Error(`Failed to read config: ${error.message}`);
  return data.data as SiteConfig;
}

export async function writeConfig(config: SiteConfig): Promise<void> {
  const { error } = await supabase
    .from("site_config")
    .update({ data: config, updated_at: new Date().toISOString() })
    .eq("id", 1);

  if (error) throw new Error(`Failed to write config: ${error.message}`);
}

// ─── Company ──────────────────────────────────────────────────────────────────

export async function updateCompany(data: Partial<CompanyConfig>): Promise<SiteConfig> {
  const config = await readConfig();
  config.company = { ...config.company, ...data };
  await writeConfig(config);
  return config;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export async function addFaq(item: Omit<FaqItem, "id">): Promise<SiteConfig> {
  const config = await readConfig();
  config.faqs.push({ id: Date.now().toString(), ...item });
  await writeConfig(config);
  return config;
}

export async function updateFaq(id: string, data: Partial<Omit<FaqItem, "id">>): Promise<SiteConfig> {
  const config = await readConfig();
  const index = config.faqs.findIndex((f) => f.id === id);
  if (index === -1) throw new Error(`FAQ item with id "${id}" not found`);
  config.faqs[index] = { ...config.faqs[index], ...data };
  await writeConfig(config);
  return config;
}

export async function deleteFaq(id: string): Promise<SiteConfig> {
  const config = await readConfig();
  config.faqs = config.faqs.filter((f) => f.id !== id);
  await writeConfig(config);
  return config;
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export async function addProject(item: Omit<Project, "id">): Promise<SiteConfig> {
  const config = await readConfig();
  config.projects.push({ id: Date.now().toString(), ...item });
  await writeConfig(config);
  return config;
}

export async function updateProject(id: string, data: Partial<Omit<Project, "id">>): Promise<SiteConfig> {
  const config = await readConfig();
  const index = config.projects.findIndex((p) => p.id === id);
  if (index === -1) throw new Error(`Project with id "${id}" not found`);
  config.projects[index] = { ...config.projects[index], ...data };
  await writeConfig(config);
  return config;
}

export async function deleteProject(id: string): Promise<SiteConfig> {
  const config = await readConfig();
  config.projects = config.projects.filter((p) => p.id !== id);
  await writeConfig(config);
  return config;
}

// ─── Reels ────────────────────────────────────────────────────────────────────

export async function addReel(item: Omit<ReelItem, "id">): Promise<SiteConfig> {
  const config = await readConfig();
  config.reels.push({ id: Date.now().toString(), ...item });
  await writeConfig(config);
  return config;
}

export async function updateReel(id: string, data: Partial<Omit<ReelItem, "id">>): Promise<SiteConfig> {
  const config = await readConfig();
  const index = config.reels.findIndex((r) => r.id === id);
  if (index === -1) throw new Error(`Reel with id "${id}" not found`);
  config.reels[index] = { ...config.reels[index], ...data };
  await writeConfig(config);
  return config;
}

export async function deleteReel(id: string): Promise<SiteConfig> {
  const config = await readConfig();
  config.reels = config.reels.filter((r) => r.id !== id);
  await writeConfig(config);
  return config;
}

// ─── Demo Video ───────────────────────────────────────────────────────────────

export async function updateDemoVideo(data: Partial<DemoVideoConfig>): Promise<SiteConfig> {
  const config = await readConfig();
  config.demo_video = { ...config.demo_video, ...data };
  await writeConfig(config);
  return config;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function addTestimonial(item: Omit<Testimonial, "id">): Promise<SiteConfig> {
  const config = await readConfig();
  config.testimonials.push({ id: Date.now().toString(), ...item });
  await writeConfig(config);
  return config;
}

export async function updateTestimonial(id: string, data: Partial<Omit<Testimonial, "id">>): Promise<SiteConfig> {
  const config = await readConfig();
  const index = config.testimonials.findIndex((t) => t.id === id);
  if (index === -1) throw new Error(`Testimonial "${id}" not found`);
  config.testimonials[index] = { ...config.testimonials[index], ...data };
  await writeConfig(config);
  return config;
}

export async function deleteTestimonial(id: string): Promise<SiteConfig> {
  const config = await readConfig();
  config.testimonials = config.testimonials.filter((t) => t.id !== id);
  await writeConfig(config);
  return config;
}