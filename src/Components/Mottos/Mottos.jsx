import React, { useEffect } from "react";
import "./mottos.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Mottos = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="MottoContainer">
      <div data-aos="zoom-in" className="MottoBox">
        <div className="Motto">
          <p className="PrimaryHeading">
            "Your Trust, Our Commitment to Excellence."
          </p>
        </div>
        <div className="Quote">
          <p>
            "Quality is never an accident; it is always the result of high
            intention, sincere effort, intelligent direction, and skillful
            execution."
          </p>
          <small>William A. Foster</small>
        </div>
      </div>
    </div>
  );
};

export default Mottos;
