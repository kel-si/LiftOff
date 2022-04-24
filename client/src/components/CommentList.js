import React from "react";
import CommentListItem from "./CommentListItem";
import CreateComment from "./CreateComment";

export default function CommentList(props) {
  // assigns a username to a comment
  const commentWithUsername = function (users, comment) {
    for (const user of users) {
      if (user.id === comment.user_id) {
        return user.name;
      }
    }
  };

  const assignAvatar = function (users, comment) {
    for (const user of users) {
      if (user.id === comment.user_id) {
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

  const comments = props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <CommentListItem
          text={comment.text}
          time={comment.created_at}
          name={commentWithUsername(props.users, comment)}
          avatar={assignAvatar(props.users, comment)}
        />
      </div>
    );
  });
  return (
    <div>
      {/* <h5 className="comment--heading"></h5> */}
      <CreateComment
        postId={props.postId}
        state={props.state}
        setState={props.setState}
      />
      {comments}
    </div>
  );
}
