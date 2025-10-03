import { Button } from "./button";

export function CtaButton() {
  const message =
    "Olá, vim pelo site do escritório Pereira & Zanatta Advogados e gostaria de agendar um atendimento.";
  const phoneNumber = "+5516993443384";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Button
      className="cta-button font-extrabold"
      aria-label="Agende uma consulta. Leva para o whatsapp."
      onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
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
  );
}
