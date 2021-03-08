import React from "react";
import { Link } from "react-scroll";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-button">
            <Link to="homepage" smooth={true}>
              <span className="logo">LuPo</span>
              <span> Photography</span>
            </Link>
          </li>
          <div className="nav-items">
            <li className="nav-button">
              <Link to="about" smooth={true} offset={-50}>
                About
              </Link>
            </li>
            <li className="nav-button">
              <Link to="portfolio" smooth={true} offset={-50}>
                Portfolio
              </Link>
            </li>
            <li className="nav-button">
              <Link to="contact" smooth={true} offset={-50}>
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
