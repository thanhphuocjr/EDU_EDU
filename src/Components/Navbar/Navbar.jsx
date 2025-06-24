import React, { useState, useEffect } from "react";
// import "./Navbar.css";
import "./Navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY) {
        setShowNavbar(false); // cuộn xuống
      } else {
        setShowNavbar(true); // cuộn lên
      }
      if (currentY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar ${showNavbar ? "visible" : "hidden"} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="content">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Program</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Campus</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <button className="btn">Contact us</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
