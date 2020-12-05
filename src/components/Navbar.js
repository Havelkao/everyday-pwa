import React, { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { gsap } from "gsap";

export default function Navbar({ data }) {
  const [submitNewShown, setSubmitNewShown] = useState(false);
  const location = useLocation();
  const isSettings = location.pathname === "/settings";

  const timeline = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.set(".overlay", { display: "inline-block" });
    tl.to(".fa-plus", { duration: 0.2, rotation: 45 }, "start");
    tl.to(".overlay", { duration: 0.5, opacity: 1 }, "start");
    tl.to(".fa-plus", { duration: 1, background: "#262b3e", color: "white" }, "start");
    tl.to(".submit-new-body", { duration: 0.5, height: "60vh" }, "start");
    tl.set("a", { pointerEvents: "none" }, "start");
    tl.to("a", { duration: 0.5, opacity: 0 }, "start");
    tl.set("a", { visibility: "hidden" });
    tl.to(".submit-new-card", { duration: 0.4, opacity: 1 }, "-=0.3");
    tl.reverse();

    timeline.current = tl;

    gsap.to(".fa-plus", {
      background: `${isSettings ? "white" : "#262b3e"}`,
      color: `${isSettings ? "#262b3e" : "white"}`,
    });
  }, [isSettings]);

  useEffect(() => {
    timeline.current.reversed(!submitNewShown);
  }, [submitNewShown]);

  return (
    <React.Fragment>
      <div className="overlay"></div>
      <div className={`nav ${isSettings ? "settings" : ""}`}>
        <NavLink exact activeClassName="active-link" to="/">
          <i className="fas fa-list"></i>
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/challenges">
          <i className="fas fa-flag"></i>
        </NavLink>
        <div className="nav-submit-toggle">
          <i onClick={() => setSubmitNewShown(!submitNewShown)} className="fas fa-plus"></i>
        </div>
        <NavLink exact activeClassName="active-link" to="/history">
          <i className="fas fa-history"></i>
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/settings">
          <i className="fas fa-cog"></i>
        </NavLink>
      </div>
    </React.Fragment>
  );
}
