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
      className={`mt-3 w-full text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition 
        ${isPending && "opacity-50 cursor-not-allowed"}`}
    >
      {isPending ? "Liking..." : `👍 Like (${likes})`}
    </button>
  );
}
