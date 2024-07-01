// src/App.js
import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

import "./index.css";
import Mottos from "./Components/Mottos/Mottos";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Mottos />
      <h1>Welcome to My Website</h1>
    </div>
  );
}

export default App;
