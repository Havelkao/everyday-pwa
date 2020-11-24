import React from "react";
import ChallengeCard from "../components/ChallengeCard";
import PanelTop from "../components/PanelTop";

export default function Challenges() {
  return (
    <div className="view">
      <PanelTop title="Challenges" />
      <section>
        <div className="challenge-list">
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </div>
      </section>
    </div>
  );
}
