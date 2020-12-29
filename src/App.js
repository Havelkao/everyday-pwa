import "./App.css";
import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Challenges from "./pages/Challenges";
import Settings from "./pages/Settings";
import History from "./pages/History";

const json = [
  {
    id: 1,
    name: "Daily push-ups",
    icon: "fas fa-dumbbell",
    start: "2020-12-06",
    end: "2020-12-24",
    value: 20,
    unit: "push-up",
    period: [0, 1, 2, 3, 4, 5, 6, 7],
    isActive: Date.now() >= Date.parse("2020-12-06") && Date.now() <= Date.parse("2020-12-24"),
    isFinished: Date.now() >= Date.parse("2020-12-24"),
  },
  {
    id: 2,
    name: "Yoga Wednesday",
    icon: "fas fa-peace",
    start: "2020-11-26",
    end: "2020-12-31",
    value: 30,
    unit: "minute",
    period: [3],
    isActive: Date.now() >= Date.parse("2020-11-26") && Date.now() <= Date.parse("2020-12-31"),
    isFinished: Date.now() >= Date.parse("2020-12-31"),
  },
  {
    id: 3,
    name: "5K run",
    icon: "fas fa-running",
    start: "2020-11-26",
    end: "2020-12-31",
    value: 5,
    unit: "Km",
    period: [1, 5],
    isActive: Date.now() >= Date.parse("2020-11-26") && Date.now() <= Date.parse("2020-12-31"),
    isFinished: Date.now() >= Date.parse("2020-12-31"),
  },
];

const routes = [
  { path: "/history", Component: History },
  { path: "/settings", Component: Settings },
  { path: "/challenges", Component: Challenges },
  { path: "/", Component: Home },
];

export default function App() {
  const location = useLocation();
  const [data, setData] = useState(json);

  console.log(json);

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path}>
              <Component data={data} setData={setData} />
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, transition: "linear" }}
      >
        <Navbar data={data} />
      </motion.div>
    </>
  );
}
