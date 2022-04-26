import React, { useState } from "react";
import axios from "axios";

export default function AdminCommentListItem(props) {

  // const [adminComment, setAdminComment] = useState(0);

  // console.log("props.userIdForApproval", props.userIdForApproval);

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

  // console.log("props.userIdForRejection", props.userIdForRejection);
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
              Approval Status:<strong>pending approval</strong>
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
