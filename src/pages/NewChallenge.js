import React from "react";
import "./NewChallenge.css";

export default function NewChallenge() {
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 1);

  return (
    <div className="addnew-body">
      {/* <h1>New</h1>
      <form>
        <label htmlFor="name"></label>
        <div className="text-input" contentEditable>
          hello
        </div>
        Periodicity
        <div className="addnew-periodicity">
          {days.map((d) => (
            <label className="task-checkbox-container">
              <input type="checkbox" className="task-checkbox" />
              <span className="task-checkmark"></span>
              {d}
            </label>
          ))}
        </div>
        <br />
        Start
        <input type="date" name="" id="" defaultValue={new Date().toISOString().substr(0, 10)} />
        End
        <input type="date" name="" id="" defaultValue={endDate.toISOString().substr(0, 10)} />
      </form> */}
    </div>
  );
}
