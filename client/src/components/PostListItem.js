import React from "react";

export default function PostListItem(props) {
  console.log(typeof props.image);
  return (
    <div>
      <article className="post">
        <header className="post--header">
          {/* <img className="post--avatar" src={post.avatar} /> */}
          <h2 className="post--name">{props.name}</h2>
        </header>

        <div className="post--body">
          <p>{props.text}</p>
          <img src={props.image} alt="user's post" />
        </div>

        {/* <div className="post--image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1280px-The_Earth_seen_from_Apollo_17.jpg" />
        </div> */}

        <footer className="post--footer">
          <small className="footer--age">Created at: 10:05am</small>
        </footer>
      </article>
    </div>
  );
}
