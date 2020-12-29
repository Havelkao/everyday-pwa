import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import "./ToggleSwitch.css";

const options = ["Active", "Completed"];

export default function ToggleSwitch({ active, setActive }) {
  return (
    <AnimateSharedLayout>
      <div className="challenge-type-toggle">
        {options.map((option) => (
          <ToggleSwitchItem
            key={option}
            name={option}
            isSelected={active === option}
            onClick={() => setActive(option)}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  );
}

function ToggleSwitchItem({ isSelected, onClick, name }) {
  return (
    <div className="item" onClick={onClick}>
      {isSelected && <motion.div layoutId="outline" className="outline" initial={false}></motion.div>}
      <div className={`${isSelected ? "active" : ""}`}>{name}</div>
    </div>
  );
}
