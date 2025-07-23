import React from "react";
import { usePosts } from "./query";
import { PostsContainer } from "@/components/containers/posts";

const PostsPage = () => {
  const posts = usePosts();
  return (
    <div>
      <h1>Posts</h1>
      <PostsContainer posts={posts} />
    </div>
  );
};

export default PostsPage;
