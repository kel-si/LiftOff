import React, { useState }  from 'react';
import axios from "axios"; 
import "../styles/CreatePost.scss";
import FormData from 'form-data'; 
import { TiImage } from "react-icons/ti";

export default function CreatePost(props) {

  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const apiImageKey = process.env.REACT_APP_IMG; 

  const user = localStorage.getItem("liftoffUser");
  const userData = JSON.parse(user);
  const userId = user.id;

  const handleSubmit =(e) => {
    e.preventDefault();
    const url = `https://www.filestackapi.com/api/store/S3?key=${apiImageKey}`;
    const formData = new FormData();
    formData.append('file', image);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    })
    // axios 
    // .post("/api/posts", { text: post, user_id: userId }) 
    // .then((res) => { 
    //   console.log("from server:", res.data);
    // })
    .catch((err) => {
      console.log("error", err); 
    })
   }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className="post-form-buttons">
        <div className="text-container">
          <input className="form--input"
            type="text"
            name="post"
            placeholder="Create a new post"
            value={ post }
            onChange={(event) => setPost(event.target.value)}
          />
        </div>
        <div className="file-upload-container">
        <label className="file-upload">
          <TiImage />
          <input
            type="file"
            name="image"
            placeholder="image"
            value={ image }
            onChange={(event) => setImage(event.target.value)}
            accept ="image/*"
          />
          </label>
        </div>
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
