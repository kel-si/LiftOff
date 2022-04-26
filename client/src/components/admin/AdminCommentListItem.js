import React, { useState } from "react";
import axios from "axios";

export default function AdminCommentListItem(props) {


const statusHelper = (status) =>  {
    if (status === 0) {
      return "needing review";
    } else if (status === 1) {
      return "approved atm";
    }
  }

  const handleApprove = (event) => {
    event.preventDefault();
    axios
      .put(`/admin/comments/${props.id}`, { status: 1, user_id: props.userIdForApproval})
      .then((res) => {
        props.handleRemovePendingComment(props.id);
      })
      .catch((err) => {
        console.log("admin errors:", err);
      });
  };

  const rejectionID = props.userIdForRejection;
  console.log("rejectionID", rejectionID);

  const handleReject = (event) => {
    event.preventDefault();
    axios
      .put(`/admin/comments/${props.id}`, { status: 2, user_id: rejectionID})
      .then((res) => {
        props.handleRemovePendingComment(props.id);
      })
      .catch((err) => {
        console.log("admin errors:", err);
      });
  };

  return (
    <div>
      <div className="comment--container">
        <article className="comment">
          <header className="comment--header">
            <h6 className="comment--name">{props.name}</h6>
          </header>
          <div className="comment--body">
            <p>{props.text}</p>
            <span className="footer-status">
              Approval Status:<strong>{statusHelper(props.status)}</strong>
            </span>
            <button
              className="btn-small"
              onClick={handleApprove}
              name="approve"
            >
              Approve
            </button>
            <button
              className="btn-small"
              onClick={handleReject}
              name="reject"
            >
              Reject
            </button>
          </div>
          <footer className="comment--footer">
            <small className="footer--age">{props.time}</small>
          </footer>
        </article>
      </div>
    </div>
  );
}
