import React from "react";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <div>
      <h1>INDEX PAGE</h1>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <h1>Posts Link</h1>
      {posts.map((post) => (
        <div>
          <Link href="/posts/[id]" as={`posts/${post.id}`}>
            <a>{post.id}</a>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const data = await import("../posts.json");

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default Index;
