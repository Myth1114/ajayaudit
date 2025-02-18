// src/App.js
import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

import "./index.css";
import Mottos from "./Components/Mottos/Mottos";
import Bio from "./Components/Bio/Bio";
import Gallery from "./Components/Gallery/Gallery";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <About />
      <Education />
      <Mottos />
      <Gallery />
      <Contact />
      <h1>Welcome to My Website</h1>
    </div>
  );
}

export default App;
