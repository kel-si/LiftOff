import React from "react";
import "../styles/Posts.scss";
import ReactTimeAgo from 'react-time-ago';

export default function PostListItem(props) {
  
  console.log("props.user: postListItem",  props.user);


  return (
    <div className="post--container">
      <article className="post">
        <header className="post--header">
          {/* <img src={props.avatar} className="post-avatar" /> */}
          <h2 className="post--name">{props.name}</h2>
        </header>

        <div className="post--body">
          <p>{props.text}</p>
          <div className="img--container">
            <img src={props.image} alt="error" className="post--img"/>
          </div>
        </div>
        <footer className="post--footer">
          <small className="footer--age">Posted: <ReactTimeAgo date={props.time} locale="en-US"/></small>
        </footer>
      </article>
    </div>
  );
}
