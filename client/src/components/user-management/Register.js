import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register(props) {
  const [formValue, setformValue] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    parent_email: "",
  });
  const redirect = useNavigate();

  // sets state with the form values
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  // sends form into to server to create user
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/users/", { formValue })
      .then((res) => {
        console.log("initial res from server", res.data);
        if (res.data.logged_in) {
          props.handleLogin(res.data);
          localStorage.setItem("liftoffUser", JSON.stringify(res.data));
          console.log("handleSubmit Register +++", res.data.user);
          redirect("/quiz");
        } else {
          setformValue({
            errors: res.data.errors,
          });
        }
      })
      .catch((err) => {
        console.log("api errors:", err);
      });
  };

  return (
    <div>
      <div className="page-container">
        <h1 className="logo">
          LiftOff
          <span role="img" aria-label="rocket ship emoji">
            🚀
          </span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="form-container"
          autoComplete="off"
        >
          <h2>Register to Get Started</h2>
          <input
            className="form--input"
            type="name"
            name="name"
            placeholder="choose a username"
            value={formValue.name || ""}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="email"
            name="email"
            placeholder="enter an email"
            value={formValue.email || ""}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="password"
            name="password"
            placeholder="enter a password"
            value={formValue.password || ""}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="password"
            name="password_confirmation"
            placeholder="confirm your password"
            value={formValue.password_confirmation || ""}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="email"
            name="parent_email"
            placeholder="enter your parent's email*"
            value={formValue.parent_email || ""}
            onChange={handleChange}
          />
          <aside>
            *make sure to get your parent or guardian's permission before
            creating your account!
          </aside>
          <button color="primary" type="submit" className="primary--btn">
            Register
          </button>
        </form>
        <Link to="/login">Login with your existing account</Link>
      </div>
    </div>
  );
}
