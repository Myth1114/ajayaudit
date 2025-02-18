import React, { useState, useEffect } from "react";
import "./header.css";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { CiLight } from "react-icons/ci";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className="HeaderSection">
      <div className="Mode" onClick={toggleDarkMode}>
        <CiLight className="light" />
      </div>
      <div className="Floating">
        <img className="Icon-1" src="/Images/icon1.png" alt="ajay" />
        <img className="Icon-2" src="/Images/statistics.png" alt="ajay" />
      </div>
      <header>
        <div className="Intro">
          <h5 className="RightAni">Hi, I'm</h5>
          <h1 className="Typewriter">Ajay Kurmi</h1>
          <h5 className="RightAni">Assistant Auditor</h5>
        </div>
        <div className="Contact">
          <a className="Telephone" href="tel:+977 9866141932">
            Let's Connect
          </a>
        </div>
        <div className="SocialIcons">
          <a href="mailto:mythleshyadav114@gmail.com">
            <span className="EmailIcon">
              <IoMailSharp />
            </span>
            <span className="Email">Email</span>
          </a>
          <a href="/">
            <span className="FacebookIcon">
              <FaFacebook />
            </span>
            <span className="Facebook">Facebook</span>
          </a>
          <a href="/">
            <span className="LinkedIcon">
              <FaLinkedin />
            </span>
            <span className="LinkedIn">LinkedIn</span>
          </a>
        </div>
        <div className="ProfileImage">
          <img src="Images/ajay.png" alt="ajaykurmi"></img>
        </div>
      </header>
    </section>
  );
};

export default Header;
