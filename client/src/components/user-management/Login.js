import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log("formValue", formValue);
    axios
      .post("/api/login", { formValue })
      .then((res) => {
        console.log("from server:", res.data);
        navigate("/my-posts");
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login to Get Started</h2>
      <input className="form--input"
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input className="form--input"
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button color="primary" type="submit" className="primary--btn">
        Login
      </button>
    </form>
  );
}
