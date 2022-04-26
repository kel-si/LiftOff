import React from "react";
import PostListItem from "./PostListItem";
import CommentList from "./CommentList";

// assigns username to a post
const assignUserName = function (users, post) {
  for (const user of users) {
    if (user.id === post.user_id) {
      return user.name;
    }
  }
};

// assigns avatar to a post
const assignAvatar = function (users, post) {
  for (const user of users) {
    if (user.id === post.user_id) {
      if (user.level === 0) {
        return "https://i.ibb.co/D5yHV1t/lvl-1.jpg";
      } else if (user.level === 1) {
        return "https://i.ibb.co/MC7dYWy/lvl-2.jpg";
      } else if (user.level === 2) {
        return "https://i.ibb.co/zGHmsk0/lvl-3.jpg";
      } else if (user.level > 2) {
        return "https://i.ibb.co/BPrr6fn/lvl-admin.jpg";
      } else {
        return "https://i.ibb.co/BPrr6fn/lvl-admin.jpg";
      }
    }
  }
};


export default function PostList(props) {
  const users = props.users;
  const feed = props.posts.map((post) => {
    return (
      <div className="post--item" key={post.id}>
        <PostListItem
          id={post.id}
          avatar={assignAvatar(users, post)}
          name={assignUserName(users, post)}
          text={post.text}
          image={post.image}
          time={post.created_at}
        />
        <CommentList
          comments={post.comments}
          users={props.users}
          postId={post.id}
          state={props.state}
          setState={props.setState}
          user={props.user}
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
