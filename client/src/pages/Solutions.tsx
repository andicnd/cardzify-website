import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Scissors, Pizza, ShoppingBag, Dumbbell, Wrench, Hotel, Paintbrush, Cloud } from "lucide-react";
import { Link } from "wouter";

type Industry = "cafenele" | "saloane" | "restaurante" | "retail" | "fitness" | "servicii" | "hoteluri" | "tatuaje" | "vape";

const solutionsData: Record<Industry, {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}> = {
  cafenele: {
    title: "Soluții pentru Cafenele & Coffee Shops",
    description: "Transformă vizitatorii ocazionali în clienți fideli cu un program de loialitate personalizat pentru cafeneaua ta.",
    benefits: [
      "Card cu ștampile pentru cafeaua gratuită la a 10-a achiziție",
      "Notificări pentru oferte speciale de dimineață",
      "Recompense pentru aducerea de prieteni",
      "Statistici despre băuturile preferate ale clienților",
    ],
    icon: <Coffee className="w-16 h-16 text-cardzify-coral" />,
  },
  saloane: {
    title: "Soluții pentru Saloane de Înfrumusețare",
    description: "Crește retenția clienților și rezervările cu un card de loialitate elegant și ușor de folosit.",
    benefits: [
      "Card cu discount progresiv pentru servicii",
      "Notificări pentru programări și oferte personalizate",
      "Recompense pentru recenzii și recomandări",
      "Gestionarea automată a punctelor de loialitate",
    ],
    icon: <Scissors className="w-16 h-16 text-cardzify-coral" />,
  },
  restaurante: {
    title: "Soluții pentru Restaurante",
    description: "Atrage clienți noi și păstrează-i pe cei existenți cu un program de loialitate care funcționează.",
    benefits: [
      "Card cu puncte bazat pe valoarea comenzii",
      "Recompense pentru zilele de naștere",
      "Oferte speciale pentru evenimente și sărbători",
      "Analize detaliate despre preferințele culinare",
    ],
    icon: <Pizza className="w-16 h-16 text-cardzify-coral" />,
  },
  retail: {
    title: "Soluții pentru Magazine Retail",
    description: "Optimizează experiența de cumpărături și construiește loialitate pe termen lung.",
    benefits: [
      "Card cu puncte pentru fiecare achiziție",
      "Acces early-bird la reduceri și colecții noi",
      "Program de referral pentru clienți fideli",
      "Segmentare avansată a clienților",
    ],
    icon: <ShoppingBag className="w-16 h-16 text-cardzify-coral" />,
  },
  fitness: {
    title: "Soluții pentru Săli de Fitness & Wellness",
    description: "Motivează membrii să revină și să-și atingă obiectivele cu un sistem de recompense eficient.",
    benefits: [
      "Card de membru cu beneficii exclusive",
      "Puncte pentru participare la clase",
      "Recompense pentru atingerea obiectivelor",
      "Notificări pentru clasele favorite",
    ],
    icon: <Dumbbell className="w-16 h-16 text-cardzify-coral" />,
  },
  servicii: {
    title: "Soluții pentru Servicii Profesionale",
    description: "Păstrează clienții aproape și construiește relații de lungă durată.",
    benefits: [
      "Card cu discount la servicii recurente",
      "Sistem de programări integrate",
      "Recompense pentru contracte pe termen lung",
      "CRM complet pentru gestionarea clienților",
    ],
    icon: <Wrench className="w-16 h-16 text-cardzify-coral" />,
  },
  hoteluri: {
    title: "Soluții pentru Hoteluri & Pensiuni",
    description: "Crește loialitatea oaspeților și rezervările directe cu un program de recompense personalizat.",
    benefits: [
      "Card de fidelitate pentru cazări recurente",
      "Discount progresiv pentru sejururi multiple",
      "Upgrade gratuit la cameră pentru clienți fideli",
      "Oferte exclusive pentru evenimente și sărbători",
    ],
    icon: <Hotel className="w-16 h-16 text-cardzify-coral" />,
  },
  tatuaje: {
    title: "Soluții pentru Studiouri de Tatuaje",
    description: "Construiește o comunitate de clienți fideli și încurajează recomandările.",
    benefits: [
      "Card cu discount pentru sesiuni viitoare",
      "Puncte pentru postare pe social media",
      "Prioritate la programări pentru clienți fideli",
      "Recompense pentru recomandări",
    ],
    icon: <Paintbrush className="w-16 h-16 text-cardzify-coral" />,
  },
  vape: {
    title: "Soluții pentru Vape Shops",
    description: "Fidelizează clienții și crește vânzările cu un sistem de recompense atractiv.",
    benefits: [
      "Card cu puncte pentru fiecare achiziție",
      "Oferte exclusive pentru produse noi",
      "Discount la accesorii pentru clienți fideli",
      "Program de cashback pentru comenzi mari",
    ],
    icon: <Cloud className="w-16 h-16 text-cardzify-coral" />,
  },
};

export default function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("cafenele");

  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-solutions">
              Soluții adaptate industriei tale
            </h2>
            <p className="text-lg text-gray-600" data-testid="text-solutions-description">
              Indiferent de tipul de afacere, avem soluția perfectă pentru tine.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.keys(solutionsData) as Industry[]).map((industry) => (
              <Button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                variant={selectedIndustry === industry ? "default" : "outline"}
                className={selectedIndustry === industry ? "bg-cardzify-coral hover:bg-cardzify-coral/90" : ""}
                data-testid={`button-industry-${industry}`}
              >
                <span className="mr-2">{solutionsData[industry].icon}</span>
                {solutionsData[industry].title.split(" ")[2]}
              </Button>
            ))}
          </div>

          <Card className="p-8 lg:p-12 max-w-4xl mx-auto" data-testid="solution-content">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-cardzify-coral" data-testid="icon-solution">{solutionsData[selectedIndustry].icon}</div>
              <h3 className="text-3xl font-bold text-gray-900" data-testid="title-solution">
                {solutionsData[selectedIndustry].title}
              </h3>
            </div>

            <p className="text-lg text-gray-600 mb-8" data-testid="description-solution">
              {solutionsData[selectedIndustry].description}
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4" data-testid="title-benefits">Beneficii cheie:</h4>
              {solutionsData[selectedIndustry].benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3" data-testid={`benefit-item-${idx}`}>
                  <div className="bg-cardzify-coral/10 text-cardzify-coral rounded-full p-1 mt-0.5" data-testid={`icon-benefit-check-${idx}`}>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700" data-testid={`text-benefit-${idx}`}>{benefit}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-solutions-cta">
              Gata să îți transformi clienții în fani?
            </h3>
            <p className="text-lg text-gray-600 mb-8" data-testid="text-solutions-cta">
              Alege planul potrivit pentru afacerea ta și începe să construiești loialitate astăzi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/preturi">
                <Button
                  className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 px-8 py-6 text-base w-full sm:w-auto"
                  data-testid="button-solutions-pricing"
                >
                  Vezi prețurile
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-cardzify-purple text-cardzify-purple hover:bg-cardzify-purple/10 px-8 py-6 text-base w-full sm:w-auto"
                  data-testid="button-solutions-contact"
                >
                  Contactează-ne
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
