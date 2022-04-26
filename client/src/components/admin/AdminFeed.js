import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AdminPostList from "./AdminPostList";

export default function AdminFeed(props) {
  const [state, setState] = useState({
    posts: [],
    users: [],
    comments: [],
  });

  const [user, setUser] = useState(props.user);

  const removePendingComment = (id) => {
    const updatedComments = state.comments.filter(comment => comment.id !== id)
    setState({...state, comments: updatedComments})
  }

  useEffect(() => {
    // gets user info from local storage to persist login
    const currentUser = localStorage.getItem("liftoffUser");
    const liftoffUser = JSON.parse(currentUser);
    setUser(liftoffUser);
    console.log("current user", user);
    Promise.all([axios.get("/admin/feed"), axios.get("/admin/comments")])
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
      <AdminPostList 
        handleRemovePendingComment={removePendingComment} 
        posts={postsWithComments} 
        users={state.users} 
        state={state} 
        setState={setState} />
    </div>
  );
}
