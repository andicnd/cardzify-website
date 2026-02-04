import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Wallet, Percent, Crown, Ticket, Target, Gift, Apple, TrendingUp, BarChart, MessageCircle, Info, RotateCcw, Download, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { StickyScrollSteps } from "@/components/StickyScrollSteps";
import { InfiniteBusinessTicker } from "@/components/InfiniteBusinessTicker";
import { WalletPasses } from "@/components/WalletPasses";

type CardType = "stamps" | "rewards" | "cashback" | "discount" | "membership" | "coupon" | "multipass" | "giftcard";

const cardTypeDetails: Record<CardType, {
    name: string;
    icon: React.ReactNode;
    description: string;
    mockupImage: string;
    rewardExample: string;
    demoLink: string;
}> = {
    stamps: {
        name: "Card cu Ștampile",
        icon: <Check className="w-5 h-5" />,
        description: "Clienții primesc o ștampilă la fiecare achiziție. La 10 ștampile, recompensa este activată.",
        mockupImage: "/images/Full Card Mockups/card stampile.png",
        rewardExample: "A 10-a cafea gratuită",
        demoLink: "https://take.cards/jdgMt"
    },
    rewards: {
        name: "Card de Recompense",
        icon: <Star className="w-5 h-5" />,
        description: "Acumulează puncte în funcție de valoarea achiziției. Punctele pot fi schimbate pe recompense.",
        mockupImage: "/images/Full Card Mockups/card recompense.png",
        rewardExample: "Pizza gratuită la 100 puncte",
        demoLink: "https://take.cards/9gLNs"
    },
    cashback: {
        name: "Card Cashback",
        icon: <Wallet className="w-5 h-5" />,
        description: "Returnează un procent din valoarea achizițiilor, sub formă de puncte, direct pe cardul clientului.",
        mockupImage: "/images/Full Card Mockups/card cashback.png",
        rewardExample: "5% cashback la fiecare comandă",
        demoLink: "https://take.cards/C9wXb"
    },
    discount: {
        name: "Card Discount",
        icon: <Percent className="w-5 h-5" />,
        description: "Oferă reduceri permanente sau temporare clienților fideli.",
        mockupImage: "/images/Full Card Mockups/card reducere.png",
        rewardExample: "10% discount la orice comandă",
        demoLink: "https://take.cards/ohdze"
    },
    membership: {
        name: "Card de Membru",
        icon: <Crown className="w-5 h-5" />,
        description: "Acces exclusiv pentru membrii programului tău de fidelitate.",
        mockupImage: "/images/Full Card Mockups/card de membru.png",
        rewardExample: "Acces VIP la evenimente",
        demoLink: "https://take.cards/KPu9t"
    },
    coupon: {
        name: "Card Coupon",
        icon: <Ticket className="w-5 h-5" />,
        description: "Cupoane digitale care pot fi folosite o singură dată pentru a atrage clienți noi.",
        mockupImage: "/images/Full Card Mockups/coupon.png",
        rewardExample: "-50% la prima vizită",
        demoLink: "https://take.cards/l5Eou"
    },
    multipass: {
        name: "Card Multipass",
        icon: <Target className="w-5 h-5" />,
        description: "Ideal pentru servicii preplătite (ex. 10 intrări la sală) sau abonamente limitate.",
        mockupImage: "/images/Full Card Mockups/card multipass.png",
        rewardExample: "10 intrări la fitness",
        demoLink: "https://take.cards/j6PLp"
    },
    giftcard: {
        name: "Gift Card",
        icon: <Gift className="w-5 h-5" />,
        description: "Card cadou digital pe care clienții îl pot oferi prietenilor și familiei.",
        mockupImage: "/images/Full Card Mockups/gift card.png",
        rewardExample: "Card Cadou 100 LEI",
        demoLink: "https://take.cards/ncJhV"
    },
};

