import React from "react";
import "./app.css";
import { NavBar } from "./components/navbar";
import { FirstSection } from "./components/first-section";
import { SecondSection } from "./components/second-section";
import { ThirdSection } from "./components/third-section";
import { FourthSection } from "./components/fourth-section";
import { Footer } from "./components/footer";
import { ConsultationModal } from "./components/consultation-modal";
import { AnnouncementModal } from "./components/announcement-modal";
import { useScrollDetection } from "./hooks/useScrollDetection";
import { useFirstVisit } from "./hooks/useFirstVisit";

function App(): React.ReactElement {
  const { showConsultationModal, closeModal } = useScrollDetection();
  const { showAnnouncementModal, closeAnnouncementModal } = useFirstVisit();

  return (
    <>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />

      {/* Modal de Comunicado - Primeira Visita */}
      <AnnouncementModal
        isOpen={showAnnouncementModal}
        onClose={closeAnnouncementModal}
      />

      {/* Modal de Consulta - Terceira Seção (só se comunicado não estiver aberto) */}
      <ConsultationModal
        isOpen={showConsultationModal && !showAnnouncementModal}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
