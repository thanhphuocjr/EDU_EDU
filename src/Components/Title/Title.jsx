import React from "react";
import "./Title.scss";
const Title = ({ subTitle, title }) => {
  return (
    <div className="container">
      <h4 className="sub_title">{subTitle}</h4>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Title;
