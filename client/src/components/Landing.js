import React from "react";
import Login from "./user-management/Login";
import Register from "./user-management/Register";

export default function Landing() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Login />
      <Register />
    </div>
  );
}
