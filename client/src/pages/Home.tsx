import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, Scissors, Pizza, ShoppingBag, Dumbbell, Wrench, Hotel, Paintbrush, Cloud, TrendingUp, BarChart, MessageCircle, Check, Wallet, Star, Percent, Apple } from "lucide-react";
import { Link } from "wouter";

type CardType = "stamps" | "rewards" | "cashback" | "discount" | "membership" | "coupon" | "multipass" | "giftcard";
type BusinessType = "cafenele" | "saloane" | "restaurante" | "retail" | "fitness" | "servicii" | "hoteluri" | "tatuaje" | "vape";

const cardTypes: Record<CardType, { name: string; icon: React.ReactNode }> = {
  stamps: { name: "Card cu Ștampile", icon: <Check className="w-8 h-8" /> },
  rewards: { name: "Card de Recompense", icon: <Star className="w-8 h-8" /> },
  cashback: { name: "Card Cashback", icon: <Wallet className="w-8 h-8" /> },
  discount: { name: "Card Discount", icon: <Percent className="w-8 h-8" /> },
  membership: { name: "Card de Membru", icon: <Check className="w-8 h-8" /> },
  coupon: { name: "Card Coupon", icon: <Check className="w-8 h-8" /> },
  multipass: { name: "Card Multipass", icon: <Check className="w-8 h-8" /> },
  giftcard: { name: "Gift Card", icon: <Check className="w-8 h-8" /> },
};

const businessData: Record<BusinessType, { name: string; type: CardType; color: string; icon: React.ReactNode; reward: string; description: string }> = {
  cafenele: {
    name: "The Coffee Bean",
    type: "stamps",
    color: "#B49272",
    icon: <Coffee className="w-6 h-6" />,
    reward: "A 10-a cafea gratuită",
    description: "Perfect pentru a recompensa clienții fideli cu băuturi gratuite."
  },
  saloane: {
    name: "Glamour Studio",
    type: "discount",
    color: "#D8A0A6",
    icon: <Scissors className="w-6 h-6" />,
    reward: "20% discount la al 5-lea serviciu",
    description: "Oferă discounturi sau servicii bonus pentru a crește retenția."
  },
  restaurante: {
    name: "Pizza Palace",
    type: "rewards",
    color: "#E68673",
    icon: <Pizza className="w-6 h-6" />,
    reward: "Pizza gratuită la 100 puncte",
    description: "Atrage clienți noi cu oferte speciale și recompensează-i pe cei loiali."
  },
  retail: {
    name: "Fashion Store",
    type: "rewards",
    color: "#A78295",
    icon: <ShoppingBag className="w-6 h-6" />,
    reward: "Discount 15% la 500 puncte",
    description: "Construiește loialitate pe termen lung cu puncte pentru fiecare achiziție."
  },
  fitness: {
    name: "Power Gym",
    type: "membership",
    color: "#8BA888",
    icon: <Dumbbell className="w-6 h-6" />,
    reward: "Acces VIP la clase premium",
    description: "Motivează membrii cu beneficii exclusive și recompense pentru obiective."
  },
  servicii: {
    name: "Pro Services",
    type: "discount",
    color: "#9B8FB0",
    icon: <Wrench className="w-6 h-6" />,
    reward: "10% discount la servicii recurente",
    description: "Păstrează clienții aproape cu discount-uri pentru contracte pe termen lung."
  },
  hoteluri: {
    name: "Grand Hotel",
    type: "rewards",
    color: "#C9A66B",
    icon: <Hotel className="w-6 h-6" />,
    reward: "Noapte gratuită la 10 sejururi",
    description: "Crește rezervările directe cu puncte pentru fiecare sejur."
  },
  tatuaje: {
    name: "Ink Studio",
    type: "coupon",
    color: "#D47B84",
    icon: <Paintbrush className="w-6 h-6" />,
    reward: "Cupon 50 RON pentru prima sesiune",
    description: "Atrage clienți noi cu cupoane pentru prima vizită."
  },
  vape: {
    name: "Vape Shop",
    type: "cashback",
    color: "#7FA9C4",
    icon: <Cloud className="w-6 h-6" />,
    reward: "5% cashback la fiecare comandă",
    description: "Fidelizează clienții cu bani înapoi la fiecare achiziție."
  },
};

