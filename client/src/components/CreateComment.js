import React, { useState } from "react";

import axios from "axios";
import Sentiment from "sentiment";
import Confirm from "./Confim";

export default function CreateComment(props) {
  const sentiment = new Sentiment();

  const [comment, setComment] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);

  const user = localStorage.getItem("liftoffUser");
  const userData = JSON.parse(user);
  const userId = userData.user.id;

  const findSentiment = (comment) => {
    const result = sentiment.analyze(comment);
    console.log("result", result);
    return result;
  };

  const postId = props.postId;

  const handleSubmit = (e) => {
    e.preventDefault();

    findSentiment(comment);

    axios
      .post("/api/comments", {
        text: comment,
        user_id: userId,
        post_id: postId,
      })
      //setComment to update state
      .then((res) => {
        const newCommentState = [...props.state.comments, res.data.comment];
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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {isConfirming ? (
            <Confirm
              onCancel={() => setIsConfirming(false)}
              onSubmit={handleSubmit}
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
  );
}
