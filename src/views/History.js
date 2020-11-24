import React from "react";
import Datepicker from "../components/Datepicker";
import HistoryCard from "../components/HistoryCard";
import PanelTop from "../components/PanelTop";

export default function History() {
  return (
    <div className="view">
      <PanelTop title="History">
        <Datepicker />
      </PanelTop>
      <section>
        <div className="history-card-list">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </section>
    </div>
  );
}
