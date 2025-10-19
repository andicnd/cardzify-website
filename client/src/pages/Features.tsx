import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Palette, 
  Bell, 
  BarChart3, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  Check, 
  Star, 
  Wallet, 
  Percent, 
  Crown, 
  Ticket, 
  Target, 
  Gift 
} from "lucide-react";

interface CardType {
  name: string;
  description: string;
  icon: React.ReactNode;
  mockupImage: string;
}

function CardTypesCarousel({ cardTypes }: { cardTypes: CardType[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const duplicatedCards = [...cardTypes, ...cardTypes];

  return (
    <div className="relative overflow-hidden" data-testid="card-types-carousel">
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden pb-4"
        style={{ scrollBehavior: 'auto' }}
        data-testid="carousel-scroll-container"
      >
        {duplicatedCards.map((cardType, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80"
            data-testid={`carousel-card-${idx}`}
          >
            <Card className="overflow-hidden hover-elevate h-full">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={cardType.mockupImage}
                  alt={cardType.name}
                  className="w-full h-full object-cover"
                  data-testid={`carousel-card-image-${idx}`}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-cardzify-coral" data-testid={`carousel-card-icon-${idx}`}>
                    {cardType.icon}
                  </div>
                  <h3 className="font-bold text-lg" data-testid={`carousel-card-title-${idx}`}>
                    {cardType.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600" data-testid={`carousel-card-description-${idx}`}>
                  {cardType.description}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

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

  const cardTypes = [
    {
      name: "Card cu Ștampile",
      description: "Clienții primesc o ștampilă la fiecare achiziție. La 10 ștampile, recompensa este activată.",
      icon: <Check className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: "https://placehold.co/400x250/B49272/white?text=Card+Stampile",
    },
    {
      name: "Card de Recompense",
      description: "Acumulează puncte în funcție de valoarea achiziției. Punctele pot fi schimbate pe recompense.",
      icon: <Star className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: "https://placehold.co/400x250/E68673/white?text=Card+Recompense",
    },
    {
      name: "Card Cashback",
      description: "Returnează un procent din valoarea achizițiilor, sub formă de puncte, direct pe cardul clientului.",
      icon: <Wallet className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: "https://placehold.co/400x250/7FA9C4/white?text=Card+Cashback",
    },
    {
      name: "Card Discount",
      description: "Oferă reduceri permanente sau temporare clienților fideli.",
      icon: <Percent className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: "https://placehold.co/400x250/D8A0A6/white?text=Card+Discount",
    },
    {
      name: "Card de Membru",
      description: "Acces exclusiv pentru membrii programului tău de fidelitate.",
      icon: <Crown className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: "https://placehold.co/400x250/8BA888/white?text=Card+Membru",
    },
    {
      name: "Card Coupon",
      description: "Cupoane digitale care pot fi folosite o singură dată pentru a atrage clienți noi.",
      icon: <Ticket className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: "https://placehold.co/400x250/D47B84/white?text=Card+Coupon",
    },
    {
      name: "Card Multipass",
      description: "Combină mai multe tipuri de carduri într-unul singur pentru flexibilitate maximă.",
      icon: <Target className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: "https://placehold.co/400x250/9B8FB0/white?text=Card+Multipass",
    },
    {
      name: "Gift Card",
      description: "Card cadou digital pe care clienții îl pot oferi prietenilor și familiei.",
      icon: <Gift className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: "https://placehold.co/400x250/A78295/white?text=Gift+Card",
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

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-card-types">
              8 tipuri de carduri pentru orice afacere
            </h2>
            <p className="text-lg text-gray-600" data-testid="text-card-types-description">
              Alege tipul de card care se potrivește cel mai bine modelului tău de business.
            </p>
          </div>

          <CardTypesCarousel cardTypes={cardTypes} />

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
                  className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 px-8 py-6 text-base w-full sm:w-auto"
                  data-testid="button-features-demo"
                >
                  Instalează card demo
                </Button>
              </Link>
              <Link href="/preturi">
                <Button
                  variant="outline"
                  className="border-cardzify-purple text-cardzify-purple hover:bg-cardzify-purple/10 px-8 py-6 text-base w-full sm:w-auto"
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
