import React, {useState} from "react";
import axios from "axios";

export default function AdminUsersItem(props) {
  
  // set the state of the update to determine level up or down
  const [update, setUpdate] = useState(0)
    // up: 0,
    // down: 0
  ;

  const handleSubmit = (event) => {
    console.log("event.target.value", event.target.value);
      // setUpdate({...update, [event.target.name]: 1 });
    event.preventDefault();
    axios
      .put(`/admin/users/${props.id}`, {level: event.target.value })
      .then((res) => {
        // const newLevelsState = [...props.usersState, res.data.level];
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
            <button 
              type="submit" className="btn-small" onClick={handleSubmit} name="up" value={1}>Level Up</button>
            <button type="submit" className="btn-small" onClick={handleSubmit} name ="down" value={-1}>Level Down</button>
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
