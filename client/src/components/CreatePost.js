import React, { useState, useEffect }  from 'react'

export default function CreatePost( ) {

  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log("post:", post, "image:", image);
   }

  return (
    <div className="form-container">
      <form onSubmit={ handleSubmit } >
        <div>
          <input
            type="text"
            name="description"
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
          <button type="submit" value="Add Post">Post</button>
        </div>
  
      </form>

      <div>

      </div>
    </div>
  );
}


