import React from "react";
import "./CalendarTaskList.css";

export default function CalendarTaskList({ day }) {
  const tasks = [1, 2, 3, 4, 5];

  return (
    <div className="calendar-list" key={day}>
      <div className="calendar-list-header">
        <div className="task-icon">
          <div>{day.getDate()}</div>
          <div>{day.toLocaleDateString("en-GB", { weekday: "short" })}</div>
        </div>
        <div>
          <div>Today</div>
          <div>{tasks.length} Tasks</div>
        </div>
      </div>
      <div className="task-list">
        {tasks.map((i) => (
          <div className="task-item" key={i}>
            <div className="task-target">30 mins</div>
            <label className="task-checkbox-container">
              <input type="checkbox" className="task-checkbox" />
              <span className="task-checkmark"></span>
            </label>
            <div className="task-description active">
              Buy Coffe and go to sleep
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
