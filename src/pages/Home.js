import React from "react";
import Datepicker from "../components/Datepicker";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Header title="Hi, Username">
        <Datepicker />
      </Header>
      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo
        debitis animi soluta. Voluptate consectetur quibusdam esse laborum quos
        enim sed quis assumenda provident saepe commodi, dolorum voluptatem
        dignissimos error.
      </main>
    </PageTransition>
  );
}
