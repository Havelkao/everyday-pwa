import React from "react";
import ChallengeCard from "../components/ChallengeCard";
import Header from "../components/Header";
import "./Challenges.css";
import PageTransition from "../components/PageTransition";

export default function Challenges() {
  return (
    <PageTransition>
      <Header title="Challenges" />
      <main>
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </main>
    </PageTransition>
  );
}
