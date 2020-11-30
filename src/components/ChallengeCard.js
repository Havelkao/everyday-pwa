import React from "react";

export default function ChallengeCard({ name }) {
  return (
    <div className="challenge-card">
      <div className="challenge-card-header">
        <i className="fas fa-quidditch challenge-card-icon"> </i>
        <div className="challenge-card-title">{name}</div>
        <div className="challenge-card-timeleft">in 65 days</div>
      </div>
      <div className="challenge-card-progress">
        <svg height="10px" viewBox="0 0 1 1" width="100%" preserveAspectRatio="none">
          <path d="M0 0 h1" stroke="gray" />
          <path d="M0 0 h0.5" stroke="green" />
        </svg>
        <div className="challenge-card-description">
          <div>5/10</div>
          <div>50%</div>
        </div>
      </div>
      <div className="challenge-card-friends">
        <i className="fas fa-burn challenge-card-icon"> </i>
        <i className="fas fa-hand-peace challenge-card-icon"> </i>
        <i className="fas fa-pepper-hot challenge-card-icon"> </i>
        <div>+3</div>
      </div>
    </div>
  );
}
