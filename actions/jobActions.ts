"use server";

import { db } from "@/lib/db";
import { jobsTable, NewJob } from "@/lib/schema";
import { jobFormSchema } from "@/lib/validators";
import { auth } from "@clerk/nextjs/server";
import { error } from "console";
import { and, desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { success } from "zod";

type JobFormData = Omit<NewJob, "userId" | "id" | "postedAt">;

export async function getJobs() {
  try {
    const jobs = await db
      .select()
      .from(jobsTable)
      .orderBy(desc(jobsTable.postedAt));

    return jobs;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getSingleJob(id: string) {
  try {
    const [job] = await db
      .select()
      .from(jobsTable)
      .where(eq(jobsTable.id, id))
      .limit(1);

    return job ?? null;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function createJob(jobData: JobFormData) {
  const { userId } = await auth();

  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  const validation = jobFormSchema.safeParse(jobData);

  if (!validation.success) {
    return { success: false, error: "Invalid form data provider" };
  }

  try {
    await db.insert(jobsTable).values({ ...validation.data, userId });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to create the job" };
  }
}

export async function getMyJobs() {
  const { userId } = await auth();

  if (!userId) {
    return [];
  }

  try {
    const jobs = await db
      .select()
      .from(jobsTable)
      .where(eq(jobsTable.userId, userId))
      .orderBy(desc(jobsTable.postedAt));

    return jobs;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function deleteJob(id: string) {
  const authData = await auth();
  const userId = authData.userId;

  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const result = await db
      .delete(jobsTable)
      .where(and(eq(jobsTable.id, id), eq(jobsTable.userId, userId)));

    if (result.rowCount === 0) {
      return {
        success: false,
        error: "Job not found or you lack permission  to delete it.",
      };
    }

    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to delete the job" };
  }
}
