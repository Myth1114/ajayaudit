import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./bio.css";
const Bio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="BioSection">
      <div className="BioContainer">
        <div className="BioLeft" data-aos="fade-right">
          <img src="Images/ajay.png" alt="ajaykurmi" />
          <div className="Wrapper">
            <h2>8</h2>
            <span>Years of Experience</span>
          </div>
        </div>
        <div data-aos="fade-left" className="BioRight">
          <div className="Overview">
            <h5>About Me</h5>
            <h1 className="PrimaryHeading">
              A Lead UI Designer & Web Developer
            </h1>
            <p>
              love Graphic design and Photography and have been working on my
              portfolio since 2016. I Can give your business a new Creative
              start right away! Contact me and we will discuss your projects!
            </p>
          </div>
          <div className="Details">
            <div className="Contents">
              <span>Name</span>
              <p>Ajay Kurmi</p>
            </div>
            <div className="Contents">
              <span>Email</span>
              <p>ajaykurmi@gmail.com</p>
            </div>
            <div className="Contents">
              <span>Contact</span>
              <p>+977 9847031266</p>
            </div>
            <div className="Contents">
              <span>Location</span>
              <p>Siddharthanagar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
