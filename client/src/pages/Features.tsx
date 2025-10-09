import { Card } from "@/components/ui/card";
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
    },
    {
      name: "Card de Recompense",
      description: "Acumulează puncte în funcție de valoarea achiziției. Punctele pot fi schimbate pe recompense.",
      icon: <Star className="w-10 h-10 text-cardzify-coral" />,
    },
    {
      name: "Card Cashback",
      description: "Returnează un procent din valoarea achizițiilor, sub formă de puncte, direct pe cardul clientului.",
      icon: <Wallet className="w-10 h-10 text-cardzify-coral" />,
    },
    {
      name: "Card Discount",
      description: "Oferă reduceri permanente sau temporare clienților fideli.",
      icon: <Percent className="w-10 h-10 text-cardzify-coral" />,
    },
    {
      name: "Card de Membru",
      description: "Acces exclusiv pentru membrii programului tău de fidelitate.",
      icon: <Crown className="w-10 h-10 text-cardzify-coral" />,
    },
    {
      name: "Card Coupon",
      description: "Cupoane digitale care pot fi folosite o singură dată pentru a atrage clienți noi.",
      icon: <Ticket className="w-10 h-10 text-cardzify-coral" />,
    },
    {
      name: "Card Multipass",
      description: "Combină mai multe tipuri de carduri într-unul singur pentru flexibilitate maximă.",
      icon: <Target className="w-10 h-10 text-cardzify-coral" />,
    },
    {
      name: "Gift Card",
      description: "Card cadou digital pe care clienții îl pot oferi prietenilor și familiei.",
      icon: <Gift className="w-10 h-10 text-cardzify-coral" />,
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardTypes.map((cardType, idx) => (
              <Card key={idx} className="p-6 text-center hover-elevate" data-testid={`card-type-${idx}`}>
                <div className="text-cardzify-coral mb-3 flex justify-center" data-testid={`icon-card-type-${idx}`}>{cardType.icon}</div>
                <h3 className="font-bold mb-2" data-testid={`title-card-type-${idx}`}>{cardType.name}</h3>
                <p className="text-sm text-gray-600" data-testid={`description-card-type-${idx}`}>{cardType.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
