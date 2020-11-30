import React from "react";
import ChallengeCard from "../components/ChallengeCard";
import Header from "../components/Header";
import "./Challenges.css";
import PageTransition from "../components/PageTransition";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Challenges({ data }) {
  return (
    <PageTransition>
      <Header title="Challenges" action="Create New" />
      <main className="challenge">
        <ToggleSwitch />
        <div className="challenge-card-grid">
          {data.map((d) => (
            <ChallengeCard key={d.id} name={d.name} />
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
