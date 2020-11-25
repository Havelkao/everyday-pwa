import React from "react";
import "./Header.css";

export default function Header({ title, children }) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}
