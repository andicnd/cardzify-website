import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Shield, Rocket, Target, Info } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

type BillingPeriod = "lunar" | "trimestrial" | "anual";

interface PlanFeature {
  name: string;
  start: string | boolean;
  grow: string | boolean;
  pro: string | boolean;
  info?: string;
}

export default function Pricing() {
  const [selectedPeriod, setSelectedPeriod] = useState<BillingPeriod>("lunar");

  const pricingData = {
    start: { lunar: 159, trimestrial: 139, anual: 119 },
    grow: { lunar: 259, trimestrial: 229, anual: 199 },
    pro: { lunar: 349, trimestrial: 319, anual: 289 },
  };

  const billingLabels = {
    lunar: "Lunar",
    trimestrial: "Trimestrial",
    anual: "Anual",
  };

  const featureMatrix: PlanFeature[] = [
    {
      name: "Număr de oferte active",
      start: "1 singur tip",
      grow: "Până la 3 tipuri",
      pro: "Până la 10 tipuri",
      info: "Câte tipuri de carduri poți avea simultan (ex: ștampile, puncte, cupoane)"
    },
    { name: "Clienți înrolați", start: "NELIMITAT", grow: "NELIMITAT", pro: "NELIMITAT" },
    {
      name: "Conturi pentru angajați",
      start: "1 cont",
      grow: "10 conturi",
      pro: "50 conturi",
      info: "Conturi diferite pentru a scana codurile clienților"
    },
    {
      name: "Mesaje Promoționale (Push)",
      start: "NELIMITAT & GRATUIT",
      grow: "NELIMITAT & GRATUIT",
      pro: "NELIMITAT & GRATUIT",
      info: "Trimise manual de tine când ai oferte"
    },
    {
      name: "Colectare Recenzii (Reviews)",
      start: false,
      grow: true,
      pro: true,
      info: "Ceri steluțe pe Google automat după scanare"
    },
    {
      name: "Pilot Automat de Marketing",
      start: false,
      grow: "4 scenarii",
      pro: "Avansat",
      info: "Mesaje care se trimit singure (La Mulți Ani, Ne e dor de tine, etc.)"
    },
    { name: "Program \"Recomandă un prieten\"", start: false, grow: true, pro: true },
    { name: "Notificări bazate pe Locație", start: "1 Locație", grow: "3 Locații", pro: "10 Locații" },
    { name: "Denumirea campurilor pe card", start: "Standard", grow: "Personalizate", pro: "Personalizate" },
    {
      name: "Integrare Tehnică (API)",
      start: false,
      grow: false,
      pro: true,
      info: "Conectare cu softul de casă - dacă suportă"
    },
    { name: "Permisiuni Manageri", start: false, grow: false, pro: true },
    {
      name: "Mesaje cu AI",
      start: false,
      grow: false,
      pro: true,
      info: "Analizează clienții și trimite oferte singur"
    },
  ];

  const renderValue = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm font-medium text-gray-700">{val}</span>;
  };

  return (
    <div className="min-h-screen pt-20 pb-20 animate-fadeIn relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cardzify-coral/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cardzify-purple/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-cardzify-purple to-gray-900"
          >
            Investește în Loialitatea Afacerii Tale
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alege planul care se potrivește etapei actuale a afacerii tale.
            Digitalizare simplă sau marketing automatizat avansat.
          </p>
        </div>

        {/* Billing Period Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/50 backdrop-blur-md p-1.5 rounded-2xl flex border border-white/20 shadow-xl">
            {(Object.keys(billingLabels) as BillingPeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${selectedPeriod === period
                  ? "bg-cardzify-coral text-white shadow-lg scale-105"
                  : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                  }`}
              >
                {billingLabels[period]}
                {period !== 'lunar' && (
                  <span className="block text-[10px] opacity-80 uppercase tracking-tighter">
                    {period === 'trimestrial' ? '-11% REDUCERE' : '-25% REDUCERE'}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24 items-stretch">
          {/* START PLAN */}
          <Card className="relative bg-white/70 backdrop-blur-xl border-white/40 shadow-2xl hover-elevate transition-all border-t-8 border-t-gray-400 group flex flex-col h-full">
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-8">
                <div className="bg-gray-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">START</h3>
                <p className="text-gray-500 text-sm">Digitalizare simplă</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-black text-gray-900">{pricingData.start[selectedPeriod]}</span>
                <span className="text-gray-500 font-medium"> RON/lună</span>
              </div>
              <ul className="space-y-4 mb-4 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span><strong>1 tip</strong> de card activ</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Clienți <strong>NELIMITAȚI</strong></span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span><strong>1 cont</strong> angajat</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Mesaje Push Nelimitate</span>
                </li>
              </ul>
              <div className="pt-8 mt-auto">
                <a href="https://app.cardzify.pro/registration" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" className="w-full bg-gray-900 text-white hover:bg-gray-800 h-14 rounded-2xl font-bold">
                    Începe gratuit
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* GROW PLAN */}
          <Card className="relative bg-white/80 backdrop-blur-2xl border-cardzify-purple/30 shadow-2xl hover-elevate transition-all border-t-8 border-t-cardzify-purple group flex flex-col h-full z-10 ring-2 ring-cardzify-purple">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cardzify-purple text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase z-20">
              RECOMANDAT
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-8">
                <div className="bg-cardzify-purple/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="text-cardzify-purple" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">GROW</h3>
                <p className="text-gray-500 text-sm">Marketing Automatizat</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-black text-gray-900">{pricingData.grow[selectedPeriod]}</span>
                <span className="text-gray-500 font-medium"> RON/lună</span>
              </div>
              <ul className="space-y-4 mb-4 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Până la <strong>3 tipuri</strong> de carduri</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Colectare <strong>Recenzii Google</strong></span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Pilot Automat (4 scenarii)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Program Recomandare Prieteni</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span><strong>10 conturi</strong> angajați</span>
                </li>
              </ul>
              <div className="pt-8 mt-auto">
                <a href="https://app.cardzify.pro/registration" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" className="w-full bg-cardzify-purple text-white hover:bg-cardzify-purple/90 h-14 rounded-2xl font-bold shadow-lg shadow-cardzify-purple/30">
                    Începe gratuit
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* PRO PLAN */}
          <Card className="relative bg-white/70 backdrop-blur-xl border-white/40 shadow-2xl hover-elevate transition-all border-t-8 border-t-cardzify-coral group flex flex-col h-full">
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-8">
                <div className="bg-cardzify-coral/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="text-cardzify-coral" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">PRO</h3>
                <p className="text-gray-500 text-sm">Rețea & Control Total</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-black text-gray-900">{pricingData.pro[selectedPeriod]}</span>
                <span className="text-gray-500 font-medium"> RON/lună</span>
              </div>
              <ul className="space-y-4 mb-4 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Până la <strong>10 tipuri</strong> de carduri</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span><strong>Integrare API</strong> soft casă</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Pilot Automat Avansat + <strong>AI</strong></span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>Permisiuni Manageri</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span><strong>50 conturi</strong> angajați</span>
                </li>
              </ul>
              <div className="pt-8 mt-auto">
                <a href="https://app.cardzify.pro/registration" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" className="w-full bg-cardzify-coral text-white hover:bg-cardzify-coral/90 h-14 rounded-2xl font-bold shadow-lg shadow-cardzify-coral/30">
                    Începe gratuit
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-32 max-w-5xl mx-auto overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comparație Detaliată</h2>
            <p className="text-gray-600">Tot ce trebuie să știi pentru a alege planul perfect.</p>
          </div>

          <div className="bg-white/50 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-center">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="py-6 px-6 text-left text-sm font-bold text-gray-500 uppercase tracking-widest">Funcționalitate</th>
                    <th className="py-6 px-4 text-sm font-bold text-gray-900 uppercase tracking-widest">START</th>
                    <th className="py-6 px-4 text-sm font-bold text-cardzify-purple uppercase tracking-widest">GROW</th>
                    <th className="py-6 px-4 text-sm font-bold text-cardzify-coral uppercase tracking-widest">PRO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {featureMatrix.map((feature, idx) => (
                    <tr key={idx} className="hover:bg-white/50 transition-colors group">
                      <td className="py-5 px-6 text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900">{feature.name}</span>
                          {feature.info && (
                            <div className="relative group/info">
                              <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                              <div className="absolute bottom-full left-0 mb-2 w-48 bg-gray-900 text-white text-[10px] p-2 rounded-lg opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all z-20">
                                {feature.info}
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-5 px-4">{renderValue(feature.start)}</td>
                      <td className="py-5 px-4">{renderValue(feature.grow)}</td>
                      <td className="py-5 px-4">{renderValue(feature.pro)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center bg-gradient-to-br from-cardzify-purple to-cardzify-coral rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Pregătit să revoluționezi loialitatea?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Alătură-te noii generații de antreprenori.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://app.cardzify.pro/registration" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-cardzify-purple hover:bg-white/90 h-16 px-10 rounded-2xl font-black text-lg">
                  Începe gratuit
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-16 px-10 rounded-2xl font-black text-lg">
                  Solicită un Demo
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-sm opacity-70">
              * Perioadă de probă 14 zile • Anulare oricând • Setup rapid în 5 minute
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
