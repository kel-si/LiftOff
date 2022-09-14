import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/user-management/Login";
import Feed from "./components/Feed";
import Guidelines from "./components/Guidelines";
import Landing from "./components/Landing";
import Register from "./components/user-management/Register";
import Quiz from "./components/Quiz";
import About from "./components/About";
import axios from "axios";
import AdminLanding from "./components/admin/AdminLanding";
import AdminFeed from "./components/admin/AdminFeed";
import AdminUsers from "./components/admin/AdminUsers";

export default function App() {
  const [login, setLogin] = useState({
    status: false,
    user: {},
  });

  const handleLogin = (data) => {
    setLogin({
      status: true,
      user: data.user,
    });
  };

  const handleLogout = () => {
    setLogin({
      status: false,
      user: {},
    });
  };

  const loginStatus = () => {
    axios
      .get("/api/logged_in", { withCredentials: true }) //what does this mean?
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response.data);
          localStorage.setItem("liftoffUser", JSON.stringify(response.data));
        } else {
          handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  const handleQuizCompletion = (level) => {
    const newUserState = { ...login.user, level: level };
    setLogin((prev) => ({ ...prev, user: newUserState }));
  };

  useEffect(() => {
    loginStatus();
  }, []);

  return (
    <div className="App">
      <Router>
        {login.status ? (
          <>
            {" "}
            <Navbar
              user={login.user}
              setLogin={setLogin}
              logout={handleLogout}
            />{" "}
          </>
        ) : (
          <></>
        )}
        <Routes>
          <Route
            path="/"
            element={<Landing user={login} handleLogin={handleLogin} />}
          />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register handleLogin={handleLogin} />}
          />
          <Route path="/my-posts" element={<Feed user={login.user} />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/quiz"
            element={
              <Quiz updateLevel={handleQuizCompletion} user={login.user} />
            }
          />
          <Route path="/admin" element={<AdminLanding />} />
          <Route
            path="/admin-approvals"
            element={<AdminFeed user={login.user} />}
          />
          <Route path="/admin-users" element={<AdminUsers />} />
        </Routes>
      </Router>
    </div>
  );
}
