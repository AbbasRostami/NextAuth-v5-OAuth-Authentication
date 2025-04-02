import { Metadata } from "next";
import { JSX } from "react";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getPost(params.id);

  return {
    title: post ? `${post.title} | Blog` : "Post not found",
    description: post
      ? post.body.slice(0, 100) + "..."
      : "This post is not available.",
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> {
  const postId = Number((await params).id);
  const post = await getPost(postId.toString());

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-12 border border-gray-300 max-w-4xl w-full relative overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-105">
        <div className="absolute -top-16 -left-16 w-44 h-44 bg-blue-500 opacity-25 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 opacity-25 blur-2xl animate-pulse"></div>

        <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700 drop-shadow-lg mb-10">
          Post Details #{(await params).id}
        </h1>

        <div className="bg-gray-50 shadow-lg rounded-2xl p-10 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800 leading-tight">
            {post.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
            {post.body}
          </p>
        </div>
      </div>
    </div>
  );
}
