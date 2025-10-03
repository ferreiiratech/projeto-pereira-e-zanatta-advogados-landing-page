"use client";

import { useEffect } from "react";
import { X, Shield, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import "./index.css";

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AnnouncementModal({ isOpen, onClose }: AnnouncementModalProps) {
  // Bloquear scroll quando modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      // Desabilitar scroll e adicionar classe
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      // Reabilitar scroll e remover classe
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }

    // Cleanup - garantir que scroll seja reabilitado
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="announcement-modal-overlay">
      <div className="announcement-modal-container">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="announcement-close-btn"
          aria-label="Fechar comunicado"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Header */}
        <div className="announcement-modal-header">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gold-100">COMUNICADO</h2>
              <p className="text-sm text-red-400 font-medium">
                Importante - Fique Atento!
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="announcement-modal-content">
          <h3 className="text-lg font-bold text-gold-100 mb-4">
            Fique atento a golpes em aplicativos de mensagens!
          </h3>

          <div className="announcement-text">
            <p className="mb-4">
              Criminosos estão se passando por advogados, principalmente no
              <strong className="text-gold-200"> WhatsApp</strong>, utilizando
              nomes de escritórios conhecidos. Assim, conseguem informações de
              processos e entram em contato alegando que valores foram
              liberados ou enviando documentos para pedir dinheiro.
            </p>

            <p className="mb-4">
              Se você receber algum contato suspeito, mesmo que pareça real,
              <strong> considere-o como tentativa de fraude</strong>.
            </p>

            <div className="warning-box">
              <p className="font-bold text-red-300">
                ⚠️ Não deposite, não transfira valores e não forneça informações
                sem antes confirmar a origem da situação.
              </p>
            </div>

            <div className="contact-info">
              <p className="font-semibold text-gold-100 mb-3">
                Em caso de dúvidas, entre em contato diretamente com nosso
                escritório:
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="break-words">Telefone: (16) 99344-3384</span>
                </div>
                <div className="contact-item">
                  <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="break-all">
                    E-mail: escritorio.pereiraezanatta@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="signature">
              <p className="text-gold-200 font-semibold">
                Estamos prontos para ajudar!
                <br />
                <span className="text-gold-100 font-bold">
                  Pereira & Zanatta Advogados
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
