import React from "react";
import "./Contact.scss";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service ton our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" /> thanhphuocjr03012005@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            0869033686
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            TienLu-HungYen-VietNam
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
