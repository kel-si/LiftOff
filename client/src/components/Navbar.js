import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.scss";

export default function Navbar(props) {
  return (
    <nav>
      <h1>
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
        <button onClick={props.logout}>
          <li>
            <Link to="/">Log Out Button</Link>
          </li>
        </button>
      </ul>
      <div>Logged In As:</div>
      <div>Level:</div>
      <div className="avatar-container">
        <img
          className="avatar-image"
          src="https://i.pinimg.com/originals/f3/8f/15/f38f150e6ae908a1e908597a92eb1e99.png"
          alt="shiba in the universe"
        />
      </div>
    </nav>
  );
}
