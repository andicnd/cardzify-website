import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Palette, 
  Bell, 
  BarChart3, 
  Smartphone, 
  Zap, 
  TrendingUp
} from "lucide-react";
import CardTypeCarousel from "@/components/CardTypeCarousel";

export default function Features() {
  const features = [
    {
      title: "Personalizare completă a cardului",
      description:
        "Adaptează designul cardului digital pentru a se potrivi perfect cu brandul tău. Alege culorile, adaugă logo-ul și setează recompense unice care să-ți încânte clienții. Totul într-o interfață simplă și intuitivă.",
      icon: <Palette className="w-12 h-12 text-cardzify-coral" />,
    },
    {
      title: "Notificări Push inteligente",
      description:
        "Comunică direct cu clienții tăi prin notificări automate. Trimite mesaje de bun venit, oferte personalizate sau anunțuri de evenimente. Totul la momentul potrivit, direct pe dispozitivul lor.",
      icon: <Bell className="w-12 h-12 text-cardzify-coral" />,
    },
    {
      title: "Analize detaliate & CRM",
      description:
        "Urmărește comportamentul clienților în timp real. Află cine sunt cei mai fideli, ce achiziționează și când revin. Toate datele de care ai nevoie pentru a lua decizii inteligente de business.",
      icon: <BarChart3 className="w-12 h-12 text-cardzify-coral" />,
    },
    {
      title: "Integrare Apple & Google Wallet",
      description:
        "Clienții salvează cardul direct în telefon, fără aplicații suplimentare. Compatibil 100% cu Apple Wallet și Google Wallet pentru cea mai bună experiență utilizator.",
      icon: <Smartphone className="w-12 h-12 text-cardzify-coral" />,
    },
    {
      title: "QR Code pentru scanare rapidă",
      description:
        "Scanează cardul la fiecare achiziție folosind un simplu cod QR. Rapid, eficient și fără contact. Perfect pentru orice tip de afacere.",
      icon: <Zap className="w-12 h-12 text-cardzify-coral" />,
    },
    {
      title: "Rapoarte și statistici avansate",
      description:
        "Generează rapoarte detaliate despre programul tău de loialitate. Monitorizează creșterea, identifică tendințele și optimizează strategia pentru rezultate maxime.",
      icon: <TrendingUp className="w-12 h-12 text-cardzify-coral" />,
    },
  ];


  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-features">
              Funcționalități create pentru succesul tău
            </h2>
            <p className="text-lg text-gray-600" data-testid="text-features-description">
              Descoperă instrumentele puternice care te ajută să construiești relații durabile
              cu clienții.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 hover-elevate" data-testid={`feature-card-${idx}`}>
                <div className="text-cardzify-coral mb-4" data-testid={`icon-feature-${idx}`}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3" data-testid={`title-feature-${idx}`}>{feature.title}</h3>
                <p className="text-gray-600" data-testid={`description-feature-${idx}`}>{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-card-types">
              8 tipuri de carduri pentru orice afacere
            </h2>
            <p className="text-lg text-gray-600" data-testid="text-card-types-description">
              Alege tipul de card care se potrivește cel mai bine modelului tău de business.
            </p>
          </div>

          <CardTypeCarousel />

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-features-cta">
              Începe acum și transformă clienții în fani
            </h3>
            <p className="text-lg text-gray-600 mb-8" data-testid="text-features-cta">
              Crează primul tău card digital de loialitate în doar câteva minute.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cardzify-coral text-white w-full sm:w-auto"
                  data-testid="button-features-demo"
                >
                  Instalează card demo
                </Button>
              </Link>
              <Link href="/preturi">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  data-testid="button-features-pricing"
                >
                  Vezi planurile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
