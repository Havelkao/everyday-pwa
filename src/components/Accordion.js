import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Accordion.css";

export default function Accordion({ item, expanded, setExpanded }) {
  const isOpen = item.id === expanded;

  return (
    <div className="container-accordion">
      <div className="container-accordion-card" onClick={() => setExpanded(isOpen ? false : item.id)}>
        <div key={item.id}>
          <i className={item.icon}></i>
        </div>
        <div>{item.name}</div>
        <div className="container-card-value">
          {item.value}/{item.value}
        </div>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter>
        {isOpen && (
          <motion.div
            className="container-expansion"
            initial={{ height: 0, marginTop: "0em" }}
            animate={{ height: "auto", marginTop: "1em" }}
            exit={{ height: 0, marginTop: "0em" }}
            transition={{ duration: 0.7 }}
          >
            <div className="input-value" data-placeholder="What have you done?!" contentEditable></div>
            <button className="submit-value">Add</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
