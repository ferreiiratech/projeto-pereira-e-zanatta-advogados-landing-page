import React from "react";
import "./app.css";
import { NavBar } from "./components/navbar";
import { FirstSection } from "./components/first-section";

function App(): React.ReactElement {
  return (
    <>
      <NavBar />
      <FirstSection />
    </>
  );
}

export default App;
