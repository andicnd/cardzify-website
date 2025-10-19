import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { 
  Check, 
  Star, 
  Wallet, 
  Percent, 
  Crown, 
  Ticket, 
  Target, 
  Gift 
} from "lucide-react";

type CardType = {
  name: string;
  category: string;
  description: string;
  icon: JSX.Element;
  example: {
    brandName: string;
    primaryColor: string;
    secondaryColor: string;
    content: JSX.Element;
  };
};

const cardTypes: CardType[] = [
  {
    name: "Card cu Ștampile",
    category: "Retention",
    description: "Clienții primesc o ștampilă la fiecare achiziție. La 10 ștampile, recompensa este activată.",
    icon: <Check className="w-10 h-10 text-cardzify-coral" />,
    example: {
      brandName: "Cafeneaua Boomerang",
      primaryColor: "#8B4513",
      secondaryColor: "#D2691E",
      content: (
        <div className="space-y-3">
          <div className="bg-amber-100 p-3 rounded">
            <div className="text-xs text-amber-800 mb-1">PÂNĂ LA URMĂTOAREA RECOMPENSĂ</div>
            <div className="text-2xl font-bold text-amber-900">7 ștampile</div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className={`aspect-square rounded-full border-2 flex items-center justify-center ${
                  i < 3 
                    ? 'bg-amber-800 border-amber-800' 
                    : 'bg-white border-amber-300'
                }`}
              >
                {i < 3 && <Check className="w-4 h-4 text-white" />}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-amber-800">
            <span>PÂNĂ LA URMĂTOAREA RECOMPENSĂ</span>
            <span>RECOMPENSE DISPONIBILE</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-amber-900">
            <span>7 ștampile</span>
            <span>1</span>
          </div>
        </div>
      )
    }
  },
  {
    name: "Card de Recompense",
    category: "Retention",
    description: "Acumulează puncte în funcție de valoarea achiziției. Punctele pot fi schimbate pe recompense.",
    icon: <Star className="w-10 h-10 text-cardzify-coral" />,
    example: {
      brandName: "Restaurantul Boomerang",
      primaryColor: "#DC2626",
      secondaryColor: "#FCA5A5",
      content: (
        <div className="space-y-3">
          <div className="bg-red-50 p-3 rounded">
            <div className="text-xs text-red-600 mb-1">SOLD</div>
            <div className="text-3xl font-bold text-red-700">156 puncte</div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded text-white">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              <span className="text-sm font-semibold">COLECTEAZĂ PUNCTE</span>
            </div>
            <div className="text-xs">PRIMEȘTI RECOMPENSE</div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>RECOMPENSĂ DISPONIBILĂ</span>
            <span>VALABILĂ PÂNĂ</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900">
            <span>15% OFF</span>
            <span>31/12/25</span>
          </div>
        </div>
      )
    }
  },
  {
    name: "Gift Card",
    category: "Acquisition",
    description: "Card cadou digital pe care clienții îl pot oferi prietenilor și familiei.",
    icon: <Gift className="w-10 h-10 text-cardzify-coral" />,
    example: {
      brandName: "Boomerang Store",
      primaryColor: "#DC2626",
      secondaryColor: "#FEE2E2",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-red-500 to-pink-600 p-4 rounded-lg text-white relative overflow-hidden">
            <div className="absolute top-2 right-2 text-6xl opacity-10">🎁</div>
            <div className="text-sm mb-1">GIFT CARD</div>
            <div className="text-4xl font-bold mb-2">150 RON</div>
            <div className="text-xs opacity-90">Pentru: Maria</div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>NUMELE CLIENTULUI</span>
            <span>VALABIL PÂNĂ</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900">
            <span>Maria</span>
            <span>25/02/25</span>
          </div>
        </div>
      )
    }
  },
  {
    name: "Card Cashback",
    category: "Retention",
    description: "Returnează un procent din valoarea achizițiilor, sub formă de puncte, direct pe cardul clientului.",
    icon: <Wallet className="w-10 h-10 text-cardzify-coral" />,
    example: {
      brandName: "Fashion Boomerang",
      primaryColor: "#7C3AED",
      secondaryColor: "#DDD6FE",
      content: (
        <div className="space-y-3">
          <div className="bg-purple-100 p-3 rounded">
            <div className="text-xs text-purple-700 mb-1">SOLD CASHBACK</div>
            <div className="text-3xl font-bold text-purple-900">45 RON</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">5% CASHBACK</span>
              <Wallet className="w-5 h-5" />
            </div>
            <div className="text-xs">pe toate achizițiile</div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>ULTIMA ACHIZIȚIE</span>
            <span>CASHBACK PRIMIT</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900">
            <span>18/10/25</span>
            <span>+12 RON</span>
          </div>
        </div>
      )
    }
  },
  {
    name: "Card Discount",
    category: "Retention",
    description: "Oferă reduceri permanente sau temporare clienților fideli.",
    icon: <Percent className="w-10 h-10 text-cardzify-coral" />,
    example: {
      brandName: "Salon Boomerang",
      primaryColor: "#EC4899",
      secondaryColor: "#FCE7F3",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-4 rounded-lg text-white">
            <div className="text-sm mb-1">REDUCEREA TA</div>
            <div className="text-5xl font-bold">20%</div>
            <div className="text-xs mt-1">OFF</div>
          </div>
          <div className="bg-pink-50 p-3 rounded">
            <div className="text-xs text-pink-700 mb-1">VALABIL PÂNĂ</div>
            <div className="text-xl font-bold text-pink-900">31 Decembrie 2025</div>
          </div>
          <div className="text-xs text-center text-gray-600">
            Reducere permanentă pentru clienți fideli
          </div>
        </div>
      )
    }
  },
  {
    name: "Card de Membru",
    category: "Retention",
    description: "Acces exclusiv pentru membrii programului tău de fidelitate.",
    icon: <Crown className="w-10 h-10 text-cardzify-coral" />,
    example: {
      brandName: "Club Boomerang VIP",
      primaryColor: "#F59E0B",
      secondaryColor: "#FEF3C7",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-4 rounded-lg text-white relative overflow-hidden">
            <Crown className="absolute top-2 right-2 w-12 h-12 opacity-20" />
            <div className="text-sm mb-1">MEMBRU</div>
            <div className="text-2xl font-bold">GOLD</div>
            <div className="text-xs mt-2 opacity-90">Membru din: 01/2024</div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-amber-50 p-2 rounded">
              <div className="text-amber-700">BENEFICII</div>
              <div className="font-bold text-amber-900">15+</div>
            </div>
            <div className="bg-amber-50 p-2 rounded">
              <div className="text-amber-700">ECONOMII</div>
              <div className="font-bold text-amber-900">450 RON</div>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    name: "Card Coupon",
    category: "Acquisition",
    description: "Cupoane digitale care pot fi folosite o singură dată pentru a atrage clienți noi.",
    icon: <Ticket className="w-10 h-10 text-cardzify-coral" />,
    example: {
      brandName: "Pizza Boomerang",
      primaryColor: "#10B981",
      secondaryColor: "#D1FAE5",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 rounded-lg text-white relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
              <div className="absolute top-2 right-2 text-6xl">🎫</div>
            </div>
            <div className="text-sm mb-1">CUPON SPECIAL</div>
            <div className="text-3xl font-bold">PIZZA GRATUITĂ</div>
            <div className="text-xs mt-2">la prima comandă</div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>COD CUPON</span>
            <span>VALABIL PÂNĂ</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900">
            <span>WELCOME2025</span>
            <span>15/11/25</span>
          </div>
        </div>
      )
    }
  },
  {
    name: "Card Multipass",
    category: "Retention",
    description: "Combină mai multe tipuri de carduri într-unul singur pentru flexibilitate maximă.",
    icon: <Target className="w-10 h-10 text-cardzify-coral" />,
    example: {
      brandName: "Fitness Boomerang",
      primaryColor: "#3B82F6",
      secondaryColor: "#DBEAFE",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg text-white">
            <div className="text-xs mb-1">MULTIPASS ACTIV</div>
            <div className="text-2xl font-bold">Premium</div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-blue-50 p-2 rounded border border-blue-200">
              <div className="text-blue-700">PUNCTE</div>
              <div className="font-bold text-blue-900">234</div>
            </div>
            <div className="bg-blue-50 p-2 rounded border border-blue-200">
              <div className="text-blue-700">DISCOUNT</div>
              <div className="font-bold text-blue-900">15%</div>
            </div>
          </div>
          <div className="bg-blue-50 p-2 rounded text-center">
            <div className="text-xs text-blue-700">ȘTAMPILE COLECTATE</div>
            <div className="font-bold text-blue-900">5/10</div>
          </div>
        </div>
      )
    }
  }
];

