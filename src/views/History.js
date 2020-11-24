import React from "react";
import Datepicker from "../components/Datepicker";
import PanelTop from "../components/PanelTop";

export default function History() {
  return (
    <div className="view">
      <PanelTop title="History">
        <Datepicker />
      </PanelTop>
      <section></section>
    </div>
  );
}
