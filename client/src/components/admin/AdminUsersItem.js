import React, {useState} from "react";
import axios from "axios";

export default function AdminUsersItem(props) {
  
  // set the state to render current level
  const [level, setLevel] = useState(props.level);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/admin/users/${props.id}`, {level: event.target.value })
      .then((res) => {
        console.log("from server: res.data.lavel", res.data);
        setLevel(res.data.level);
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
            <p>Level: {level}</p>
            <button 
              type="submit" className="btn-small" onClick={handleSubmit} value={1}>Level Up</button>
            <button type="submit" className="btn-small" onClick={handleSubmit} value={-1}>Level Down</button>
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