export default function CardTypeCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Carousel is ready
    }
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef} data-testid="carousel-card-types">
        <div className="flex">
          {cardTypes.map((cardType, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              data-testid={`carousel-item-${index}`}
            >
              <div className="h-full">
                {/* Category Badge */}
                <div className="text-center mb-4">
                  <span 
                    className="inline-block px-3 py-1 bg-cardzify-coral/10 text-cardzify-coral text-xs font-semibold rounded-full"
                    data-testid={`badge-category-${index}`}
                  >
                    {cardType.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 
                  className="text-2xl font-bold text-gray-900 text-center mb-2"
                  data-testid={`title-card-${index}`}
                >
                  {cardType.name}
                </h3>

                {/* Description */}
                <p 
                  className="text-gray-600 text-center mb-6 text-sm px-4"
                  data-testid={`description-card-${index}`}
                >
                  {cardType.description}
                </p>

                {/* Phone Mockup */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="relative w-64 bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl"
                    data-testid={`phone-mockup-${index}`}
                  >
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                    
                    {/* Phone Screen */}
                    <div className="bg-white rounded-[2rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="bg-gray-50 px-4 py-2 flex justify-between items-center text-xs">
                        <span className="text-gray-600">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-3 border border-gray-400 rounded-sm" />
                        </div>
                      </div>

                      {/* Card Header */}
                      <div 
                        className="px-4 py-3"
                        style={{ 
                          backgroundColor: cardType.example.primaryColor,
                        }}
                      >
                        <div className="text-white">
                          <div className="text-lg font-bold" data-testid={`brand-name-${index}`}>
                            {cardType.example.brandName}
                          </div>
                          <div className="text-xs opacity-90">SOLD</div>
                          <div className="text-2xl font-bold">
                            {index === 2 ? '150 RON' : index === 0 ? '3/10' : '156'}
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4" data-testid={`card-content-${index}`}>
                        {cardType.example.content}
                      </div>

                      {/* Footer */}
                      <div className="px-4 py-3 bg-gray-50 text-center text-xs text-gray-500">
                        VALABIL PÂNĂ<br />
                        <span className="font-bold text-gray-700">31/12/2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays for infinite effect */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
}
