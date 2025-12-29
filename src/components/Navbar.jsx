import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        {/* Logo / Brand */}
        <div className="left nav_items">Portfolio</div>

        {/* Toggle Button (Visible on mobile + tablet) */}
        <button className="menu_btn" onClick={toggleMenu}>
          ☰
        </button>

        {/* Nav Links */}
        <div className={`right ${isOpen ? "menu_active" : ""}`}>
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#about" className="nav_items">
            About
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
