import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Creează Cardul Digital",
        description: "Configurează cardul alegând din cele 8 tipuri disponibile. Definește sistemul de recompense. Adaugă logo-ul și personalizează design-ul.",
        image: "/images/steps/create card.png",
        id: "create"
    },
    {
        title: "Printează și Expune Codul QR",
        description: "Printează afișul PDF generat automat din dashboard. Plasează-l lângă casa de marcat pentru a fi scanat ușor.",
        image: "/images/steps/print qr.png",
        id: "print"
    },
    {
        title: "Înrolare Rapidă în 30 de Secunde",
        description: "Clienții scanează codul și completează un formular scurt. Utilizatorii iOS adaugă cardul direct în Apple Wallet. Pe Android, cardul se adaugă în Google Wallet sau pe ecranul principal.",
        image: "/images/steps/sign up customers.png",
        id: "signup"
    },
    {
        title: "Scanează și Acordă Puncte",
        description: "Oferă acces personalului pentru scanare. Scanează cardul clientului pentru a acorda puncte sau a valida recompense. Aplicația funcționează pe telefon, tabletă sau PC.",
        image: "/images/steps/scan card.png",
        id: "scan"
    },
    {
        title: "Gestionează Clienții cu CRM",
        description: "Adaugă manual ștampile sau puncte. Trimite notificări push cu oferte. Actualizează recompensele oricând.",
        image: "/images/steps/manage customers.png",
        id: "manage"
    }
];

export function StickyScrollSteps() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Gata de utilizare în <span className="text-cardzify-coral">5 pași simpli</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Procesul este intuitiv și rapid. Iată cum funcționează.
                    </p>
                </div>

                <div ref={containerRef} className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

                    {/* Sticky Image Container (Desktop) */}
                    <div className="hidden lg:block w-1/2 sticky top-32 h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md self-start">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeStep === index ? 1 : 0,
                                    scale: activeStep === index ? 1 : 1.05
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full flex items-center justify-center p-8"
                            >
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-contain drop-shadow-md"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Scrolling Text Steps */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-24 lg:gap-40 pt-10 pb-24">
                        {steps.map((step, index) => (
                            <StepCard
                                key={step.id}
                                step={step}
                                index={index}
                                setActiveStep={setActiveStep}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index, setActiveStep }: { step: any, index: number, setActiveStep: (i: number) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveStep(index);
        }
    }, [isInView, index, setActiveStep]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
        >
            {/* Mobile Image (Visible only on mobile) */}
            <div className="lg:hidden w-full aspect-video rounded-2xl overflow-hidden bg-gray-50 border shadow-inner mb-4">
                <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain p-4"
                />
            </div>

            <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cardzify-purple text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {index + 1}
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
