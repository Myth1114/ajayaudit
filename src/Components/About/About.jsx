import React from "react";
import "./about.css";
import { services } from "../../Data/data";

const About = () => {
  return (
    <section className="AboutSection">
      <div className="AboutContainer">
        <div className="AboutContentLeft">
          <div className="AboutContentHeading">
            <div className="PrimaryHeading">What I Do For You</div>
          </div>
          <div className="AboutContentDetails">
            {services.map((el) => {
              return (
                <div className="ContainerCard">
                  <div className="CardHeading">
                    <span>{el.logo}</span>
                    <h2>{el.title}</h2>
                  </div>
                  <div className="CardContent">
                    <p>{el.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
