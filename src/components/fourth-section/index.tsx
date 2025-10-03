import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import "./index.css";
import { CtaButton } from "../ui/cta-button";
import { TitleSection } from "../ui/title-section";

export function FourthSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(16) 99344-3384",
      href: "tel:+5516993443384",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "escritorio.pereiraezanatta@gmail.com",
      href: "mailto:escritorio.pereiraezanatta@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@pereiraezanattaadvogados",
      href: "https://instagram.com/pereiraezanattaadvogados",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Pereira & Zanatta Advogados",
      href: "https://www.facebook.com/profile.php?id=61579965505364",
    },
  ];

  return (
    <section id="contato" className="bg-black">
      <div className="text-gold-100 font-montserrat items-center justify-center text-center px-8 py-40 container mx-auto ">
        <TitleSection
          title="CONTATO"
          description="Entre em contato conosco para agendar uma consulta. Estamos prontos para defender seus direitos."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-start">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card key={index} className=" transition-colors duration-300">
                    <CardContent className="contact-card p-6">
                      <div className="contact-content flex items-center space-x-4">
                        <div className="w-12 h-12 bg-amber-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="contact-text">
                          <p className="contact-label text-sm mb-1">
                            {contact.label}
                          </p>
                          <p className="contact-value font-semibold">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Address */}
          <a
            href="https://maps.app.goo.gl/U2NvBzAEymGaViBC7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="address-card bg-card border-border text-start">
              <CardContent className="p-8">
                <div className="address-content flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Endereço
                    </p>
                    <p className="text-foreground font-semibold leading-relaxed">
                      Rua Afonso Taranto, 220, SL14
                      <br />
                      Nova Ribeirânia – Ribeirão Preto/SP
                      <br />
                      CEP: 14096-740
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* CTA */}
          <div className="text-center mt-12">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
