import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import { useNavigate } from "react-router-dom";

export default function Feed(props) {
  const [state, setState] = useState({
    posts: [],
    users: [],
    comments: [],
  });
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("liftoffUser");
  const liftoffUser = JSON.parse(currentUser);

  useEffect(() => {
    setUser(liftoffUser.user); 
    if (!liftoffUser) {
      navigate("/");
    } else {
    Promise.all([axios.get("/api/feed"), axios.get("/api/comments")])
      .then((all) => {
        setState({
          posts: all[0].data.posts,
          users: all[0].data.users,
          comments: all[1].data.comments,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, []);

  // helper function to create a data structure of [{postId: 1, comments: []}]
  // not an ideal solution if we have a huge data set
  const postsWithComments = state.posts.map((post) => {
    return {
      ...post,
      comments: state.comments.filter((comment) => comment.post_id === post.id),
    };
  });
  return (
    <div className="Feed">
      {user.level >= 2 ? (
        <>
          <CreatePost />
          <PostList
            posts={postsWithComments}
            users={state.users}
            state={state}
            setState={setState}
          />
        </>
      ) : (
        <PostList
          posts={postsWithComments}
          users={state.users}
          state={state}
          setState={setState}
        />
      )}
    </div>
  );
}
