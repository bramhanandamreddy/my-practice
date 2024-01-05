// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddProject from "./components/AddProject";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
