import React from "react";
import { useEffect } from "react";
import "./Datepicker.css";

export default function Datepicker({ selectedDate, setSelectedDate }) {
  const dates = generateDates();

  useEffect(() => {
    const scrollable = document.querySelector(".datepicker-list");
    let scrollPosition = scrollable.scrollWidth;
    scrollable.scrollTo(scrollPosition, 0);
  }, []);

  return (
    <div className="datepicker-container">
      <div className="datepicker-header">
        <div>
          {selectedDate.toLocaleDateString("en-GB", { weekday: "long" })}
          &nbsp;
          {selectedDate.getDate()}, &nbsp;
          {selectedDate.toLocaleDateString("en-GB", { month: "short" })}
        </div>
        <div>
          <i className="fas fa-chevron-left"></i>
          &nbsp;
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="datepicker-list">
        {dates.map((d) => (
          <div className="datepicker-item" onClick={() => setSelectedDate(d)} key={d}>
            {d.toLocaleDateString("en-GB", { weekday: "short" })[0]}
            <div className={`datepicker-card ${d.getTime() === selectedDate.getTime() ? "active" : ""}`}>
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
  let end = today.getTime();

  while (start <= end) {
    data.push(new Date(start));
    start = start + msDay;
  }

  return data;
}
