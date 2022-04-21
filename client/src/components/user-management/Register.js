import React, { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

export default function Register() {
  const [formValue, setformValue] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    parent_email: ""
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
      .post("/api/users/", { formValue })
      .then((res) => {
        console.log("from server:", res.data);
        <Navigate replace to="/my-posts" />;
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Register to Get Started</p>
      <input
        type="name"
        name="name"
        placeholder="Choose a username"
        value={formValue.name}
        onChange={handleChange}
      />
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
       <input
        type="password"
        name="password_confirmation"
        placeholder="confirm your password"
        value={formValue.password_confirmation}
        onChange={handleChange}
      />
       <input
        type="email"
        name="parent_email"
        placeholder="enter your parent's email"
        value={formValue.parent_email}
        onChange={handleChange}
      />
      <button color="primary" type="submit">
        Login
      </button>
    </form>
  );
}

