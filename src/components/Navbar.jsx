
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container nav_bar">

      <div className="left nav_items">Portfolio</div>

      <button className="menu_btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`right ${isOpen ? "menu_active" : ""}`}>
        <Link smooth to="#home" className="nav_items">Home</Link>
        <Link smooth to="#about" className="nav_items">About</Link>
        <Link smooth to="#skills" className="nav_items">Skills</Link>
        <Link smooth to="#projects" className="nav_items">Projects</Link>
        <Link smooth to="#contact" className="nav_items">Contact</Link>
      </div>

    </div>
  );
};

export default Navbar;
