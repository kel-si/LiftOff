import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formValue, setformValue] = React.useState({
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
    const { email, password } = formValue;
    console.log("event", event.target);
    console.log("email", email);
    console.log("password", password);
    console.log("formValue", formValue);
    axios
      .post("/api/login", { formValue })
      .then(() => setformValue({ ...formValue, email, password }));
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
