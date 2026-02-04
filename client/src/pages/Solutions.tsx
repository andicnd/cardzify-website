import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Scissors, Pizza, ShoppingBag, Dumbbell, Wrench, Hotel, Paintbrush, Cloud } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#ffffff", "#fff1f2", "#f0f9ff", "#f5f3ff", "#fff7ed", "#ffffff"]
  );

  return (
    <div className="animate-fadeIn relative">
      <motion.div
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        style={{ backgroundColor }}
      />

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6" data-testid="heading-solutions">
              Soluții adaptate <span className="text-cardzify-coral">industriei tale</span>
            </h1>
            <p className="text-xl text-gray-600" data-testid="text-solutions-description">
              Indiferent de tipul de afacere, avem soluția perfectă pentru a-ți fideliza clienții.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-5xl mx-auto">
            {(Object.keys(solutionsData) as Industry[]).map((industry) => (
              <Button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                variant={selectedIndustry === industry ? "default" : "outline"}
                className={`h-14 px-8 rounded-full text-lg transition-all ${selectedIndustry === industry
                    ? "bg-cardzify-purple text-white shadow-lg"
                    : "bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-white"
                  }`}
                data-testid={`button-industry-${industry}`}
              >
                {selectedIndustry === industry ? (
                  <span className="mr-3 scale-110">
                    {solutionsData[industry].icon}
                  </span>
                ) : (
                  <span className="mr-3 opacity-60">
                    {solutionsData[industry].icon}
                  </span>
                )}
                {solutionsData[industry].title.split(" ")[2]}
              </Button>
            ))}
          </div>

          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="p-8 lg:p-16 max-w-5xl mx-auto bg-white/80 backdrop-blur-lg border-white shadow-2xl rounded-[3rem] overflow-hidden relative" data-testid="solution-content">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cardzify-coral/5 rounded-full blur-3xl -mr-32 -mt-32" />

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex p-5 rounded-3xl bg-cardzify-coral/10 text-cardzify-coral mb-8 shadow-inner" data-testid="icon-solution">
                    {solutionsData[selectedIndustry].icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight" data-testid="title-solution">
                    {solutionsData[selectedIndustry].title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-10" data-testid="description-solution">
                    {solutionsData[selectedIndustry].description}
                  </p>
                </div>

                <div className="bg-gray-50/50 rounded-[2.5rem] p-10 border border-white">
                  <h4 className="text-2xl font-bold text-cardzify-purple mb-8" data-testid="title-benefits">Beneficii premium:</h4>
                  <div className="space-y-6">
                    {solutionsData[selectedIndustry].benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-4" data-testid={`benefit-item-${idx}`}>
                        <div className="bg-cardzify-coral text-white rounded-full p-1.5 mt-1 shadow-md" data-testid={`icon-benefit-check-${idx}`}>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-lg text-gray-700 font-medium" data-testid={`text-benefit-${idx}`}>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center max-w-4xl mx-auto mt-24">
            <div className="bg-cardzify-purple text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden text-center border-0">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cardzify-coral/20 rounded-full blur-3xl -mr-40 -mt-40" />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-extrabold mb-6" data-testid="heading-solutions-cta">
                  Gata de <span className="text-cardzify-coral">transformare?</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto" data-testid="text-solutions-cta">
                  Alege soluția dedicată industriei tale și începe să construiești o comunitate loială astăzi.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link href="/preturi">
                    <Button
                      className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 px-10 py-7 text-xl rounded-2xl shadow-xl w-full sm:w-auto"
                      data-testid="button-solutions-pricing"
                    >
                      Vezi prețurile
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-10 py-7 text-xl rounded-2xl w-full sm:w-auto"
                      data-testid="button-solutions-contact"
                    >
                      Contactează-ne
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
