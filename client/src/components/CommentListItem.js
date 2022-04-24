import React from "react";
import Moment from 'moment';

export default function CommentListItem(props) {

  const time = Moment(props.time).startOf('hour').fromNow();

  return (
    <div className="comment--container">
      <article className="comment">
        <header className="comment--header">
          <h6 className="comment--name">{props.name}</h6>
        </header>

        <div className="comment--body">
          <p>{props.text}</p>
        </div>
        <footer className="comment--footer">
          <small className="footer--age">{time}</small>
        </footer>
      </article>
    </div>
  );
}
