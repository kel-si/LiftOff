import React, { useState } from "react";
import axios from "axios";
import Confirm from "./Confirm";

export default function CreateComment(props) {
  const [comment, setComment] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const user = localStorage.getItem("liftoffUser");
  const userData = JSON.parse(user);
  const userId = userData.user.id;
  console.log("userLevel", userLevel);
  const userLevel = userData.user.level;
  
  console.log("user props", props);
  const postId = props.postId;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/comments", {
        text: comment,
        user_id: userId,
        post_id: postId,
        status: 0,
        comment_approval: 0,
      })
      //setComment to update state
      .then((res) => {
        const newCommentState = [...props.state.comments, res.data.comment];
        console.log("comment", comment);
        console.log("res", res);
        props.setState({ ...props.state, comments: newCommentState });
        setIsConfirming(false);
        setComment("");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleSubmitWithApproval = (e) => {
    e.preventDefault();
    axios
      .post("/api/comments", {
        text: comment,
        user_id: userId,
        post_id: postId,
        status: 1,
        comment_approval: 1,
      })
      //setComment to update state
      .then((res) => {
        const newCommentState = [...props.state.comments, res.data.comment];
        console.log("comment", comment);
        console.log("res", res);
        props.setState({ ...props.state, comments: newCommentState });
        setIsConfirming(false);
        setComment("");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  //add id/class to buttons that contain post_id
  //have access to postId from props
  return (
    <div>
      {userLevel <= 1 ? (
        <div>
          <div className="comment-container">
            <form onSubmit={handleSubmit} autoComplete="off">
              {isConfirming ? (
                <Confirm
                  onCancel={() => setIsConfirming(false)}
                  onSubmit={handleSubmit}
                  comment={comment}
                />
              ) : (
                <div>
                  <div>
                    <input
                      className="form--input"
                      type="text"
                      name="comment"
                      placeholder="add new comment"
                      value={comment}
                      onChange={(event) => setComment(event.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      value="Add Post"
                      className="primary--btn"
                      onClick={() => setIsConfirming(true)}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="comment-container">
            <form onSubmit={handleSubmitWithApproval} autoComplete="off">
              {isConfirming ? (
                <Confirm
                  onCancel={() => setIsConfirming(false)}
                  onSubmit={handleSubmitWithApproval}
                  comment={comment}
                />
              ) : (
                <div>
                  <div>
                    <input
                      className="form--input"
                      type="text"
                      name="comment"
                      placeholder="add new comment"
                      value={comment}
                      onChange={(event) => setComment(event.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      value="Add Post"
                      className="primary--btn"
                      onClick={() => setIsConfirming(true)}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
