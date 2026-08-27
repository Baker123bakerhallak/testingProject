import React from "react";
import { resolve } from "styled-jsx/css";

async function PostDetailsPage(props) {
  const value = await props.params;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${value.post}`,
    {
      next: {
        revalidate: 120,
      },
    },
  );
  const post = await response.json();

  return (
    <div className="flex h-screen justify-center items-center flex-col  bg-blue-400">
      <h2>Post Details</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetailsPage;
