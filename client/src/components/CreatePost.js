import React, { useState, useEffect }  from 'react'

export default function CreatePost( ) {

  const [post, setPost] = useState({
    description: "",
  });
  //remember to edit: add image back to post, setPost
  const [image, setImage] = useState({
    image: "",
  });
  // const handleSubmit= (e) => {
    // makeNewPost([post, image])
    // e.preventDefault();
  // }
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(e)
    console.log(post);
   }

   const handleChange = (e) => {
     setPost({value: e.target.value})
   }

   console.log(post);
  console.log(post.description);

  return (
    <div className="form-container">
      <form onSubmit={e => { handleSubmit(e)} }>
        <div>
          <input
            type="text"
            name="description"
            placeholder="description"
            value={post.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            placeholder="image"
            value={post.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" value="Add Post">Post</button>
        </div>
        <p>{post.description}</p>
      </form>

      <div>
        <p>{post.description}</p>
      </div>
    </div>
  );
}


