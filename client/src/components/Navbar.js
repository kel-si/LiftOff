import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.css";

export default function Navbar() {
  return (
    <nav>
      <h1><Link to="/">Logo</Link></h1>
      <ul>
        <button>
          <li><Link to="/my-posts">My Posts Button</Link></li>
        </button>
        <button>
        <li><Link to="/guidelines">Guidelines</Link></li>
        </button>
        <button>
          <li>Log Out Button</li>
        </button>
      </ul>
      <div className="avatar-container">
        <img
          className="avatar-image"
          src="https://i.pinimg.com/originals/f3/8f/15/f38f150e6ae908a1e908597a92eb1e99.png"
        alt="shiba in the universe" />
        <p>Level 1</p>
      </div>
    </nav>
  );
}
