import React from "react";
import CommentListItem from "./CommentListItem";

export default function CommentList(props) {
  console.log("list item props", props.comments);
  const comments = props.comments.map((comment) => {
    return (
      <div>
        <CommentListItem
          key={comment.id}
          text={comment.text}
          time={comment.created_at}
        />
      </div>
    );
  });
  return <div>{comments}</div>;
}
