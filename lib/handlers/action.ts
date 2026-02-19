"use server";

import { ZodError, ZodSchema } from "zod";
import { UnauthorizedError, ValidationError } from "../http-errors";
import { Session } from "next-auth";
import { auth } from "@/auth";
import { createServerClient } from "../supbase/server";

export interface ActionOptions<T> {
  params?: T;
  schema?: ZodSchema<T>;
  authorizationProcess?: boolean;
}

export interface ActionResult<T> {
  session: Session | null;
  params?: T;
  supabase: ReturnType<typeof createServerClient>;
}

export default async function actionHandler<T>({
  params,
  schema,
  authorizationProcess = false,
}: ActionOptions<T>): Promise<
  ActionResult<T> | ValidationError | UnauthorizedError | Error
> {
  // 1️⃣ Validate Input
  if (params && schema) {
    try {
      schema.parse(params);
    } catch (error) {
      if (error instanceof ZodError) {
        return new ValidationError(error.flatten().fieldErrors);
      }
      return new Error("Schema validation failed");
    }
  }

  // 2️⃣ Auth Check (NextAuth)
  let session: Session | null = null;

  if (authorizationProcess) {
    session = await auth();
    if (!session) return new UnauthorizedError();
  }

  // 3️⃣ Create Supabase Client (No manual connection needed)
  try {
    const supabase = createServerClient();

    return {
      session,
      params,
      supabase,
    };
  } catch (error) {
    console.error("Supabase initialization error:", error);
    return new Error("Database initialization failed.");
  }
}
