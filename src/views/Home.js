import React from "react";
import PanelTop from "../components/PanelTop";
import CalendarTaskList from "../components/CalendarTaskList";

export default function Home() {
  const dates = generateDates();

  return (
    <div className="view">
      <PanelTop title="Tasks" subtitle="tasks" />
      <section>
        {dates.map((day) => (
          <CalendarTaskList day={day} key={day} />
        ))}
      </section>
    </div>
  );
}

function generateDates() {
  let data = [];
  let msDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let start = today.getTime();
  let end = today.getTime() + 6 * msDay;

  while (start <= end) {
    data.push(new Date(start));
    start = start + msDay;
  }

  return data;
}
