import React from "react";
import "./Header.css";

export default function Header({ title, body, action }) {
  return (
    <header>
      <div className="header-layout">
        <h1>{title}</h1>
        {action}
      </div>
      {body}
    </header>
  );
}
