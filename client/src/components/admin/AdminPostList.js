import React from "react";
import AdminPostListItem from "./AdminPostListItem";
import AdminCommentList from "./AdminCommentList";

// assigns username to a post
const assignUserName = function (users, post) {
  for (const user of users) {
    if (user.id === post.user_id) {
      return user.name;
    }
  }
};

export default function AdminPostList(props) {
  const users = props.users;
  const feed = props.posts.map((post) => {
    return (
      <div className="post--item" key={post.id}>
        <AdminPostListItem
          name={assignUserName(users, post)}
          text={post.text}
          image={post.image}
          time={post.created_at}
        />
        <AdminCommentList
          handleRemovePendingComment={props.handleRemovePendingComment}
          comments={post.comments}
          users={props.users}
          postId={post.id}
          state={props.state}
          setState={props.setState}
        />
      </div>
    );
  });
  return (
    <div className="container">
      <ul>{feed}</ul>
    </div>
  );
}
