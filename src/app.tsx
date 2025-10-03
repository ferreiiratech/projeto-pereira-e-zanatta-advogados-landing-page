import React from "react";
import "./app.css";
import { NavBar } from "./components/navbar";
import { FirstSection } from "./components/first-section";
import { SecondSection } from "./components/second-section";
import { ThirdSection } from "./components/third-section";
import { FourthSection } from "./components/fourth-section";
import { Footer } from "./components/footer";

function App(): React.ReactElement {
  return (
    <>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
}

export default App;
