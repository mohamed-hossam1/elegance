"use server";

import {
  addFaq,
  updateFaq,
  deleteFaq,
  addProject,
  updateProject,
  deleteProject,
  addReel,
  updateReel,
  deleteReel,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
  updateCompany,
  updateDemoVideo,
  readConfig,
} from "@/lib/config";
import type {
  FaqItem,
  Project,
  ReelItem,
  Testimonial,
  CompanyConfig,
  DemoVideoConfig,
  SiteConfig,
} from "@/types/config";
import { revalidatePath } from "next/cache";

type ActionResult =
  | { success: true; data: SiteConfig }
  | { success: false; error: string };

const revalidate = () => {
  revalidatePath("/");
  revalidatePath("/ar");
  revalidatePath("/en");
};

async function wrap(fn: () => Promise<SiteConfig>): Promise<ActionResult> {
  try {
    const data = await fn();
    revalidate();
    return { success: true, data };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : "Unknown error",
    };
  }
}

// ─── Read ─────────────────────────────────────────────────────────────────────

export async function actionReadConfig(): Promise<ActionResult> {
  return wrap(() => readConfig());
}

// ─── Company ──────────────────────────────────────────────────────────────────

export async function actionUpdateCompany(
  data: Partial<CompanyConfig>
): Promise<ActionResult> {
  return wrap(() => updateCompany(data));
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export async function actionAddFaq(
  item: Omit<FaqItem, "id">
): Promise<ActionResult> {
  return wrap(() => addFaq(item));
}

export async function actionUpdateFaq(
  id: string,
  data: Partial<Omit<FaqItem, "id">>
): Promise<ActionResult> {
  return wrap(() => updateFaq(id, data));
}

export async function actionDeleteFaq(id: string): Promise<ActionResult> {
  return wrap(() => deleteFaq(id));
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export async function actionAddProject(
  item: Omit<Project, "id">
): Promise<ActionResult> {
  return wrap(() => addProject(item));
}

export async function actionUpdateProject(
  id: string,
  data: Partial<Omit<Project, "id">>
): Promise<ActionResult> {
  return wrap(() => updateProject(id, data));
}

export async function actionDeleteProject(id: string): Promise<ActionResult> {
  return wrap(() => deleteProject(id));
}

// ─── Reels ────────────────────────────────────────────────────────────────────

export async function actionAddReel(
  item: Omit<ReelItem, "id">
): Promise<ActionResult> {
  return wrap(() => addReel(item));
}

export async function actionUpdateReel(
  id: string,
  data: Partial<Omit<ReelItem, "id">>
): Promise<ActionResult> {
  return wrap(() => updateReel(id, data));
}

export async function actionDeleteReel(id: string): Promise<ActionResult> {
  return wrap(() => deleteReel(id));
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function actionAddTestimonial(
  item: Omit<Testimonial, "id">
): Promise<ActionResult> {
  return wrap(() => addTestimonial(item));
}

export async function actionUpdateTestimonial(
  id: string,
  data: Partial<Omit<Testimonial, "id">>
): Promise<ActionResult> {
  return wrap(() => updateTestimonial(id, data));
}

export async function actionDeleteTestimonial(
  id: string
): Promise<ActionResult> {
  return wrap(() => deleteTestimonial(id));
}

// ─── Demo Video ───────────────────────────────────────────────────────────────

export async function actionUpdateDemoVideo(
  data: Partial<DemoVideoConfig>
): Promise<ActionResult> {
  return wrap(() => updateDemoVideo(data));
}
