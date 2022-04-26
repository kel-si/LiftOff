import React, { useState } from "react";
import axios from "axios";
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from 'react-icons/ai'

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
      <div className="admin-comment-container">
        <article className="admin-comment">
          <header className="admin-comment-header">
            <h6 className="admin-comment-name">Comment from: <span className="comment-user"> {props.name} </span></h6>
          </header>
          <div className="admin-comment-body">
            <p>"{props.text}"</p>
            <div className="approval-status">
              <span className="admin-footer-status">
                Approval Status:  
                <br /><strong>{statusHelper(props.status)}</strong>
              </span>
              <div className="approval-buttons">
              <AiOutlineCheckSquare 
                className="approval-btn"
                onClick={handleApprove}
                name="approve"
              />
              <AiOutlineCloseSquare
                className="approval-btn"
                onClick={handleReject}
                name="reject"
              />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
