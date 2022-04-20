import React, { useState, useEffect }  from "react";
import axios from "axios";
import PostList from "./PostList";
import Navbar from "./Navbar";

export default function Feed(props) {
  const [state, setState] = useState({
    posts: [],
    users: [],
  });

  useEffect(() => {
    axios
      .get("/api/feed")
      .then((response) => {
        console.log("response", response);
        setState({
          posts: response.data.posts,
          users: response.data.users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="Feed">
      <PostList posts={state.posts} users={state.users} />
    </div>
    )


}