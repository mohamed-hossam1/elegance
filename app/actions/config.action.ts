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
} from "@/lib/config";
import type {
  FaqItem,
  Project,
  ReelItem,
  Testimonial,
  CompanyConfig,
  DemoVideoConfig,
} from "@/types/config";
import { revalidatePath } from "next/cache";

const revalidate = () => {
  revalidatePath("/");
  revalidatePath("/ar");
  revalidatePath("/en");
};

// ─── Company ──────────────────────────────────────────────────────────────────

export async function updateCompanyAction(data: Partial<CompanyConfig>) {
  await updateCompany(data);
  revalidate();
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export async function addFaqAction(item: Omit<FaqItem, "id">) {
  await addFaq(item);
  revalidate();
}

export async function updateFaqAction(
  id: string,
  data: Partial<Omit<FaqItem, "id">>
) {
  await updateFaq(id, data);
  revalidate();
}

export async function deleteFaqAction(id: string) {
  await deleteFaq(id);
  revalidate();
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export async function addProjectAction(item: Omit<Project, "id">) {
  await addProject(item);
  revalidate();
}

export async function updateProjectAction(
  id: string,
  data: Partial<Omit<Project, "id">>
) {
  await updateProject(id, data);
  revalidate();
}

export async function deleteProjectAction(id: string) {
  await deleteProject(id);
  revalidate();
}

// ─── Reels ────────────────────────────────────────────────────────────────────

export async function addReelAction(item: Omit<ReelItem, "id">) {
  await addReel(item);
  revalidate();
}

export async function updateReelAction(
  id: string,
  data: Partial<Omit<ReelItem, "id">>
) {
  await updateReel(id, data);
  revalidate();
}

export async function deleteReelAction(id: string) {
  await deleteReel(id);
  revalidate();
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function addTestimonialAction(item: Omit<Testimonial, "id">) {
  await addTestimonial(item);
  revalidate();
}

export async function updateTestimonialAction(
  id: string,
  data: Partial<Omit<Testimonial, "id">>
) {
  await updateTestimonial(id, data);
  revalidate();
}

export async function deleteTestimonialAction(id: string) {
  await deleteTestimonial(id);
  revalidate();
}

// ─── Demo Video ───────────────────────────────────────────────────────────────

export async function updateDemoVideoAction(data: Partial<DemoVideoConfig>) {
  await updateDemoVideo(data);
  revalidate();
}