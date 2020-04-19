import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h1>Page {post.id}</h1>
          <p>Content: {post.content}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const data = await import("../../posts.json");
  const post = data.posts.filter((post) => post.id === id);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const data = await import("../../posts.json");
  const id = data.posts.map((el) => el.id);

  const paths = id.map((el) => {
    return {
      params: {
        id: `${el}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export default Post;
