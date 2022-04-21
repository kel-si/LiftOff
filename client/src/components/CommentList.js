import React, { useState, useEffect } from "react";
import CommentListItem from "./CommentListItem";
import axios from "axios";

export default function CommentList(props) {
  // console.log("listitemprops", props.comments);
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