function FlipCard({ type }: { type: CardType }) {
    const data = cardTypeDetails[type];
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group relative w-full h-[280px] perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden w-full h-full flex flex-col items-center bg-white/5 rounded-3xl border border-white/20 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    {/* Image Container - Cropped to show top half */}
                    <div className="relative w-full h-full overflow-hidden">
                        <img
                            src={data.mockupImage}
                            alt={data.name}
                            className="w-full h-[140%] object-cover object-top -mt-4 transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full shadow-lg z-10 text-cardzify-purple hover:scale-110 transition-transform">
                        <Info className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-white/95 via-white/80 to-transparent pt-8 pb-3 text-center">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-cardzify-purple transition-colors">
                            {data.name}
                        </h3>
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 backface-hidden w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-cardzify-purple/10 p-6 flex flex-col justify-between"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                >
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-cardzify-purple">
                            {data.icon}
                            <h3 className="font-bold text-base leading-tight">{data.name}</h3>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">{data.description}</p>
                        <div className="bg-cardzify-coral/10 p-2 rounded-lg mt-1">
                            <span className="text-xs font-bold text-cardzify-coral block mb-0.5">Exemplu:</span>
                            <span className="text-xs text-gray-800 font-medium">{data.rewardExample}</span>
                        </div>
                    </div>

                    <div>
                        <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="w-full bg-cardzify-purple hover:bg-cardzify-purple/90 text-white text-xs mb-2 gap-2 shadow-md">
                                <Download className="w-3 h-3" />
                                Instalează Card
                            </Button>
                        </a>
                        <button
                            className="w-full flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-gray-600 py-1 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsFlipped(false);
                            }}
                        >
                            <RotateCcw className="w-3 h-3" />
                            Întoarce
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// Interactive Hero Component
const HeroSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });





    // Card items to animate
    // Card items to animate (Show ALL cards now)
    const heroCards = Object.keys(cardTypeDetails) as CardType[];

    return (
        <motion.section
            ref={targetRef}
            className="relative h-[300vh]" // Taller scroll area
        >
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full">

                    <div
                        className="text-left z-10"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Transformă vizitatorii în{" "}
                            <span className="text-cardzify-coral">clienți fideli.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                            Creează carduri de loialitate digitale în câteva minute. Adu-ți clienții
                            înapoi cu oferte personalizate direct pe telefonul lor.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://app.cardzify.pro/registration" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 shadow-lg px-8 py-6 text-lg w-full">
                                    Încearcă gratuit
                                </Button>
                            </a>
                            <Link href="/functionalitati">
                                <Button variant="outline" className="bg-white/80 border-gray-300 hover:bg-white px-8 py-6 text-lg w-full sm:w-auto">
                                    Descoperă funcționalități
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                            <span>Alătură-te noii generații de antreprenori.</span>
                        </div>
                    </div>

                    {/* Animated Cards */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        {heroCards.map((type, index) => {
                            // Create unique scroll triggers for each card
                            const isFirst = index === 0;
                            const isLast = index === heroCards.length - 1;

                            // Dynamic step based on number of cards to fit in [0, 1] scroll range
                            // We leave a tiny buffer at the end (0.95 instead of 1.0) to ensure completion
                            const step = 0.95 / heroCards.length;
                            const start = index * step;
                            const end = start + step;

                            // Universal Swipe Up Logic
                            // 1. Enter from bottom (100%) to center (0%)
                            // 2. Exit from center (0%) to top (-120%)
                            // logic: [start, end] is entry. [end, end + step] is exit.

                            // We map the Y position across a wider range: [start, end, end + 0.15]
                            // Entry: start -> end. Exit: end -> end + 0.15

                            // Y Position:
                            // Last card: Enter 100% -> 0% and stay.
                            // Others: Enter 100% -> 0%, then Exit 0% -> -120%
                            const y = isLast
                                ? useTransform(springScroll, [start, end], ["120%", "0%"])
                                : useTransform(springScroll, [start, end, end + step], ["120%", "0%", "-120%"]);

                            // Opacity:
                            // Last card: Fade in and stay.
                            // Others: Fade in, stay while centered, then fade out during exit
                            const opacity = isLast
                                ? useTransform(springScroll, [start, end], [0, 1])
                                : useTransform(springScroll, [start, end, end + (step * 0.5)], [0, 1, 0]);

                            const scale = useTransform(springScroll, [start, end], [0.8, 1]);
                            const rotate = useTransform(springScroll, [start, end, end + step], [10, -5, -20]);

                            // Special case for the first card to be visible initially
                            // Card 0: Starts at 0% (center), moves up to -120% by proper step
                            const uniqueY = isFirst ? useTransform(springScroll, [0, step], ["0%", "-120%"]) : y;
                            const uniqueOpacity = isFirst ? useTransform(springScroll, [0, step * 0.5], [1, 0]) : opacity;
                            const uniqueRotate = isFirst ? useTransform(springScroll, [0, step], [-5, -20]) : rotate;

                            return (
                                <motion.div
                                    key={type}
                                    className="absolute w-full max-w-xs"
                                    style={{
                                        y: isFirst ? uniqueY : y,
                                        scale: isFirst ? 1 : scale,
                                        rotate: isFirst ? uniqueRotate : rotate,
                                        opacity: isFirst ? uniqueOpacity : opacity,
                                        zIndex: index
                                    }}
                                >
                                    <img
                                        src={cardTypeDetails[type].mockupImage}
                                        alt={cardTypeDetails[type].name}
                                        className="w-full h-auto drop-shadow-2xl"
                                    />
                                    <div className="absolute -bottom-10 left-0 right-0 text-center">
                                        <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-gray-800 font-bold shadow-sm">
                                            {cardTypeDetails[type].name}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                >
                    <span className="text-sm font-medium">Derulează pentru a explora</span>
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-2 bg-gray-400 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default function Home() {


    const { scrollYProgress } = useScroll();
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        ["#ffffff", "#fff1f2", "#f0f9ff", "#f5f3ff", "#fff7ed", "#ffffff"] // White -> Rose -> Sky -> Violet -> Orange -> White
    );

    return (
        <div className="animate-fadeIn relative">
            <motion.div
                className="fixed inset-0 w-full h-full z-0 pointer-events-none"
                style={{ backgroundColor }}
            />

            <div className="relative z-10">
                {/* Replaced static Hero with new Scroll-based Hero */}
                <HeroSection />

                {/* Feature/Card Customization Section - Same as before */}
                {/* Grid Card Showcase Section */}
                {/* Grid Card Showcase Section */}
                <section id="cards-section" className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
                            >
                                Un card pentru <span className="text-cardzify-coral">orice strategie.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-600"
                            >
                                Alege tipul perfect pentru afacerea ta. Apasă pe iconița <Info className="w-4 h-4 inline-block mx-1 text-cardzify-purple" /> pentru a vedea detaliile.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-[1920px] mx-auto">
                            {(Object.keys(cardTypeDetails) as CardType[]).map((type, index) => (
                                <motion.div
                                    key={type}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                                >
                                    <FlipCard type={type} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20">
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

                <StickyScrollSteps />

                <section className="py-16 w-full">
                    <InfiniteBusinessTicker />
                </section>

                <section className="py-20 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative lg:order-last">
                                <WalletPasses />
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
                                    <a href="https://app.cardzify.pro/registration" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button
                                            className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 px-8 py-6 text-base w-full"
                                            data-testid="button-signup-cta"
                                        >
                                            Începe gratuit
                                        </Button>
                                    </a>
                                    <Link href="#cards-section">
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

                <section className="py-20 relative">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" data-testid="heading-testimonials">Ce spun clienții noștri</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="p-8 bg-white border border-gray-100 shadow-xl" data-testid="testimonial-0">
                                <p className="text-gray-600 mb-6 italic" data-testid="text-testimonial-quote-0">
                                    "Cardzify ne-a ajutat să comunicăm mai eficient cu clienții noștri folosind notificările push. Notificările sunt gratuite și putem informa clienții despre ofertele noastre în timp real. Recomand cu Încredere!"
                                </p>
                                <div>
                                    <p className="font-bold text-gray-900" data-testid="text-testimonial-author-0">Radu Giurea</p>
                                    <p className="text-sm text-cardzify-purple" data-testid="text-testimonial-role-0">Proprietar, Gyros&Doner Constanța</p>
                                </div>
                            </Card>
                            <Card className="p-8 bg-white border border-gray-100 shadow-xl" data-testid="testimonial-1">
                                <p className="text-gray-600 mb-6 italic" data-testid="text-testimonial-quote-1">
                                    "Clientele mele iubesc cardul digital! Nu mai trebuie să-și facă griji că
                                    îl pierd. Funcția de notificări pentru oferte este un bonus extraordinar."
                                </p>
                                <div>
                                    <p className="font-bold text-gray-900" data-testid="text-testimonial-author-1">Ana Solomon </p>
                                    <p className="text-sm text-cardzify-purple" data-testid="text-testimonial-role-1">Eyelash technician, Eyelash Attitude</p>
                                </div>
                            </Card>
                            <Card className="p-8 bg-white border border-gray-100 shadow-xl" data-testid="testimonial-2">
                                <p className="text-gray-600 mb-6 italic" data-testid="text-testimonial-quote-2">
                                    "Platforma ne-a ajutat să înțelegem mai bine ce își doresc oaspeții noștri.
                                    Acum putem crea oferte mult mai relevante. Recomand!"
                                </p>
                                <div>
                                    <p className="font-bold text-gray-900" data-testid="text-testimonial-author-2">Delia Bobeică</p>
                                    <p className="text-sm text-cardzify-purple" data-testid="text-testimonial-role-2">Proprietar, Atelier DareDesign</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-20 text-center">
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
        </div>
    );
}
