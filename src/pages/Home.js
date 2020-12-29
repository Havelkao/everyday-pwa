import React, { useState } from "react";
import Datepicker from "../components/Datepicker";
import Header from "../components/Header";
import PageTransition from "../utils/PageTransition";
import Accordion from "../components/Accordion";
import "./Home.css";

export default function Home({ data }) {
  const [expanded, setExpanded] = useState(0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <PageTransition>
      <Header
        title="Hi, #Username"
        body={<Datepicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />}
      ></Header>
      <main className="home">
        {data.map((d) => {
          if (
            Date.parse(d.start) < selectedDate &&
            Date.parse(d.end) > selectedDate &&
            d.period.find((p) => p === selectedDate.getDay()) !== undefined
          ) {
            return <Accordion key={d.id} item={d} expanded={expanded} setExpanded={setExpanded} />;
          } else {
            return "";
          }
        })}
      </main>
    </PageTransition>
  );
}
