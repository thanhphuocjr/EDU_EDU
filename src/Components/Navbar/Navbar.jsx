import React, { useState, useEffect } from "react";
// import "./Navbar.css";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png"

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

  const handleOnclick = () => {
    setTimeout(() => setShowNavbar(true), 550);
  };

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
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleOnclick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="program"
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleOnclick}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-120}
              duration={500}
              onClick={handleOnclick}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-270}
              duration={500}
              onClick={handleOnclick}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-280}
              duration={500}
              onClick={handleOnclick}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <button className="btn white_mode">
              <Link
                to="contact"
                smooth={true}
                offset={-260}
                duration={500}
                onClick={handleOnclick}
              >
                Contact us
              </Link>
            </button>
          </li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;
