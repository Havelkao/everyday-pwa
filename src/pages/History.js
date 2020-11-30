import React from "react";
import Datepicker from "../components/Datepicker";
import Header from "../components/Header";
import "./History.css";
import PageTransition from "../components/PageTransition";

export default function History() {
  return (
    <PageTransition>
      <Header title="History" body={<Datepicker />}></Header>
      <main>
        <div className="history-card-list">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </main>
    </PageTransition>
  );
}

function HistoryCard() {
  return (
    <div className="history-card">
      <i className="fas fa-quidditch"> </i>
      <div>
        <div className="history-card-title">Yoga</div>
        <div className="history-card-value">15 min</div>
      </div>
      <div>10:04</div>
    </div>
  );
}
