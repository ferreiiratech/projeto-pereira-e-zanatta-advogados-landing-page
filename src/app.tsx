import React from "react";
import "./app.css";
import { NavBar } from "./components/navbar";
import { FirstSection } from "./components/first-section";
import { SecondSection } from "./components/second-section";

function App(): React.ReactElement {
  return (
    <>
      <NavBar />
      <FirstSection />
      <SecondSection />
    </>
  );
}

export default App;
