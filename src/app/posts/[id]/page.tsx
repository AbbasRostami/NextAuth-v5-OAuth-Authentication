import { JSX } from "react";
import { PostsType } from "../page";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string }; // تغییر نوع id از number به string
}): Promise<JSX.Element> {
  const GetDetails = async (id: number): Promise<PostsType> => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { cache: "no-store" }
    );
    return res.json();
  };

  // تبدیل id از string به number
  const post = await GetDetails(Number(params.id));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-red-600 text-center text-2xl font-bold mb-4">
        Post Details:
      </h1>
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-2">{post.body}</p>
      </div>
    </div>
  );
}