import React from "react";
import ChallengeCard from "../components/ChallengeCard";
import Header from "../components/Header";
import "./Challenges.css";

export default function Challenges() {
  return (
    <React.Fragment>
      <Header title="Challenges" />
      <main>
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </main>
    </React.Fragment>
  );
}
