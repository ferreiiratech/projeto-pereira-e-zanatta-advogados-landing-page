import { Card, CardContent } from "../ui/card";
import { TitleSection } from "../ui/title-section";
import "./index.css";

export function SecondSection() {
  const lawyers = [
    {
      name: "João Zanatta Júnior",
      oab: "OAB/SP 159.695",
      education:
        "Advogado formado pelo Centro Universitário Octávio Bastos em 1997",
    },
    {
      name: "Júlio César Zuanetti Miniéri",
      oab: "OAB/SP 186.564",
      education:
        "Advogado formado pelo Centro Universitário Octávio Bastos em 2000",
    },
    {
      name: "Rômulo Christian Pereira",
      oab: "OAB/SP 501.809",
      education: "Advogado formado pela Universidade de Ribeirão Preto em 2022",
    },
    {
      name: "Ana Lara Zanatta",
      oab: "OAB/SP 509.688",
      education: "Advogada formada pela Universidade de Ribeirão Preto em 2023",
    },
  ];

  return (
    <section id="quem-somos" className="bg-black">
      {/* min-h-[80vh] sm:min-h-screen */}
      <div className="text-gold-100 font-montserrat flex flex-col items-center justify-center text-center px-8 py-40">
        <TitleSection
          title="QUEM SOMOS"
          description="Nossa equipe é formada por advogados experientes e comprometidos com a excelência no atendimento jurídico."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {lawyers.map((lawyer, index) => (
            <Card key={index} className="cursor-default lawyer-card ">
              <CardContent className="p-8 text-start">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {lawyer.name}
                </h3>
                <p className="font-semibold mb-4">{lawyer.oab}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {lawyer.education}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
