import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export default function useNewChallengePopup() {
  const timeline = useRef();
  const location = useLocation();
  const isSettings = location.pathname === "/settings";

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.set(".new-challenge", { display: "inline-block" });
    tl.to(".fa-plus", { duration: 0.2, rotation: 45 }, "start");
    tl.to(".overlay", { duration: 0.5, opacity: 1 }, "start");
    tl.to(".fa-plus", { duration: 1, background: "#262b3e", color: "white" }, "start");
    tl.to(".new-challenge", { duration: 0.5, height: "100vh" }, "start");
    tl.set("a", { pointerEvents: "none" }, "start");
    tl.to("a", { duration: 0.5, opacity: 0 }, "start");
    tl.set("a", { visibility: "hidden" });
    tl.reverse();

    timeline.current = tl;

    gsap.to(".fa-plus", {
      background: `${isSettings ? "white" : "#262b3e"}`,
      color: `${isSettings ? "#262b3e" : "white"}`,
    });
  }, [isSettings]);

  return { timeline, isSettings };
}
