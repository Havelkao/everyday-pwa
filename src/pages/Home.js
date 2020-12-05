import React, { useState } from "react";
import Datepicker from "../components/Datepicker";
import Header from "../components/Header";
import PageTransition from "../utils/PageTransition";
import Accordion from "../components/Accordion";
import "./Home.css";

export default function Home({ data }) {
  const [expanded, setExpanded] = useState(0);

  return (
    <PageTransition>
      <Header title="Hi, #Username" body={<Datepicker />}></Header>
      <main className="home">
        {data.map((d) => (
          <Accordion key={d.id} item={d} expanded={expanded} setExpanded={setExpanded} />
        ))}
      </main>
    </PageTransition>
  );
}
