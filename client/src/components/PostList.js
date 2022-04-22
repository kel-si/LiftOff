import React from "react";
import PostListItem from "./PostListItem";
import CommentList from "./CommentList";

// assigns username to a post
const assignUserName = function(users, post) {
  for (const user of users) {
    if (user.id === post.user_id) {
      return user.name;
    }
  }
};

export default function PostList(props) {
  const users = props.users;
  const feed = props.posts.map((post) => {
    return (
      <div>
        <PostListItem
          key={post.id}
          name={assignUserName(users, post)}
          text={post.text}
          image={post.image}
          time={post.created_at}
        />
        <CommentList comments={post.comments} users={props.users} />
      </div>
    );
  });
  return (
    <div className="container">
      <ul>{feed}</ul>
    </div>
  );
}
