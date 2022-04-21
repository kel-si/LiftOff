import React from "react";
import Login from "./user-management/Login";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="page-container">
      <h1>Get ready for LiftOff!</h1>
      <h3>A training camp that will set you up to explore the social media universe successfully.</h3>
      <Login />
      <Link to="/register">Register</Link>
    </div>
  );
}
