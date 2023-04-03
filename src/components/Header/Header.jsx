import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const isLoggedIn = props.isLoggedIn;

  // Only show the header if the user is logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <nav className="header-nav">
      <ul className="header-nav-list">
        <li className="header-nav-item">
          <NavLink exact to="/discovery" className="header-nav-link">
            Discovery
          </NavLink>
        </li>
        <li className="header-nav-item">
          <NavLink exact to="/edit-profile" className="header-nav-link">
            Username
          </NavLink>
        </li>
        <li className="header-nav-item">
          <NavLink exact to="/logout" className="header-nav-link">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
