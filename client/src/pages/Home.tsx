import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, Scissors, Pizza, ShoppingBag, Dumbbell, Wrench, Hotel, Paintbrush, Cloud, TrendingUp, BarChart, MessageCircle, Check, Wallet, Star, Percent } from "lucide-react";
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
      className="relative w-full max-w-md mx-auto aspect-[1.586] p-6 rounded-2xl shadow-2xl text-white flex flex-col justify-between transition-all duration-500"
      style={{ backgroundColor: data.color }}
      data-testid="card-display"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-xl" data-testid="text-card-business-name">{data.name}</h3>
          <p className="opacity-80 text-sm" data-testid="text-card-type">{typeInfo.name}</p>
        </div>
        <div className="text-white">{data.icon}</div>
      </div>

      <div className="flex-grow flex items-center justify-center py-4">
        {cardType === "stamps" && (
          <div className="grid grid-cols-5 gap-2">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center ${
                  i < 3 ? "bg-white/20" : ""
                }`}
              >
                {i < 3 && <Check className="w-6 h-6 text-white" />}
              </div>
            ))}
          </div>
        )}
        {cardType === "rewards" && (
          <div className="text-center">
            <p className="text-5xl font-bold">75</p>
            <p className="text-sm opacity-80 mt-1">puncte acumulate</p>
          </div>
        )}
        {cardType === "cashback" && (
          <div className="text-center">
            <p className="text-5xl font-bold">5%</p>
            <p className="text-sm opacity-80 mt-1">CASHBACK</p>
          </div>
        )}
        {cardType === "discount" && (
          <div className="text-center">
            <p className="text-6xl font-bold">20%</p>
            <p className="text-sm opacity-80 mt-1">DISCOUNT</p>
          </div>
        )}
        {cardType === "membership" && (
          <div className="text-center">
            <p className="text-3xl font-bold">VIP MEMBER</p>
            <p className="text-sm opacity-80 mt-2">Acces Premium</p>
          </div>
        )}
        {cardType === "coupon" && (
          <div className="text-center">
            <p className="text-4xl font-bold">50 RON</p>
            <p className="text-sm opacity-80 mt-2">CUPON</p>
          </div>
        )}
        {["multipass", "giftcard"].includes(cardType) && (
          <div className="text-center">
            <p className="text-2xl font-semibold">{typeInfo.name}</p>
          </div>
        )}
      </div>

      <div>
        <p className="text-sm opacity-80 mb-1">Recompensă:</p>
        <p className="font-semibold text-lg" data-testid="text-card-reward">{data.reward}</p>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-card-customization">
              Un card de loialitate modern, exact pe gustul afacerii tale.
            </h2>
            <p className="text-lg text-gray-600" data-testid="text-card-customization-description">
              Personalizează designul, stabilește recompensele și oferă clienților tăi o
              experiență digitală pe care o vor iubi. Fără aplicații de instalat,
              compatibil direct cu Apple și Google Wallet.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div className="mb-12 lg:mb-0">
              <div className="relative bg-gray-200/50 rounded-3xl p-8 max-w-sm mx-auto">
                <LoyaltyCard business={selectedBusiness} cardType={selectedCardType} />
              </div>
            </div>

            <div className="flex flex-col gap-6">
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

                <Button
                  className="w-full bg-cardzify-purple hover:bg-cardzify-purple/90 text-white mb-6"
                  data-testid="button-install-demo-card"
                >
                  Install demo card
                </Button>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
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
                      <p className="text-center text-sm text-gray-600 mt-2">Scan me</p>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 ml-4">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40'%3E%3Crect width='120' height='40' rx='5' fill='black'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EApple Wallet%3C/text%3E%3C/svg%3E"
                        alt="Add to Apple Wallet"
                        className="w-full"
                        data-testid="img-apple-wallet"
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40'%3E%3Crect width='120' height='40' rx='5' fill='white' stroke='%23ccc'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='12' fill='black' text-anchor='middle'%3EGoogle Wallet%3C/text%3E%3C/svg%3E"
                        alt="Add to Google Wallet"
                        className="w-full"
                        data-testid="img-google-wallet"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Use your phone's default camera to scan the QR-code and install your loyalty card
                  </p>
                </div>
              </div>

              <p className="text-lg font-semibold text-gray-700" data-testid="text-business-selector-label">Alege un tip de afacere:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(Object.keys(businessData) as BusinessType[]).map((business) => (
                  <button
                    key={business}
                    onClick={() => handleBusinessChange(business)}
                    className={`text-left p-4 border-2 rounded-lg hover:bg-gray-50 transition duration-300 hover-elevate ${
                      selectedBusiness === business
                        ? "border-cardzify-coral bg-red-50"
                        : "border-gray-200"
                    }`}
                    data-testid={`button-business-${business}`}
                  >
                    <h4 className="text-lg font-bold mb-1 text-gray-900 flex items-center gap-2" data-testid={`title-business-${business}`}>
                      <span className="text-cardzify-coral">
                        {businessData[business].icon}
                      </span>
                      {business === "cafenele" && "Cafenele"}
                      {business === "saloane" && "Saloane"}
                      {business === "restaurante" && "Restaurante"}
                      {business === "retail" && "Retail"}
                      {business === "fitness" && "Fitness"}
                      {business === "servicii" && "Servicii"}
                      {business === "hoteluri" && "Hoteluri"}
                      {business === "tatuaje" && "Tatuaje"}
                      {business === "vape" && "Vape Shops"}
                    </h4>
                    <p className="text-sm text-gray-600" data-testid={`description-business-${business}`}>
                      {businessData[business].description}
                    </p>
                  </button>
                ))}
              </div>
              <div className="text-center pt-2">
                <Link href="/functionalitati">
                  <span className="text-sm text-gray-600 hover:text-cardzify-coral transition cursor-pointer" data-testid="link-all-card-types">
                    ...și multe altele! Descoperă toate cele 8 tipologii de carduri.
                  </span>
                </Link>
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
                <Button
                  variant="outline"
                  className="flex items-center justify-center bg-black text-white hover:bg-gray-800 border-0"
                  data-testid="button-apple-wallet-2"
                >
                  <span className="text-2xl mr-2"></span> Adaugă în Apple Wallet
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
                  data-testid="button-google-wallet-2"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                    className="w-6 h-6 mr-2"
                    alt="Google Logo"
                  />
                  Adaugă în Google Wallet
                </Button>
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
                "De când folosim Cardzify, am observat o creștere de 30% a clienților
                recurenți. Este incredibil de simplu de folosit atât pentru noi, cât și
                pentru clienți."
              </p>
              <div>
                <p className="font-bold text-white" data-testid="text-testimonial-author-0">Ana Popescu</p>
                <p className="text-sm text-pink-300" data-testid="text-testimonial-role-0">Proprietar, The Coffee Bean</p>
              </div>
            </Card>
            <Card className="p-8 bg-[#372E4F] border-0" data-testid="testimonial-1">
              <p className="text-gray-300 mb-6 italic" data-testid="text-testimonial-quote-1">
                "Clientele mele iubesc cardul digital! Nu mai trebuie să-și facă griji că
                îl pierd. Funcția de notificări pentru oferte este un bonus extraordinar."
              </p>
              <div>
                <p className="font-bold text-white" data-testid="text-testimonial-author-1">Elena Ionescu</p>
                <p className="text-sm text-pink-300" data-testid="text-testimonial-role-1">Manager, Glamour Studio</p>
              </div>
            </Card>
            <Card className="p-8 bg-[#372E4F] border-0" data-testid="testimonial-2">
              <p className="text-gray-300 mb-6 italic" data-testid="text-testimonial-quote-2">
                "Platforma ne-a ajutat să înțelegem mai bine ce își doresc oaspeții noștri.
                Acum putem crea oferte mult mai relevante. Recomand!"
              </p>
              <div>
                <p className="font-bold text-white" data-testid="text-testimonial-author-2">Mihai Dinu</p>
                <p className="text-sm text-pink-300" data-testid="text-testimonial-role-2">Proprietar, Pizza Palace</p>
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
