import Link from "next/link";
import React from "react";

async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  return (
    <div className="p-10 grid  grid-cols-2   ">
      {posts.map((post, index) => {
        return (
          <Link href={`posts/${post.id}`} key={post.id}>
            <div className="flex bg-green-400 text-black border-2 justify-start items-center flex-col gap-10 p-10">
              <h2 className="bg-red-300 p-5 rounded-2xl">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PostPage;
