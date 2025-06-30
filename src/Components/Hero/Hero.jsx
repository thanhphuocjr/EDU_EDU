import React from "react";
// import "./Hero.css";
import "./Hero.scss";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          We ensure better education
          <br />
          for a better world
        </h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <div className="btn">
          More Explore
          <img src={dark_arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
