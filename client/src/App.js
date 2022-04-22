import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyPosts from "./components/MyPosts";
import Guidelines from "./components/Guidelines";
import Landing from "./components/Landing";
import Register from "./components/user-management/Register";
import Quiz from "./components/Quiz";
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
      user: data.data.user,
    });
  };

  const handleLogout = () => {
    setLogin({
      status: false,
      user: {},
    });
  };

  const loginStatus = () => {
    axios.get('/api/logged_in') //what does this mean?
    .then(response => {
      if (response.data.logged_in) {
        handleLogin(response)
      } else {
        handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  useEffect(() => {
    loginStatus();
  }, []);

  const currentUser = login.user;

  return (
    <div className="App">
      <Router>
        <Navbar logout={handleLogout} currentUser={currentUser} />
        <Routes>
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/" element={<Landing handleLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register handleLogin={handleLogin} />}
          />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/admin" element={<AdminLanding />} />
          <Route path="/admin-approvals" element={<AdminFeed />} />
          <Route path="/admin-users" element={<AdminUsers />} />
        </Routes>
      </Router>
    </div>
  );
}
