"use client";

import { X, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import "./index.css";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const message =
    "Olá, vim pelo site do escritório Pereira & Zanatta Advogados e gostaria de agendar uma consulta.";
  const phoneNumber = "+5516993443384";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="text-gold-100 consultation-notification">
      <div className="consultation-notification-container">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="consultation-close-btn"
          aria-label="Fechar notificação"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Content */}
        <div className="consultation-notification-content">
          <div className="flex space-x-2 mb-5">
            <Calendar className="w-4 h-4 text-gold-500" />

            <div className="justify-self-start">
              <h4 className="text-sm font-bold text-start">
                Agende sua Consulta
              </h4>
            </div>
          </div>

          <p className="text-xs mb-5 leading-relaxed">
            Interessado em nossos serviços? Agende uma consulta e tire suas
            dúvidas.
          </p>

          <Button
            onClick={handleWhatsApp}
            className="w-full bg-gold-600 hover:bg-gold-700 text-black font-bold text-xs py-2 flex items-center justify-center space-x-1"
          >
            <img
              src="/icons/whatsapp-icon.webp"
              alt="WhatsApp"
              className="w-4 h-4"
            />
            <span>Agendar Agora</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
