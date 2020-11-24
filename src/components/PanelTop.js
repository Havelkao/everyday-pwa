import React from "react";
import "./PanelTop.css";

export default function PanelTop({ title, children }) {
  return (
    <div className="panel-top">
      <div className="panel-head">
        <div className="title">{title}</div>
      </div>

      {children}
    </div>
  );
}
