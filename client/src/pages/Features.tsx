import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
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
  demoLink: string;
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
        className="flex gap-8 overflow-x-hidden pb-10 pt-4 px-4"
        style={{ scrollBehavior: 'auto' }}
        data-testid="carousel-scroll-container"
      >
        {duplicatedCards.map((cardType, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[400px]"
            data-testid={`carousel-card-${idx}`}
          >
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all h-full rounded-3xl">
              <div className="relative h-[250px] bg-gray-50/50 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={cardType.mockupImage}
                  alt={cardType.name}
                  className="w-full h-full object-contain drop-shadow-2xl scale-110"
                  data-testid={`carousel-card-image-${idx}`}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cardzify-coral/10 p-2 rounded-lg text-cardzify-coral" data-testid={`carousel-card-icon-${idx}`}>
                    {cardType.icon}
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900" data-testid={`carousel-card-title-${idx}`}>
                    {cardType.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6" data-testid={`carousel-card-description-${idx}`}>
                  {cardType.description}
                </p>
                <Link href="https://app.cardzify.pro/auth/register">
                  <Button className="w-full bg-cardzify-purple hover:bg-cardzify-purple/90 text-white rounded-xl py-6 font-bold flex items-center justify-center gap-2">
                    Începe gratuit
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#ffffff", "#fff1f2", "#f0f9ff", "#f5f3ff", "#fff7ed", "#ffffff"]
  );

  const features = [
    {
      title: "Personalizare completă a cardului",
      description:
        "Adaptează designul cardului digital pentru a se potrivi perfect cu brandul tău. Alege culorile, adaugă logo-ul și setează recompense unice care să-ți încânte clienții.",
      icon: <Palette className="w-12 h-12 text-cardzify-coral" />,
    },
    {
      title: "Notificări Push inteligente",
      description:
        "Comunică direct cu clienții tăi prin notificări automate. Trimite mesaje de bun venit, oferte personalizate sau anunțuri de evenimente direct pe dispozitivul lor.",
      icon: <Bell className="w-12 h-12 text-cardzify-coral" />,
    },
    {
      title: "Analize detaliate & CRM",
      description:
        "Urmărește comportamentul clienților în timp real. Află cine sunt cei mai fideli, ce achiziționează și când revin. Date pentru decizii inteligente.",
      icon: <BarChart3 className="w-12 h-12 text-cardzify-coral" />,
    },
    {
      title: "Integrare Apple & Google Wallet",
      description:
        "Clienții salvează cardul direct în telefon, fără aplicații suplimentare. Compatibil 100% cu Apple Wallet și Google Wallet pentru cea mai bună experiență.",
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
        "Generează rapoarte detaliate despre programul tău de loialitate. Monitorizează creșterea, identifică tendințele și optimizează strategia.",
      icon: <TrendingUp className="w-12 h-12 text-cardzify-coral" />,
    },
  ];

  const cardTypes = [
    {
      name: "Card cu Ștampile",
      description: "Clienții primesc o ștampilă la fiecare achiziție. La 10 ștampile, recompensa este activată.",
      icon: <Check className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: '/images/Full Card Mockups/card stampile.png',
      demoLink: "https://take.cards/jdgMt"
    },
    {
      name: "Card de Recompense",
      description: "Acumulează puncte în funcție de valoarea achiziției. Punctele pot fi schimbate pe recompense.",
      icon: <Star className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: '/images/Full Card Mockups/card recompense.png',
      demoLink: "https://take.cards/9gLNs"
    },
    {
      name: "Card Cashback",
      description: "Returnează un procent din valoarea achizițiilor, sub formă de puncte, direct pe cardul clientului.",
      icon: <Wallet className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: '/images/Full Card Mockups/card cashback.png',
      demoLink: "https://take.cards/C9wXb"
    },
    {
      name: "Card Discount",
      description: "Oferă reduceri permanente sau temporare clienților fideli.",
      icon: <Percent className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: '/images/Full Card Mockups/card reducere.png',
      demoLink: "https://take.cards/ohdze"
    },
    {
      name: "Card de Membru",
      description: "Acces exclusiv pentru membrii programului tău de fidelitate.",
      icon: <Crown className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: '/images/Full Card Mockups/card de membru.png',
      demoLink: "https://take.cards/KPu9t"
    },
    {
      name: "Card Coupon",
      description: "Cupoane digitale care pot fi folosite o singură dată pentru a atrage clienți noi.",
      icon: <Ticket className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: '/images/Full Card Mockups/coupon.png',
      demoLink: "https://take.cards/l5Eou"
    },
    {
      name: "Card Multipass",
      description: "Ideal pentru servicii preplătite (ex. 10 intrări la sală) sau abonamente limitate.",
      icon: <Target className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: '/images/Full Card Mockups/card multipass.png',
      demoLink: "https://take.cards/j6PLp"
    },
    {
      name: "Gift Card",
      description: "Card cadou digital pe care clienții îl pot oferi prietenilor și familiei.",
      icon: <Gift className="w-10 h-10 text-cardzify-coral" />,
      mockupImage: '/images/Full Card Mockups/gift card.png',
      demoLink: "https://take.cards/ncJhV"
    },
  ];

  return (
    <div className="animate-fadeIn relative">
      <motion.div
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        style={{ backgroundColor }}
      />

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6" data-testid="heading-features">
              Funcționalități create pentru <span className="text-cardzify-coral">succesul tău</span>
            </h1>
            <p className="text-xl text-gray-600" data-testid="text-features-description">
              Descoperă instrumentele puternice care te ajută să construiești relații durabile
              cu clienții tăi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 bg-white/60 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all hover:-translate-y-1" data-testid={`feature-card-${idx}`}>
                <div className="bg-cardzify-coral/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6" data-testid={`icon-feature-${idx}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" data-testid={`title-feature-${idx}`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed" data-testid={`description-feature-${idx}`}>{feature.description}</p>
              </Card>
            ))}
          </div>

          <div id="carousel-section" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6" data-testid="heading-card-types">
              8 tipuri de carduri <br /> pentru <span className="text-cardzify-purple">orice afacere</span>
            </h2>
            <p className="text-lg text-gray-600" data-testid="text-card-types-description">
              Alege tipul de card care se potrivește cel mai bine modelului tău de business.
            </p>
          </div>

          <div className="mb-20">
            <CardTypesCarousel cardTypes={cardTypes} />
          </div>

          {/* CTA Section */}
          <Card className="bg-cardzify-purple rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden text-white border-0 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cardzify-coral/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-features-cta">
                Începe acum și transformă clienții în fani
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto" data-testid="text-features-cta">
                Creează primul tău card digital de loialitate în doar câteva minute și oferă-le clienților o experiență modernă.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="#carousel-section">
                  <Button
                    className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 px-10 py-7 text-xl shadow-lg w-full sm:w-auto rounded-xl"
                    data-testid="button-features-demo"
                  >
                    Instalează card demo
                  </Button>
                </Link>
                <Link href="/preturi">
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-10 py-7 text-xl w-full sm:w-auto rounded-xl"
                    data-testid="button-features-pricing"
                  >
                    Vezi planurile
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
