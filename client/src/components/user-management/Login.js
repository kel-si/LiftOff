import React, { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log("formValue", formValue);
    axios
      .post("/api/login", { formValue })
      .then((res) => {
        console.log("from server:", res.data);
        <Navigate replace to="/home" />;
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Login to Get Started</p>
      <input
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button color="primary" type="submit">
        Login
      </button>
    </form>
  );
}
