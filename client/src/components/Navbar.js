import React from "react";
import "../styles/components.css";

export default function Navbar() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>My Posts Button</li>
        <li>Guidelines</li>
        <li>Log Out Button</li>
      </ul>
      <container className="avatar-container">
        <img
          className="avatar-image"
          src="https://i.pinimg.com/originals/f3/8f/15/f38f150e6ae908a1e908597a92eb1e99.png"
        />
        <p>Level 1</p>
      </container>
    </nav>
  );
}
