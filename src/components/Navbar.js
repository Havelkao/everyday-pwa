import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import NewChallenge from "../pages/NewChallenge";
import useNewChallengePopup from "../hooks/useNewChallengePopup";

export default function Navbar() {
  const [newChallengeShown, setNewChallengeShown] = useState(false);
  const { timeline, isSettings } = useNewChallengePopup();

  useEffect(() => {
    timeline.current.reversed(!newChallengeShown);
  }, [timeline, newChallengeShown]);

  return (
    <>
      <div className={`nav ${isSettings ? "settings" : ""}`}>
        <NavLink exact activeClassName="active-link" to="/">
          <i className="fas fa-list"></i>
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/challenges">
          <i className="fas fa-flag"></i>
        </NavLink>
        <div className="nav-submit-toggle">
          <i onClick={() => setNewChallengeShown(!newChallengeShown)} className="fas fa-plus"></i>
        </div>
        <NavLink exact activeClassName="active-link" to="/history">
          <i className="fas fa-history"></i>
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/settings">
          <i className="fas fa-cog"></i>
        </NavLink>
      </div>

      <NewChallenge />
    </>
  );
}
