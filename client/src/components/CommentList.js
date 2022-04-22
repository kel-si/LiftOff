import React from "react";
import CommentListItem from "./CommentListItem";

export default function CommentList(props) {
  // assigns a username to a comment
  const commentWithUsername = function(users, comment) {
    for (const user of users) {
      if (user.id === comment.user_id) {
        return user.name;
      }
    }
  };

  const comments = props.comments.map((comment) => {
    return (
      <div>
        <CommentListItem
          key={comment.id}
          text={comment.text}
          time={comment.created_at}
          name={commentWithUsername(props.users, comment)}
        />
      </div>
    );
  });
  return <div>{comments}</div>;
}
