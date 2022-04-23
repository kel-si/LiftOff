import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components.scss";
import "../styles/Navbar.scss";
import { levelName, levelAvatar } from "./helpers/navHelpers";

export default function Navbar(props) {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(0);

  useEffect(() => {
    const currentUser = localStorage.getItem("liftoffUser");
    if (!currentUser) {
      // no user
    } else {
      const liftoffUser = JSON.parse(currentUser);
      setUser(liftoffUser.user);
      setLogin(1);
    }
  }, []);

  const logOut = () => {
  axios
    .post("/api/logout", { withCredentials: true }) // sends credentials to server
      .then((response) => {
        console.log("response:", response.data);
        localStorage.clear();
        console.log("props.login", props.login);
        setLogin(0);
        props.setLogin({...props.login, status: response.logged_in});
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <nav>
      <h1 className="logo">
        <Link to="/">
          LiftOff
          <span role="img" aria-label="rocket ship emoji">
            🚀
          </span>
        </Link>
      </h1>
      <ul>
        <button>
          <li>
            <Link to="/my-posts">My Posts Button</Link>
          </li>
        </button>
        <button>
          <li>
            <Link to="/guidelines">Guidelines</Link>
          </li>
        </button>
        <button>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </button>
        {!login ? (
          <button onClick={logOut}>
            <li>
              <Link to="/">Log In Button</Link>
            </li>
          </button>
        ) : (
          <button onClick={logOut}>
            <li>
              <Link to="/">Log Out Button</Link>
            </li>
          </button>
        )}
      </ul>

      <div className="avatar-container">
        <img
          className="avatar-image"
          src={levelAvatar(user.level)}
          alt="avatar"
        />
        <div>
          <h3>{user.name}</h3>
        </div>
        <div> Level: {levelName(user.level)}</div>
      </div>
    </nav>
  );
}
