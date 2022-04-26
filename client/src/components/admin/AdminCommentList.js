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

  const commentWithUserLevel = function(users, comment) {
    for (const user of users) {
      if (user.id === comment.user_id) {
        return user.level;
      }
    }
  };

  const comments = props.comments.map((comment) => {
    return (
        <AdminCommentListItem
          handleRemovePendingComment={props.handleRemovePendingComment}
          key={comment.id}
          id={comment.id}
          userIdForApproval={comment.user_id}
          userIdForRejection={comment.user_id}
          postId={props.postId}
          text={comment.text}
          time={comment.created_at}
          status={comment.status}
          name={commentWithUsername(props.users, comment)}
          userLevel={commentWithUserLevel(props.users, comment)}
          state={props.state}
          setState={props.setState}
        />
    );
  });
  return (
    <div>
      {comments}
    </div>
  );
}
