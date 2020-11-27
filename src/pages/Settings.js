import React from "react";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import "./Settings.css";

export default function Settings() {
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
        <div className="settings-item">Logout</div>
      </main>
    </PageTransition>
  );
}
