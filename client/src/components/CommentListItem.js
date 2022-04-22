import React from "react";

export default function CommentListItem(props) {
  console.log("list props", props);
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
          <small className="footer--age">{props.time}</small>
        </footer>
      </article>
    </div>
  );
}
