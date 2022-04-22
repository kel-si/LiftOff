import React, { useState } from 'react'
import axios from "axios"; 


export default function CreateComment() {

const [comment, setComment] = useState("");

const user = localStorage.getItem("liftoffUser");
const userData = JSON.parse(user);
const userId = userData.user.id;

const handleSubmit =(e) => {
  e.preventDefault();
  console.log("comment:", comment );
  axios 
  .post("/api/comments", { text: 
comment, user_id : userId }) 
  .then((res) => { 
    console.log("from server:", 
res.data);
  })
  .catch((err) => {
    console.log("error", err); 
  })
 }

 return (

    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="form--input"
              type="text"
              name="comment"
              placeholder="add new comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" value="Add Post" className="primary--btn">
              Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
