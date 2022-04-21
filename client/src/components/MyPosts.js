import React from "react";
import Feed from "./Feed";
import CommentList from "./CommentList";
export default function MyPosts(props) {
  return (
    <div>
      <Feed />
      <CommentList />
    </div>
  );
}
