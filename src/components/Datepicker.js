import React from "react";
import { useState, useEffect } from "react";
import "./Datepicker.css";

export default function Datepicker() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [selected, setSelected] = useState(today);

  const dates = generateDates();

  const handleSelect = (newSelected) => {
    setSelected(newSelected);
  };

  useEffect(() => {
    const scrollable = document.querySelector(".datepicker-list");

    var outerContentWidth = scrollable.clientWidth;
    var scrollPosition = outerContentWidth / 2;
    scrollable.scrollTo(scrollPosition, 0);
  }, []);

  return (
    <div className="datepicker-container">
      <div className="datepicker-head">
        <div className="datepicker-title">
          {selected.toLocaleDateString("en-GB", { weekday: "long" })}
          &nbsp;
          {selected.getDate()}, &nbsp;
          {selected.toLocaleDateString("en-GB", { month: "short" })}
        </div>
        <div className="datepicker-icons">
          <i className="fas fa-chevron-left"></i>
          &nbsp;
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="datepicker-list">
        {dates.map((d) => (
          <div
            className="datepicker-item"
            onClick={() => handleSelect(d)}
            key={d}
          >
            {d.toLocaleDateString("en-GB", { weekday: "short" })[0]}
            <div
              className={`datepicker-card ${
                d.getTime() === selected.getTime() ? "active" : ""
              }`}
            >
              {d.getDate()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function generateDates() {
  let data = [];
  let msDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let start = today.getTime() - 15 * msDay;
  let end = today.getTime() + 15 * msDay;

  while (start <= end) {
    data.push(new Date(start));
    start = start + msDay;
  }

  return data;
}
