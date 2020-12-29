import { motion } from "framer-motion";
import React from "react";

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, transition: "linear" }}
    >
      {children}
    </motion.div>
  );
}
