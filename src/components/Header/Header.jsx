import React from "react";
import { NavLink } from "react-router-dom";
import githublogo from "../../assets/githublogo.png";
import "./Header.css";

function Header(props) {
  const isLoggedIn = props.isLoggedIn;

  // Only show the header if the user is logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <nav className="header-nav">
      <div className="header-left">
        <img src={githublogo} alt="GitHub Logo" className="github-logo" />

        <NavLink exact to="/discovery" className="header-nav-link">
          Discovery
        </NavLink>
      </div>
      <ul className="header-nav-list">
        <li className="header-nav-item">
          <NavLink exact to="/my-account" className="header-nav-link">
            Username
          </NavLink>
        </li>
        <li className="header-nav-item">
          <NavLink exact to="/" className="header-nav-link">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
