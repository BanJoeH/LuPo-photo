import React from "react";
import { Link } from "react-scroll";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-button">
            <Link to="homepage" activeClass="active" spy={true} smooth={true}>
              <span className="logo">LuPo</span>
              <span> Photography</span>
            </Link>
          </li>
          <div className="nav-items">
            <li className="nav-button">
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li className="nav-button">
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li className="nav-button">
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
