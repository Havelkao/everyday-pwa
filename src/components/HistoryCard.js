import React from "react";
import "./HistoryCard.css";

export default function HistoryCard() {
  return (
    <div className="history-card">
      <i className="fas fa-quidditch history-card-icon"> </i>
      <div className="histoy-card-description">
        <div className="history-card-title">Yoga</div>
        <div className="history-card-value">15 min</div>
      </div>
      <div className="history-card-time">10:04</div>
    </div>
  );
}
