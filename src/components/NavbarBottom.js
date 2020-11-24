import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarBottom.css";

export default function NavbarBottom() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active-link" to="/">
            <i className="fas fa-tasks"></i>
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
          <NavLink exact activeClassName="active-link" to="/stats">
            <i className="fas fa-chart-bar"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
