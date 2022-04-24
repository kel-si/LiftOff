import React from "react";
import Moment from 'moment';
import "../styles/Comments.scss";

export default function CommentListItem(props) {

  const time = Moment(props.time).startOf('hour').fromNow();

  return (
    <div className="comment--container">
      <article className="comment">
        <header className="comment--header">
          <img src={props.avatar} className="comment-avatar"/>
          <h6 className="comment--name">{props.name}</h6>
        </header>

        <div className="comment--body">
          <div className="comment--body-text">
            <p>{props.text}</p>
          </div>
          <footer className="comment--footer">
          <small className="footer--age">{time}</small>
        </footer>
        </div>
        
      </article>
    </div>
  );
}
