import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <a href="/" className="navbar_logo">
          <img src="../img/logo.png" alt="" className="logo" />
        </a>
        <div className="navbar_menu">
          <ul className="navbar_links">
            <a href="/">
              <li>HOME</li>
            </a>
            <a href="/">
              <li>PRODUCT</li>
            </a>
            <a href="/">
              <li>PROMO</li>
            </a>
            <a href="/">
              <li>ABOUT</li>
            </a>
            <a href="/">
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
        <a href="/" className="navbar_search">
          <img src="../img/Search.png" alt=""  className="search_logo"/>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
