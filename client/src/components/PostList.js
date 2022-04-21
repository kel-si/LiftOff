import React, { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import axios from "axios";
import CommentList from "./CommentList";

const assignUserName = function (users, post) {
  for (const user of users) {
    if (user.id === post.user_id) {
      return user.name;
    }
  }
};

export default function PostList(props) {
  const [state, setState] = useState({
    comments: [],
  });
  useEffect(() => {
    axios
      .get("/api/comments")
      .then((response) => {
        console.log("response comments", response.data.comments);
        setState({
          comments: response.data.comments,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <CommentList comments={state.comments} />
      </div>
    );
  });
  return <ul className="container">{feed}</ul>;
}
