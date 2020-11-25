import React from "react";
import Datepicker from "../components/Datepicker";
import HistoryCard from "../components/HistoryCard";
import Header from "../components/Header";
import "./History.css";

export default function History() {
  return (
    <React.Fragment>
      <Header title="History">
        <Datepicker />
      </Header>
      <main>
        <div className="history-card-list">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </main>
    </React.Fragment>
  );
}
