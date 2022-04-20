import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";

export default function App() {
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
    <div className="App">
      <Navbar />
      <PostList posts={state.posts} users={state.users} />
    </div>
  );
}
