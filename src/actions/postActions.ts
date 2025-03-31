"use server";

import { revalidatePath } from "next/cache";

const likes: Record<number, number> = {
  1: 5,
  2: 3,
  3: 8,
};

export async function likePost(postId: number) {
  if (!likes[postId]) likes[postId] = 0;

  likes[postId]++;

  revalidatePath("/");

  return { postId, likes: likes[postId] };
}
