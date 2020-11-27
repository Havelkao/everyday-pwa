import "./App.css";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Challenges from "./pages/Challenges";
import Settings from "./pages/Settings";
const data = [
  {
    id: 1,
    name: "20 push-ups",
    start: "2020-11-26",
    end: "2020-12-31",
  },
];

export default function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/history" component={History} />
          <Route path="/settings" component={Settings} />
          <Route path="/challenges" component={Challenges} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, transition: "linear" }}
      >
        <Navbar />
      </motion.div>
    </React.Fragment>
  );
}
