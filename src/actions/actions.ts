"use server";
import prisma from "@/lib/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "../../node_modules/next/cache";
import { redirect } from "../../node_modules/next/navigation";

export async function createPost(formData: FormData) {
  const {isAuthenticated} = getKindeServerSession();
  if(!(await isAuthenticated())){
    redirect('/api/auth/login');
  }
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  revalidatePath("/posts");
}
