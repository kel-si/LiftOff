import React from "react";

export default function AdminPostListItem(props) {
  return (
    <div className="admin-post-container">
      <article className="admin-post">
        <header className="admin-post-header">
          <div className="admin-img-container">
            <img src={props.image} alt="error" className="post--img"/>
          </div>
        </header>

        <div className="admin-post-body">
          <h2 className="admin-post-name">{props.name}</h2>
          <p>{props.text}</p>
        </div>
      </article>
    </div>
  );
}
