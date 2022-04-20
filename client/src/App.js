import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

export default function App() {

  return (
    <div className="App">
      <Router>
         <Navbar />
         <Routes>
           <Route path="/" element={<Feed />}/>
         </Routes>
      </Router>
    </div>
  );
}
