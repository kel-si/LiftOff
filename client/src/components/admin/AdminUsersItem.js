import React, {useState} from "react";

export default function AdminUsersItem(props) {
  
  const [level, setLevel] = useeState();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/admin/users/${props.id}`, { 
        level: level })
      .then((res) => {
        const newLevelsState = [...props.usersState, res.data.level];
        console.log()
        // props.setState({ ...props.usersState, comments: newCommentState });
        console.log("from server:", res.data);
      })
      .catch((err) => {
        console.log("admin errors:", err);
      });
    };
  
  
  return (
    <div className="page-container">
      <div className="post--container">
        <article className="post">
          <header className="post--header">
            <h2 className="post--name">{props.name}</h2>
          </header>

          <div className="post--body">
            <p>{props.email}</p>
            <p>Level: {props.level}</p>
            <button className="btn-small" onClick={}>Level Up</button>
            <button className="btn-small">Level Down</button>
            </div>
          <footer className="post--footer">
            <small className="footer--age">{props.time}</small>
            <br/>
            <button className="btn-small">Delete User</button>
          </footer>
        </article>
      </div>
      </div>
  );
}
