import React from "react";
import Header from "../components/Header";
import DailyTasks from "../components/DailyTasks";
import "./Home.css";

export default function Home() {
  const dates = generateDates();

  return (
    <React.Fragment>
      <Header title="Tasks" />
      <main className="home">
        {dates.map((day) => (
          <DailyTasks day={day} key={day} />
        ))}
      </main>
    </React.Fragment>
  );
}

function generateDates() {
  let data = [];
  let msDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let start = today.getTime();
  let end = today.getTime() + 3 * msDay;

  while (start < end) {
    data.push(new Date(start));
    start = start + msDay;
  }

  return data;
}
