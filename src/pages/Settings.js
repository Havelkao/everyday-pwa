import React, { useContext } from "react";
import Header from "../components/Header";
import PageTransition from "../utils/PageTransition";
import "./Settings.css";
import { DispatchContext } from "../Login";

export default function Settings() {
  const dispatch = useContext(DispatchContext);
  console.log(dispatch);
  return (
    <PageTransition>
      <Header title="Settings"></Header>
      <div className="settings-header">
        <i className="fas fa-hand-peace"> </i>
        <div className="settings-name">Petr Tomek</div>
      </div>
      <main className="settings">
        <div className="settings-item">
          Account
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="settings-item">
          Notifications
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="settings-item">
          Feedback
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="settings-item">
          About
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="settings-item" onClick={() => dispatch({ type: "logout" })}>
          Logout
        </div>
      </main>
    </PageTransition>
  );
}
