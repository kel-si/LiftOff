import React, { useState } from "react";
import axios from "axios";
import Sentiment from "sentiment";

export default function CreateComment() {
  const sentiment = new Sentiment();
  const [comment, setComment] = useState("");
  const user = localStorage.getItem("liftoffUser");
  const userData = JSON.parse(user);
  const userId = userData.user.id;

  const findSentiment = (comment) => {
    const result = sentiment.analyze(comment);
    console.log("result", result);
    console.log("result.score", result.score);
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findSentiment(comment);
    console.log("comment:", comment);
    axios
      .post("/api/comments", { text: comment, user_id: userId })
      .then((res) => {
        console.log("from server:", res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
            <button type="submit" value="Add Post" className="primary--btn">
              Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
