"use client";

import { useState, useEffect } from "react";

export function useFirstVisit() {
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

  useEffect(() => {
    // Mostrar modal sempre que a página carregar
    setTimeout(() => {
      setShowAnnouncementModal(true);
    }, 500);
  }, []);

  const closeAnnouncementModal = () => {
    setShowAnnouncementModal(false);
  };

  return {
    showAnnouncementModal,
    closeAnnouncementModal,
  };
}
