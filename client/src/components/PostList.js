import React from "react";
import PostListItem from "./PostListItem";

export default function PostList(props) {
  const feed = props.posts.map((post) => {
    return (
      <PostListItem
        key={post.id}
        name={post.user_id}
        text={post.text}
        image={post.image}
      />
    );
  });
  return <ul>{feed}</ul>;
}
