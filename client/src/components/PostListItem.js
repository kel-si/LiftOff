import React from "react";

export default function PostListItem(props) {
  return (
    <div className="post--container">
      <article className="post">
        <header className="post--header">
          <h2 className="post--name">{props.name}</h2>
        </header>

        <div className="post--body">
          <p>{props.text}</p>
          <div className="img--container">
            <img src={props.image} alt="error" className="post--img"/>
          </div>
        </div>
        <footer className="post--footer">
          <small className="footer--age">{props.time}</small>
        </footer>
      </article>
    </div>
  );
}
