import React, { useState } from "react";
import axios
 from "axios";
export default function AdminCommentListItem(props) {
  //approve -> trigger put route in the backend to update comment status to 1 - equals to approved
  const [approve, setApprove] = useState(0);

  const handleSubmit = (event) => {
    console.log("event.target.value", event.target.value);
    event.preventDefault();
  if (approve = 1) {
    axios 
      .put(`/admin/comments/${props.id}`), {status: event.target.value}
  } else if (approve = 2) {
    axios 
      .delete(`/admin/comments/${props.id}`, {status: event.target.value})
    .then((res) => {
        console.log("from server:", res.data);
      })
      .catch((err) => {
        console.log("admin errors:", err);
      });
    };

  return (
    <div className="comment--container">
      <article className="comment">
        <header className="comment--header">
          <h6 className="comment--name">{props.name}</h6>
        </header>
        <div className="comment--body">
          <p>{props.text}</p>
          <span className="footer-status">Approval Status:{props.status}</span>
          <button
            type="submit"
            className="btn-small"
            onClick={handleSubmit}
            name="approve"
            value={approve + 1}
            onChange={(event) => setApprove(event.target.value)}
          >
            Level Up
          </button>
          <button
            type="submit"
            className="btn-small"
            onClick={handleSubmit}
            name="reject"
            value={approve + 2}
            onChange={(event) => setApprove(event.target.
              value)}
          >
            Level Down
          </button>
        </div>
        <footer className="comment--footer">
          <small className="footer--age">{props.time}</small>
        </footer>
      </article>
    </div>
  );
}
