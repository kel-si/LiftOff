import React, { useState } from "react";
import axios from "axios";
import Sentiment from "sentiment";

export default function CreateComment(props) {
  const sentiment = new Sentiment();

  const [comment, setComment] = useState("");

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
    const answer = window.confirm(
      `✋You are about to comment "${comment}" on someone's post.

      How will it make the owner of this post feel?
      - 💛 Is it kind?
      - 🐝 Is it necessary?
      - ✅ Is it true?

      Press 'Csancel' if you have changed your mind!
      `
    );

    if (answer) {
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
          setComment("");
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      setComment("");
    }
  };

  //add id/class to buttons that contain post_id
  //have access to postId from props
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
