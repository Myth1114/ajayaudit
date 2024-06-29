// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

import { CiLight } from "react-icons/ci";

import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <div onClick={toggleDarkMode}>
        <CiLight className="light" />
      </div>
      <Header />
      <About />
      <h1>Welcome to My Website</h1>
    </div>
  );
}

export default App;
