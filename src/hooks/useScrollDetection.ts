"use client";

import { useState, useEffect } from "react";

export function useScrollDetection() {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    const detectSection = () => {
      const sections = [
        { id: "inicio", element: document.getElementById("inicio") },
        { id: "quem-somos", element: document.getElementById("quem-somos") },
        {
          id: "areas-atuacao",
          element: document.getElementById("areas-atuacao"),
        },
        { id: "contato", element: document.getElementById("contato") },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionBottom = sectionTop + section.element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setCurrentSection(section.id);

            // Mostrar modal quando chegar na terceira seção (areas-atuacao) pela primeira vez
            if (section.id === "areas-atuacao" && !hasShownModal) {
              setTimeout(() => {
                setShowConsultationModal(true);
                setHasShownModal(true);
              }, 1000); // Delay de 1 segundo para melhor UX
            }
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      detectSection();
    };

    window.addEventListener("scroll", handleScroll);
    detectSection(); // Detectar seção inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShownModal]);

  const closeModal = () => {
    setShowConsultationModal(false);
  };

  return {
    currentSection,
    showConsultationModal,
    closeModal,
  };
}
