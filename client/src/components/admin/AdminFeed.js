import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AdminPostList from "./AdminPostList";

export default function AdminFeed() {
  const [state, setState] = useState({
    posts: [],
    users: [],
    comments: [],
  });

  useEffect(() => {
    Promise.all([axios.get("/admin/feed"), axios.get("/admin/comments")])
      .then((all) => {
        console.log(all[0])
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
      <AdminPostList posts={postsWithComments} users={state.users} />
    </div>
  );
}
