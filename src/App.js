import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import History from "./views/History";
import NavbarBottom from "./components/NavbarBottom";
import Challenges from "./views/Challenges";

import Statistics from "./views/Statistics";

export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/history" component={History} />
        <Route path="/stats" component={Statistics} />
        <Route path="/challenges" component={Challenges} />
        <Route path="/" component={Home} />
      </Switch>
      <NavbarBottom />
    </main>
  );
}
