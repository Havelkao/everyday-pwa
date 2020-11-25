import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import History from "./views/History";
import Navbar from "./components/Navbar";
import Challenges from "./views/Challenges";
import Settings from "./views/Settings";

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/history" component={History} />
        <Route path="/settings" component={Settings} />
        <Route path="/challenges" component={Challenges} />
        <Route path="/" component={Home} />
      </Switch>
      <Navbar />
    </React.Fragment>
  );
}
