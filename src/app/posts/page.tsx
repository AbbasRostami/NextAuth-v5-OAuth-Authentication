import LikeButton from "@/components/Buttons/LikeButton";
import Link from "next/link";

export interface PostsType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function Posts() {
  const GetPosts = async (): Promise<PostsType[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  };

  const posts = await GetPosts();

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-red-600 text-center text-2xl font-bold mb-4">
          Posts Value:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200"
            >
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-2">{post.body}</p>

              <Link href={`/posts/${post.id}`}>
                <div className="mt-3 w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  View Details
                </div>
              </Link>

              <LikeButton postId={post.id} initialLikes={0} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
