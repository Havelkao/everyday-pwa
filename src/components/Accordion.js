import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Accordion.css";

export default function Accordion({ item, expanded, setExpanded }) {
  const isOpen = item.id === expanded;

  return (
    <div className="container" onClick={() => setExpanded(isOpen ? false : item.id)}>
      <div className="container-card">
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
            transition={{ duration: 1 }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, rerum.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
