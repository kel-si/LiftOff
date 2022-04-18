import React from "react";
import { Posts, Users } from "../test_data/dummyData";

export default function PostListItem(props) {
  return (
    <div>
      <article className="post">
        <header className="post--header">
          {/* <img className="post--avatar" src={post.avatar} /> */}
          <h2 className="post--name">{Users[0].name}</h2>
        </header>

        <div className="post--body">
          <p>{Posts[0].text}</p>
          <img src={Posts[0].image} />
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
