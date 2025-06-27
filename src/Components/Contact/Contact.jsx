import React, { useEffect, useState } from "react";
import "./Contact.scss";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    if (status !== "") {
      const timer = setTimeout(() => {
        setResult("");
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setStatus("");
    const formData = new FormData(event.target);

    formData.append("access_key", "b33c0a49-81b7-4380-b7fc-676496d1a4b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setStatus("success");
    } else {
      console.log("Error", data);
      setResult(data.message);
      setStatus("error");
    }
  };
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
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            id="message"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark_mode">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span className={`result-message ${status} ${result ? "" : "hidden"}`}>
          {result}
        </span>
      </div>
    </div>
  );
};

export default Contact;
