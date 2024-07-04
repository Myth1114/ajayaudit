// src/App.js
import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

import "./index.css";
import Mottos from "./Components/Mottos/Mottos";
import Bio from "./Components/Bio/Bio";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <About />
      <Mottos />
      <Gallery />
      <h1>Welcome to My Website</h1>
    </div>
  );
}

export default App;
