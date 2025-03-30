"use server";
export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  console.log("New post created:", { title, content });

  return { success: true, message: "Post has been successfully created" };
}
