import React from "react";
import AdminCommentListItem from "./AdminCommentListItem";

export default function AdminCommentList(props) {
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
        <AdminCommentListItem
          key={comment.id}
          id={comment.id}
          text={comment.text}
          time={comment.created_at}
          status={comment.status}
          name={commentWithUsername(props.users, comment)}
        />
      </div>
    );
  });
  return (
    <div>
      <h5 className="comment--heading">Comments:</h5>
      {comments}
    </div>
  );
}
