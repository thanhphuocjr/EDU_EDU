import React from "react";
import "./About.scss";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  const handleClickPlay = () => {
    setPlayState(true);
  };
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play_icon-img"
          onClick={handleClickPlay}
        />
      </div>
      <div className="about-right">
        <div className="header">
          <h3>ABOUT UNIVERSITY</h3>
        </div>
        <h2 className="title">Nurturing Tomorrow's Leaders Today</h2>
        <div className="text">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
          <br />
          <br />
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
          <br />
          <br />
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </div>
      </div>
    </div>
  );
};

export default About;
