import React, { useState } from "react";
import axios from "axios";

export default function AdminCommentListItem(props) {
  // approve -> trigger put route in the backend to update comment status to 1 - equals to approved
  // const [approve, setApprove] = useState(0);
  // console.log(props.id);

  // const handleSubmit = (event) => {
    // event.preventDefault();
    // if (event.target.value = 1) {
      //  axios 
      // .put(`/admin/comments/${props.id}`, {status: event.target.value})
      // .then((res) => {
        // console.log("from server:", res.data);
      // })
      // .catch((err) => {
        // console.log("admin errors:", err)
      // })
    // } else if (event.target.value = 2) {
      // axios 
      // .delete(`/admin/comments/${props.id}`, {status: event.target.value})
      // .then((res) => {
        //  console.log("from server:", res.data)
      //  })
      //  .catch((err) => {
        //  console.log("admin errors:", err);
      //  });
    // }
    // };
  // const postId = props.postId;
  // console.log(postId);
  const [adminComment, setAdminComment] = useState(0);
  // console.log(props.key); //do not use
  console.log(props.id);

  const handleApprove = (event) => {
    event.preventDefault();
    axios
    .put(`/admin/comments/${props.id}`, {status: event.target.value})
  .then((res) => {
  console.log("from server:", res.data);
  console.log("res.data.comment",res.data.comment);
  // const newAdminCommentState = [...props.state.comments];
  // console.log("newAdminCommentState", newAdminCommentState);
  //  props.setState({...props.state, comments: newAdminCommentState})
  // setAdminComment("")
  alert(`you have approved ${props.name}'s comment 
successfully!`)
})
  .catch((err) => {
  console.log("admin errors:", err)
})
  window.location.reload(); 
  };

  const handleReject = (event) => {
    event.preventDefault();
    axios
    .delete(`/admin/comments/${props.id}`)
.then((res) => {
  console.log("from server:", res.data);
  console.log("res.data.comment",res.data.comment);
  // const newAdminCommentState = [...props.state.comments];
    // props.setState({...props.state, comments: 
    // newAdminCommentState})
    // setAdminComment("")
  alert(`you have deleted ${props.name}'s comment successfully!`)
})
.catch((err) => {
  console.log("admin errors:", err)
  })
  window.location.reload(); 
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
          <span className="footer-status">Approval Status:<strong>pending approval</strong></span>
          <button
            type="submit"
            className="btn-small"
            onClick={handleApprove}
            name="approve"
            value={adminComment + 1}
             onChange={(event) => setAdminComment(event.target.value)}
          >
            Approve
          </button>
          <button
            type="submit"
            className="btn-small"
            onClick={handleReject}
            name="reject"
            value={adminComment + 2}
             onChange={(event) => setAdminComment(event.target.value)}
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