"use client";

import { Button } from "../ui/button";
import "./index.css";

export function FirstSection() {
  const message =
    "Olá, vim pelo site do escritório Pereira & Zanatta Advogados e gostaria de agendar um atendimento.";
  const phoneNumber = "+5516993443384";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section id="inicio">
      <div className="text-gold-100 font-montserrat min-h-[80vh] sm:min-h-screen flex items-center justify-center text-center px-4">
        <div className="bg-opacity-50 p-8 rounded-lg">
          <div className="w-40 h-40 rounded flex items-center justify-center justify-self-center mx-auto mb-4">
            <img
              src="/logo.webp"
              alt="Pereira & Zanatta Logo"
              className="w-40 h-40 object-contain mt-2"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            PEREIRA & ZANATTA <br /> ADVOGADOS
          </h1>

          <p className="text-lg w-64 md:w-auto md:text-3xl mb-6 justify-self-center">
            Defendendo seus direitos com ética e excelência.
          </p>

          <Button
            className="cta-button font-extrabold"
            aria-label="Agende uma consulta. Leva para o whatsapp."
            onClick={() =>
              window.open(whatsappLink, "_blank", "noopener,noreferrer")
            }
          >
            <span className="flex items-center justify-center leading-none text-xs sm:text-2xl">
              <p>AGENDE UMA CONSULTA</p>
              <img
                src="/icons/whatsapp-icon.webp"
                alt="WhatsApp Icon"
                className="w-6 h-6 ml-2 inline-block"
                loading="eager"
              />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
