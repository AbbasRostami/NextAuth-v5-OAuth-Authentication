import LikeButton from "@/components/Buttons/LikeButton";
import { Metadata } from "next";
import Link from "next/link";
export interface PostsType {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export const metadata: Metadata = {
  title: "Posts List | Blog",
  description: "Browse the latest blog posts and enjoy engaging content.",
};

export default async function Posts() {
  const GetPosts = async (): Promise<PostsType[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
    });
    const data = await res.json();
    console.log("data", data);

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return data;
  };

  const posts = await GetPosts();

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 mb-10">
          Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-3xl p-8 border border-gray-200 flex flex-col justify-between min-h-[450px] transition-all duration-500 transform hover:shadow-xl hover:scale-105 hover:border-blue-400 hover:ring-4 hover:ring-blue-200"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 hover:text-indigo-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg flex-grow">
                {post.body}
              </p>
              <Link href={`/posts/${post.id}`} className="block">
                <div
                  className="relative mt-4 w-full text-center text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 
                       bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">View Details</span>

                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 opacity-0 rounded-xl transition-opacity duration-500 hover:opacity-20"></div>
                </div>
              </Link>

              <div className="flex justify-center">
                <LikeButton postId={Number(post.id)} initialLikes={0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
