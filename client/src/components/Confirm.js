import React from "react";
import Sentiment from "sentiment";

export default function Confirm(props) {
  const sentiment = new Sentiment();

  const findSentiment = (comment) => {
    return sentiment.analyze(comment);
  };

  const commentScore = findSentiment(props.comment);

  return (
    <div>
      {commentScore.score > -2 ? (
        <div className="accept--comment">
          <h4>Before you comment, think...🌈</h4>
          <ul>
            How will your comment make the owner of this post feel?
            <li>💛 Is it kind?</li>
            <li>✅ Is it true?</li>
            <li>🐝 Is it necessary?</li>
          </ul>
          <section>
            <button className="confirm--back" onClick={props.onCancel}>
              I want to go back
            </button>
            <button className="confirm--post" onClick={props.onSubmit}>
              Post my comment
            </button>
          </section>
        </div>
      ) : (
        <div className="reject--comment">
          <h4>✋Check your comment again...</h4>
          <ul>
            How will it make the owner of this post feel?
            <li>💛 Is it kind?</li>
            <li>✅ Is it true?</li>
            <li>🐝 Is it necessary?</li>
          </ul>
          <section>
            <button className="confirm--back" onClick={props.onCancel}>
              Edit my comment
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