function LoyaltyCard({ business, cardType }: { business: BusinessType; cardType: CardType }) {
  const data = businessData[business];
  const typeInfo = cardTypes[cardType];

  return (
    <div
      className="relative w-full aspect-[1.586] p-4 rounded-xl shadow-2xl text-white flex flex-col justify-between transition-all duration-500"
      style={{ backgroundColor: data.color }}
      data-testid="card-display"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg" data-testid="text-card-business-name">{data.name}</h3>
          <p className="opacity-80 text-xs" data-testid="text-card-type">{typeInfo.name}</p>
        </div>
        <div className="text-white">{data.icon}</div>
      </div>

      <div className="flex-grow flex items-center justify-center py-2">
        {cardType === "stamps" && (
          <div className="grid grid-cols-5 gap-1">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center ${
                  i < 3 ? "bg-white/20" : ""
                }`}
              >
                {i < 3 && <Check className="w-5 h-5 text-white" />}
              </div>
            ))}
          </div>
        )}
        {cardType === "rewards" && (
          <div className="text-center">
            <p className="text-4xl font-bold">75</p>
            <p className="text-xs opacity-80 mt-1">puncte acumulate</p>
          </div>
        )}
        {cardType === "cashback" && (
          <div className="text-center">
            <p className="text-4xl font-bold">5%</p>
            <p className="text-xs opacity-80 mt-1">CASHBACK</p>
          </div>
        )}
        {cardType === "discount" && (
          <div className="text-center">
            <p className="text-5xl font-bold">20%</p>
            <p className="text-xs opacity-80 mt-1">DISCOUNT</p>
          </div>
        )}
        {cardType === "membership" && (
          <div className="text-center">
            <p className="text-2xl font-bold">VIP MEMBER</p>
            <p className="text-xs opacity-80 mt-1">Acces Premium</p>
          </div>
        )}
        {cardType === "coupon" && (
          <div className="text-center">
            <p className="text-3xl font-bold">50 RON</p>
            <p className="text-xs opacity-80 mt-1">CUPON</p>
          </div>
        )}
        {["multipass", "giftcard"].includes(cardType) && (
          <div className="text-center">
            <p className="text-2xl font-semibold">{typeInfo.name}</p>
          </div>
        )}
      </div>

      <div>
        <p className="text-xs opacity-80 mb-1">Recompensă:</p>
        <p className="font-semibold text-sm" data-testid="text-card-reward">{data.reward}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType>("cafenele");
  const [selectedCardType, setSelectedCardType] = useState<CardType>("stamps");

  const handleBusinessChange = (business: BusinessType) => {
    setSelectedBusiness(business);
    setSelectedCardType(businessData[business].type);
  };

  return (
    <div className="animate-fadeIn">
      <section className="pt-12 pb-20 md:pt-20 md:pb-28 text-center bg-cardzify-light bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:20px_20px]">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4" data-testid="heading-hero">
            Transformă vizitatorii în{" "}
            <span className="text-cardzify-coral">clienți fideli.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8" data-testid="text-hero-description">
            Creează carduri de loialitate digitale în câteva minute. Adu-ți clienții
            înapoi, înțelege-le preferințele și crește-ți afacerea cu Cardzify. Simplu,
            digital, eficient.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/preturi">
              <Button
                className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 transition-all hover:-translate-y-0.5 shadow-lg px-8 py-6 text-lg w-full sm:w-auto"
                data-testid="button-vezi-preturi"
              >
                Vezi prețurile
              </Button>
            </Link>
            <Link href="/functionalitati">
              <Button
                variant="outline"
                className="bg-white text-cardzify-purple border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg w-full sm:w-auto"
                data-testid="button-functionalitati"
              >
                Descoperă funcționalități
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-card-customization">
              Un card de loialitate modern, exact pe gustul afacerii tale.
            </h2>
            <p className="text-lg text-gray-600" data-testid="text-card-customization-description">
              Personalizează designul, stabilește recompensele și oferă clienților tăi o
              experiență digitală pe care o vor iubi. Fără aplicații de instalat,
              compatibil direct cu Apple și Google Wallet.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg font-semibold text-gray-700 mb-6 text-center" data-testid="text-business-selector-label">Alege un tip de afacere:</p>
            <div className="overflow-x-auto pb-4 scrollbar-thin">
              <div className="flex justify-center gap-3 min-w-max px-4">
                {(Object.keys(businessData) as BusinessType[]).map((business) => (
                  <button
                    key={business}
                    onClick={() => handleBusinessChange(business)}
                    className={`flex items-center gap-2 px-4 py-2 border-2 rounded-full hover:bg-gray-50 transition duration-300 hover-elevate whitespace-nowrap ${
                      selectedBusiness === business
                        ? "border-cardzify-coral bg-cardzify-coral/10"
                        : "border-gray-200"
                    }`}
                    data-testid={`button-business-${business}`}
                  >
                    <span className="text-cardzify-coral">
                      {businessData[business].icon}
                    </span>
                    <span className="font-medium text-gray-900">
                      {business === "cafenele" && "Cafenele"}
                      {business === "saloane" && "Saloane"}
                      {business === "restaurante" && "Restaurante"}
                      {business === "retail" && "Retail"}
                      {business === "fitness" && "Fitness"}
                      {business === "servicii" && "Servicii"}
                      {business === "hoteluri" && "Hoteluri"}
                      {business === "tatuaje" && "Tatuaje"}
                      {business === "vape" && "Vape Shops"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div className="mb-12 lg:mb-0" data-testid="phone-mockup-container">
              <div className="relative max-w-xs mx-auto">
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl" data-testid="phone-mockup-frame">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
                  <div className="bg-white rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/16' }}>
                    <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 p-4 flex items-center justify-center">
                      <div className="w-full">
                        <LoyaltyCard business={selectedBusiness} cardType={selectedCardType} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6" data-testid="card-details-panel">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl text-white">
                    {cardTypes[selectedCardType].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900" data-testid="text-selected-card-type">
                      {cardTypes[selectedCardType].name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {businessData[selectedBusiness].description}
                    </p>
                  </div>
                </div>

                <Link href="/contact">
                  <Button
                    className="w-full bg-cardzify-purple hover:bg-cardzify-purple/90 text-white"
                    data-testid="button-install-demo-card"
                  >
                    Instalează card demo
                  </Button>
                </Link>
                
                <Link href="/functionalitati">
                  <Button
                    variant="outline"
                    className="w-full mt-3 mb-6 border-cardzify-coral text-cardzify-coral hover:bg-cardzify-coral/10"
                    data-testid="button-discover-cards"
                  >
                    Descoperă alte carduri
                  </Button>
                </Link>

                <div className="border-t pt-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center mb-2">
                        <svg className="w-20 h-20" viewBox="0 0 100 100">
                          <rect width="100" height="100" fill="white"/>
                          <rect x="10" y="10" width="10" height="10" fill="black"/>
                          <rect x="30" y="10" width="10" height="10" fill="black"/>
                          <rect x="50" y="10" width="10" height="10" fill="black"/>
                          <rect x="70" y="10" width="10" height="10" fill="black"/>
                          <rect x="10" y="30" width="10" height="10" fill="black"/>
                          <rect x="50" y="30" width="10" height="10" fill="black"/>
                          <rect x="70" y="30" width="10" height="10" fill="black"/>
                          <rect x="10" y="50" width="10" height="10" fill="black"/>
                          <rect x="30" y="50" width="10" height="10" fill="black"/>
                          <rect x="50" y="50" width="10" height="10" fill="black"/>
                          <rect x="10" y="70" width="10" height="10" fill="black"/>
                          <rect x="50" y="70" width="10" height="10" fill="black"/>
                          <rect x="70" y="70" width="10" height="10" fill="black"/>
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Scan QR</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button 
                        className="flex items-center justify-center gap-2 bg-black dark:bg-black text-white hover:bg-gray-800 dark:hover:bg-gray-800 h-auto py-2 px-3" 
                        data-testid="button-apple-wallet"
                      >
                        <Apple className="w-4 h-4" aria-hidden="true" data-testid="icon-apple" />
                        <span className="text-xs font-medium" data-testid="text-apple-wallet">Apple Wallet</span>
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex items-center justify-center gap-2 bg-white dark:bg-gray-950 h-auto py-2 px-3" 
                        data-testid="button-google-wallet"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-testid="icon-google">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-xs font-medium" data-testid="text-google-wallet">Google Wallet</span>
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center" data-testid="text-wallet-instruction">
                    Folosește camera telefonului pentru a scana codul QR și a instala cardul de loialitate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-benefits-section">
              Mai mult decât un card. Un partener pentru afacerea ta.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8" data-testid="benefit-card-0">
              <div className="text-cardzify-coral mb-4" data-testid="icon-benefit-0">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2" data-testid="title-benefit-0">Adu-ți clienții înapoi, mai des.</h3>
              <p className="text-gray-600" data-testid="description-benefit-0">
                Motivează clienții să revină, trimițându-le oferte personalizate și
                notificări automate direct pe telefon, exact atunci când contează.
              </p>
            </Card>
            <Card className="p-8" data-testid="benefit-card-1">
              <div className="text-cardzify-coral mb-4" data-testid="icon-benefit-1">
                <BarChart className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2" data-testid="title-benefit-1">
                Înțelege ce își doresc clienții tăi.
              </h3>
              <p className="text-gray-600" data-testid="description-benefit-1">
                Acumulează date valoroase la fiecare scanare. Află cine sunt clienții tăi
                fideli, cât de des cumpără și ce produse preferă.
              </p>
            </Card>
            <Card className="p-8" data-testid="benefit-card-2">
              <div className="text-cardzify-coral mb-4" data-testid="icon-benefit-2">
                <MessageCircle className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2" data-testid="title-benefit-2">
                Construiește relații, în mod automat.
              </h3>
              <p className="text-gray-600" data-testid="description-benefit-2">
                De la mesaje de "Bun venit" până la oferte de ziua lor, Cardzify comunică
                automat cu clienții tăi, menținând o relație puternică.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-steps-section">
              Gata de utilizare în 3 pași simpli
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="text-center p-6" data-testid="step-1">
                <div className="flex items-center justify-center bg-cardzify-coral/20 text-cardzify-coral w-16 h-16 rounded-full mx-auto mb-4 text-2xl font-bold" data-testid="badge-step-1">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2" data-testid="title-step-1">Personalizează</h3>
                <p className="text-gray-600" data-testid="description-step-1">
                  Alege culorile, adaugă logo-ul și setează recompensele. Gata în mai
                  puțin de 5 minute.
                </p>
              </div>
              <div className="text-center p-6" data-testid="step-2">
                <div className="flex items-center justify-center bg-cardzify-coral/20 text-cardzify-coral w-16 h-16 rounded-full mx-auto mb-4 text-2xl font-bold" data-testid="badge-step-2">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2" data-testid="title-step-2">Distribuie</h3>
                <p className="text-gray-600" data-testid="description-step-2">
                  Clienții scanează un cod QR și salvează cardul în telefon. Fără aplicații
                  de descărcat.
                </p>
              </div>
              <div className="text-center p-6" data-testid="step-3">
                <div className="flex items-center justify-center bg-cardzify-coral/20 text-cardzify-coral w-16 h-16 rounded-full mx-auto mb-4 text-2xl font-bold" data-testid="badge-step-3">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2" data-testid="title-step-3">Fidelizează</h3>
                <p className="text-gray-600" data-testid="description-step-3">
                  Scanează cardul la fiecare achiziție, trimite oferte și urmărește cum
                  afacerea ta crește.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-last">
              <div className="relative w-full h-96">
                <div className="absolute w-72 rounded-xl shadow-2xl transform rotate-6 top-0 left-1/4 lg:left-28 transition-transform hover:scale-105 bg-cardzify-tan p-6 text-white">
                  <p className="font-bold text-xl">Card Cafenea</p>
                </div>
                <div className="absolute w-72 rounded-xl shadow-2xl transform -rotate-8 top-24 left-0 lg:left-4 z-10 transition-transform hover:scale-105 bg-pink-300 p-6 text-white">
                  <p className="font-bold text-xl">Card Salon</p>
                </div>
                <div className="absolute w-72 rounded-xl shadow-2xl transform rotate-3 top-48 left-1/3 lg:left-36 transition-transform hover:scale-105 bg-orange-400 p-6 text-white">
                  <p className="font-bold text-xl">Card Restaurant</p>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="heading-wallet-section">
                Direct în telefon, fără aplicații.
              </h2>
              <p className="text-lg text-gray-600 mb-8" data-testid="text-wallet-description">
                Clienții salvează cardul direct în Apple Wallet sau Google Wallet. Fără
                plastic, fără aplicații de instalat, cardul este mereu la îndemâna lor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/preturi">
                  <Button
                    className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 px-8 py-6 text-base w-full sm:w-auto"
                    data-testid="button-signup-cta"
                  >
                    Începe gratuit
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cardzify-purple text-cardzify-purple hover:bg-cardzify-purple/10 px-8 py-6 text-base w-full sm:w-auto"
                    data-testid="button-demo-card-cta"
                  >
                    Instalează card demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cardzify-purple text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-testimonials">Ce spun clienții noștri</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-[#372E4F] border-0" data-testid="testimonial-0">
              <p className="text-gray-300 mb-6 italic" data-testid="text-testimonial-quote-0">
                "Cardzify ne-a ajutat să comunicăm mai eficient cu clienții noștri folosind notificările push. Notificările sunt gratuite și putem informa clienții despre ofertele noastre în timp real. Recomand cu Încredere!"
              </p>
              <div>
                <p className="font-bold text-white" data-testid="text-testimonial-author-0">Radu Giurea</p>
                <p className="text-sm text-pink-300" data-testid="text-testimonial-role-0">Proprietar, Gyros&Doner Constanța</p>
              </div>
            </Card>
            <Card className="p-8 bg-[#372E4F] border-0" data-testid="testimonial-1">
              <p className="text-gray-300 mb-6 italic" data-testid="text-testimonial-quote-1">
                "Clientele mele iubesc cardul digital! Nu mai trebuie să-și facă griji că
                îl pierd. Funcția de notificări pentru oferte este un bonus extraordinar."
              </p>
              <div>
                <p className="font-bold text-white" data-testid="text-testimonial-author-1">Ana Solomon </p>
                <p className="text-sm text-pink-300" data-testid="text-testimonial-role-1">Eyelash technician, Eyelash Attitude</p>
              </div>
            </Card>
            <Card className="p-8 bg-[#372E4F] border-0" data-testid="testimonial-2">
              <p className="text-gray-300 mb-6 italic" data-testid="text-testimonial-quote-2">
                "Platforma ne-a ajutat să înțelegem mai bine ce își doresc oaspeții noștri.
                Acum putem crea oferte mult mai relevante. Recomand!"
              </p>
              <div>
                <p className="font-bold text-white" data-testid="text-testimonial-author-2">Delia Bobeică</p>
                <p className="text-sm text-pink-300" data-testid="text-testimonial-role-2">Proprietar, Atelier DareDesign</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-cta">
            Gata să-ți transformi afacerea?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8" data-testid="text-cta-description">
            Începe să construiești un program de loialitate pe care clienții tăi îl vor
            iubi. Alege planul potrivit pentru tine.
          </p>
          <Link href="/preturi">
            <Button
              className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 transition-all hover:-translate-y-0.5 shadow-lg px-8 py-6 text-lg"
              data-testid="button-vezi-planuri"
            >
              Vezi planurile și prețurile
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
