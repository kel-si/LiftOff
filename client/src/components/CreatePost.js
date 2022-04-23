import React, { useState }  from 'react';
import axios from "axios"; 
import "../styles/CreatePost.scss";

export default function CreatePost( ) {

  const [post, setPost] = useState("");
  const [image, setImage] = useState("");

  const user = localStorage.getItem
("liftoffUser");
  const userData = JSON.parse(user);
  const userId = userData.user.id;

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log("post:", post );
    axios 
    .post("/api/posts", { text: post, user_id: userId }) 
    .then((res) => { 
      console.log("from server:", res.data);
    })
    .catch((err) => {
      console.log("error", err); 
    })
   }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input className="form--input"
            type="text"
            name="post"
            placeholder="description"
            value={ post }
            onChange={(event) => setPost(event.target.value)}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            placeholder="image"
            value={ image }
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" value="Add Post" className="primary--btn">
            Post
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
}
