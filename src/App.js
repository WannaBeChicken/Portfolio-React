import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Particle from "./components/Particles";
function App() {
  return (
    <div>
            <Particle />

      <NavBar />
      <div className="content">
        {<Home />}
        {<About />}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Resume" element={<Resume />} />
        </Routes> */}
        </div>
    </div>
  );
}

export default App;
