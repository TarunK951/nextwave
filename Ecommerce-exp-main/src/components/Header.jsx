import React from "react";
import arrowIcon from "../assets/arrow-left.png";
import logoIcon from "../assets/element-4.png";
import heartIcon from "../assets/heart.png";
import mainLogo from "../assets/Logo.png";
import profileIcon from "../assets/profile.png";
import searchIcon from "../assets/search-normal.png";
import bagIcon from "../assets/shopping-bag.png";
import "./Header.css";
import "./mobile.css";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <div className="top-message">
          <img src={logoIcon} alt="Icon Logo" className="icon-logo" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="top-message">
          <img src={logoIcon} alt="Icon Logo" className="icon-logo" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="top-message">
          <img src={logoIcon} alt="Icon Logo" className="icon-logo" />
          <p>Lorem ipsum dolor</p>
        </div>
      </div>

      <header className="main-header">
        <div className="header-left">
          <img src={mainLogo} alt="Main Logo" className="main-logo" />
        </div>
        <div className="header-center">LOGO</div>
        <div className="header-right">
          <img src={searchIcon} alt="Search" className="header-icon" />
          <img src={heartIcon} alt="Heart" className="header-icon" />
          <img src={profileIcon} alt="Profile" className="header-icon" />
          <img src={bagIcon} alt="Cart" className="header-icon" />
          <div className="lang-select">
            ENG <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
          </div>
        </div>
      </header>

      <nav className="nav-bar">
        <ul>
          <li className="hover-underline">SHOP</li>
          <li className="hover-underline">SKILLS</li>
          <li className="hover-underline">STORIES</li>
          <li className="hover-underline">ABOUT</li>
          <li className="hover-underline">CONTACT US</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
