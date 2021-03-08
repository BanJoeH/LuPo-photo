import React from "react";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-button">
            <a href="#">
              <span className="logo">LuPo</span>
              <span> Photography</span>
            </a>
          </li>
          <div className="nav-items">
            <li className="nav-button">
              <a href="#">About</a>
            </li>
            <li className="nav-button">
              <a href="#">Portfolio</a>
            </li>
            <li className="nav-button">
              <a href="#">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
