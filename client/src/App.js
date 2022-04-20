import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import MyPosts from "./components/MyPosts";
import Guidelines from "./components/Guidelines";

export default function App() {

  return (
    <div className="App">
      <Router>
         <Navbar />
         <Routes>
           <Route path="/my-posts" element={<MyPosts />}/>
           <Route path="/guidelines" element={<Guidelines />}/>
           <Route path="/" element={<Feed />}/>
         </Routes>
      </Router>
    </div>
  );
}
