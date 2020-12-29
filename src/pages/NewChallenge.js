import React from "react";
import "./NewChallenge.css";

const days = [
  { id: 0, day: "Monday" },
  { id: 1, day: "Tuesday" },
  { id: 2, day: "Wednesday" },
  { id: 3, day: "Thursday" },
  { id: 4, day: "Friday" },
  { id: 5, day: "Saturday" },
  { id: 6, day: "Sunday" },
  { id: 7, day: "Select All" },
];

export default function NewChallenge() {
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 1);

  return (
    <div className="new-challenge">
      <h1>New Challenge</h1>
      <form>
        <input type="text" placeholder="Challenge name" />
        <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        Periodicity
        <div className="new-challenge-periodicity">
          {days.map((d) => (
            <label key={d.id} className="task-checkbox-container">
              <label>
                <input type="checkbox" />
                <span>{d.day}</span>
              </label>
            </label>
          ))}
        </div>
        <br />
        <div>
          Start
          <input type="date" name="" id="" defaultValue={new Date().toISOString().substr(0, 10)} />
          End
          <input type="date" name="" id="" defaultValue={endDate.toISOString().substr(0, 10)} />
        </div>
      </form>
    </div>
  );
}
