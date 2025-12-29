import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>
          <strong>Contact me</strong>
        </h1>
        <div
          href="https://www.google.com"
          target="_blank"
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-maurya-0a7b38278/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/vsm222142?tab=repositories"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:mauryavishal0080@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
