import { Card, CardContent } from "../ui/card";
import { TitleSection } from "../ui/title-section";
import { areas } from "./areas-data";
import "./index.css";

export function ThirdSection() {
  return (
    <section id="areas-atuacao">
      <div className="text-gold-100 font-montserrat flex flex-col items-center justify-center px-8 py-40">
        <TitleSection title="ÁREAS DE ATUAÇÃO" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area, index) => (
            <Card key={index} className="area-card">
              <CardContent>
                <div>
                  <h3>{area.title}</h3>
                  <ul>
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
