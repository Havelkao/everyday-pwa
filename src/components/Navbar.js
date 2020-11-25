import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function NavbarBottom() {
  const location = useLocation();

  return (
    <nav className={location.pathname === "/settings" ? "settings" : ""}>
      <ul>
        <li>
          <NavLink exact activeClassName="active-link" to="/">
            <i className="fas fa-list"></i>
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active-link" to="/challenges">
            <i className="fas fa-flag"></i>
          </NavLink>
        </li>
        <li>
          <i className="fas fa-plus"></i>
        </li>
        <li>
          <NavLink exact activeClassName="active-link" to="/history">
            <i className="fas fa-history"></i>
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active-link" to="/settings">
            <i className="fas fa-cog"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
