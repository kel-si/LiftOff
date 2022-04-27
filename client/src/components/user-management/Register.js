import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    parent_email: "",
  });
  const navigate = useNavigate();

  // sets state with the form values
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  // sends form into to server to create user
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/users", { user })
      .then((res) => {
        console.log("server responding to new user", res.data);
        if (res.data.logged_in) {
          props.handleLogin(res.data);
          localStorage.setItem("liftoffUser", JSON.stringify(res.data));
          navigate("/quiz");
        } else {
          setUser({
            errors: res.data.errors,
          });
        }
      })
      // })
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
          <h2>Start Your Mission</h2>
          <input
            className="form--input"
            type="name"
            name="name"
            placeholder="choose a username"
            value={user.name || ""}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="email"
            name="email"
            placeholder="enter an email"
            value={user.email || ""}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="password"
            name="password"
            placeholder="enter a password"
            value={user.password || ""}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="password"
            name="password_confirmation"
            placeholder="confirm your password"
            value={user.password_confirmation || ""}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="email"
            name="parent_email"
            placeholder="enter your parent's email"
            value={user.parent_email || ""}
            onChange={handleChange}
          />
          <aside>
            *make sure to get your parent or guardian's permission before
            creating your account!
          </aside>
          <div className="login-btn">
          <button color="primary" type="submit" className="primary--btn">
            Register
          </button>
          </div>
        </form>
        <Link to="/login" className="reg-link">Login with your existing account</Link>
      </div>
    </div>
  );
}
