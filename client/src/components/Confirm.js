import React from "react";
import Sentiment from "sentiment";
import axios from "axios";
import FormData from "form-data";
import "../styles/ConfirmComment.scss";

export default function Confirm(props) {
  console.log("confirm props", props);

  //sentiment package: gives comments a score
  const sentiment = new Sentiment();
  const findSentiment = (comment) => {
    return sentiment.analyze(comment);
  };
  const commentScore = findSentiment(props.comment);

  //sightengine api to filter content
  const data = new FormData();
  const text = props.comment;
  const apiUser = process.env.REACT_APP_SIGHTENGINE_USER;
  const apiSecret = process.env.REACT_APP_SIGHTENGINE_SECRET;
  console.log("apiUser", apiUser);

  data.append("text", text);
  data.append("lang", "en");
  data.append("mode", "standard");
  data.append("api_user", apiUser);
  data.append("api_secret", apiSecret);

  axios
    .post("https://api.sightengine.com/1.0/text/check.json", data)
    .then(function (response) {
      // on success: handle response
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      if (error.response) console.log("sightengine:", error.response.data);
      else console.log(error.message);
    });

  //conditional rendering based on sentiment score
  return (
    <div>
      {commentScore.score > -2 ? (
        <div className="accept--comment">
          <h4 className="confirm--header">Before you comment, think...🌈</h4>
          <ul className="confirm--body">
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
          <h4 className="confirm--header">✋Check your comment again...</h4>
          <ul className="confirm--body">
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
