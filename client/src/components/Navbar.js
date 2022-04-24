import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components.scss";
import "../styles/Navbar.scss";
import { levelName, levelAvatar } from "./helpers/navHelpers";
import { useTimer } from "use-timer";

export default function Navbar(props) {
  
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(0);
  const { time, start, pause, reset, status } = useTimer({
    interval: 60000
  });

  useEffect(() => {
    start();
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
    <>
    <div>
      { time === 1 ? (<p>You've been browsing for {time} minute </p>) : ( <p>You've been browsing for {time} minutes</p> ) }
    {status === 'RUNNING'}
    </div>
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
          <li><Link to="/my-posts">My Posts</Link></li>
          <li><Link to="/guidelines">Guidelines</Link></li>

        {user.level > 2 ? (<li><Link to="/admin">Admin</Link></li>) : (<></>)}

      </ul>

      <div className="avatar-container">
        <div className="avatar-left">
        <img
          className="avatar-image"
          src={levelAvatar(user.level)}
          alt="avatar"
        />
        </div>
            <div className="avatar-right">
                <h3>{user.name}</h3>
                <p>Level: {levelName(user.level)}</p>
                <p><Link to="/" onClick={logOut}>Log Out</Link></p>
            </div>
      </div>
    </nav>
    </>
  );
}
