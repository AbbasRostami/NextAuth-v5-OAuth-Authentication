import { GetDetails } from "@/lib/GetDetails";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  
  const post = await GetDetails(Number((await params).id));

  return {
    title: post ? `${post.title} | Blog` : "Post not found",
    description: post
      ? post.body.slice(0, 100) + "..."
      : "This post is not available.",
  };
}