import React from "react";
import "./app.css";
import { NavBar } from "./components/navbar";
import { FirstSection } from "./components/first-section";
import { SecondSection } from "./components/second-section";
import { ThirdSection } from "./components/third-section";
import { FourthSection } from "./components/fourth-section";
import { Footer } from "./components/footer";
import { ConsultationModal } from "./components/consultation-modal";
import { useScrollDetection } from "./hooks/useScrollDetection";

function App(): React.ReactElement {
  const { showConsultationModal, closeModal } = useScrollDetection();

  return (
    <>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />

      {/* Modal de Consulta */}
      <ConsultationModal isOpen={showConsultationModal} onClose={closeModal} />
    </>
  );
}

export default App;
