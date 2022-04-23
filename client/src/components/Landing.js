import React from "react";
import Login from "./user-management/Login";
import { Link } from "react-router-dom";

export default function Landing(props) {

  return (
    <div className="page-container">
      <Login handleLogin={props.handleLogin}/>
      <Link to="/register">Register</Link>
    </div>
  );
}
