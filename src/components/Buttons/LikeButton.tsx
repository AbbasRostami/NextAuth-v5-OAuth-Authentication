"use client";

import { useTransition, useState } from "react";
import { likePost } from "@/actions/postActions";

export default function LikeButton({
  postId,
  initialLikes,
}: {
  postId: number;
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    startTransition(async () => {
      const result = await likePost(postId);
      setLikes(result.likes);
    });
  };

  return (
    <button
      onClick={handleLike}
      disabled={isPending}
      className={`relative mt-4 w-full text-center py-3 rounded-xl font-semibold text-white transition-all duration-300 transform 
      ${
        isPending
          ? "bg-green-400 cursor-not-allowed opacity-50"
          : "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 hover:scale-105 shadow-lg hover:shadow-xl"
      }`}
    >
      {isPending ? (
        <div className="flex items-center justify-center gap-2">
          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          Liking...
        </div>
      ) : (
        <span className="flex items-center justify-center gap-2">
          👍 Like ({likes})
        </span>
      )}
    </button>
  );
}
