import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components.scss";
import "../styles/Navbar.scss";
import { levelName, levelAvatar } from "./helpers/navHelpers";
import { useStopwatch } from "react-timer-hook";

export default function Navbar(props) {
  const {
    seconds,
    minutes,
    // hours,
    // days,
    // isRunning,
    // start,
    // pause,
    // reset,
  } = useStopwatch({ autoStart: true });

  useEffect(() => {
    // start();
  }, []);

  const logOut = () => {
    axios
      .post("/api/logout", { withCredentials: true }) // sends credentials to server
      .then((response) => {
        console.log("response:", response.data);
        localStorage.clear();
        props.logout();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="timer-container">
        <p>
          You've been browsing for {minutes} m {seconds} s
        </p>
        <ul className="nav-menu">
          <li>
            <Link to="/my-posts">My Posts</Link>
          </li>
          <li>
            <Link to="/guidelines">Guidelines</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {props.user.level > 2 ? (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          ) : (
            <></>
          )}
        </ul>
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

        <div className="avatar-container">
          <div className="avatar-left">
            <img
              className="avatar-image"
              src={levelAvatar(props.user.level)}
              alt="avatar"
            />
          </div>
          <div className="avatar-right">
            <h3>{props.user.name}</h3>
            <p>Level: {levelName(props.user.level)}</p>
            <p>
              <Link to="/" onClick={logOut}>
                Log Out
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
