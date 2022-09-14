import React from "react";
import Login from "./user-management/Login";
import Feed from "./Feed";
import { Link } from "react-router-dom";

export default function Landing(props) {
  if (props.user.status) {
    return (
      <div className="page-container">
        <Feed user={props.user} />
      </div>
    );
  }
  return (
    <div className="page-container">
      <Login handleLogin={props.handleLogin} />
    </div>
  );
}
