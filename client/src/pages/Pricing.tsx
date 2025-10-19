import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

type BillingPeriod = "lunar" | "trimestrial" | "anual";

export default function Pricing() {
  const [selectedPeriod, setSelectedPeriod] = useState<BillingPeriod>("lunar");

  const billingOptions = [
    {
      id: "lunar" as BillingPeriod,
      label: "Lunar",
      price: 349,
      period: "RON/lună",
    },
    {
      id: "trimestrial" as BillingPeriod,
      label: "Trimestrial",
      price: 899,
      period: "RON/trimestru",
      savings: "Economisești 11%",
    },
    {
      id: "anual" as BillingPeriod,
      label: "Anual",
      price: 2999,
      period: "RON/an",
      savings: "Economisești 28%",
    },
  ];

  const features = [
    "Clienți nelimitați",
    "Locații nelimitate",
    "Personalizare completă a cardurilor",
    "Notificări Push inteligente",
    "Analiză avansată & CRM",
    "QR Code pentru scanare rapidă",
    "Integrare Apple & Google Wallet",
    "Rapoarte și statistici detaliate",
    "Suport prioritar",
    "API pentru integrări custom",
  ];

  const selectedOption = billingOptions.find((opt) => opt.id === selectedPeriod)!;

  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-pricing">
              Planuri tarifare simple și transparente
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-pricing-description">
              Un singur plan, toate funcționalitățile. Alege ciclul de facturare care ți se potrivește.
            </p>
          </div>

          {/* Billing Period Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {billingOptions.map((option) => (
              <Card
                key={option.id}
                className={`p-6 cursor-pointer hover-elevate active-elevate-2 flex-1 sm:flex-none sm:min-w-[200px] ${
                  selectedPeriod === option.id 
                    ? "bg-cardzify-coral text-white" 
                    : "bg-white"
                }`}
                onClick={() => setSelectedPeriod(option.id)}
                data-testid={`card-billing-${option.id}`}
              >
                <div className="text-center">
                  <div className="text-xl font-bold mb-2" data-testid={`text-billing-label-${option.id}`}>
                    {option.label}
                  </div>
                  <div className="text-3xl font-extrabold mb-1" data-testid={`text-price-${option.id}`}>
                    {option.price} RON
                  </div>
                  <div className={`text-sm ${selectedPeriod === option.id ? "opacity-90" : "text-gray-600"}`} data-testid={`text-period-${option.id}`}>
                    {option.period}
                  </div>
                  {option.savings && (
                    <div className="text-sm font-semibold mt-2" data-testid={`text-savings-${option.id}`}>
                      {option.savings}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Main Plan Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 border-t-4 border-cardzify-coral shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4" data-testid="heading-plan-name">
                  Cardzify Complete
                </h3>
                <div className="mb-6">
                  <p className="text-5xl font-extrabold text-cardzify-purple mb-2" data-testid="text-selected-price">
                    {selectedOption.price} RON
                  </p>
                  <p className="text-lg text-gray-600" data-testid="text-selected-period">
                    {selectedOption.period}
                  </p>
                  {selectedOption.savings && (
                    <p className="text-lg font-semibold text-cardzify-coral mt-2" data-testid="text-selected-savings">
                      {selectedOption.savings}
                    </p>
                  )}
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-plan-description">
                  Accesează toate funcționalitățile platformei Cardzify pentru a-ți transforma clienții în fani loiali.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3" data-testid={`feature-item-${idx}`}>
                    <div className="bg-cardzify-coral/10 rounded-full p-1">
                      <Check className="text-cardzify-coral w-5 h-5" data-testid={`icon-check-${idx}`} />
                    </div>
                    <span className="text-gray-700" data-testid={`text-feature-${idx}`}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-cardzify-coral text-white"
                  data-testid="button-start-trial"
                >
                  Începe perioada de probă gratuită
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    data-testid="button-contact-sales"
                  >
                    Contactează vânzările
                  </Button>
                </Link>
              </div>

              {/* Additional Info */}
              <p className="text-center text-sm text-gray-500 mt-6" data-testid="text-trial-info">
                Perioadă de probă gratuită de 14 zile • Anulare oricând • Fără comision de setup
              </p>
            </Card>
          </div>

          {/* FAQ or Additional Info */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" data-testid="heading-need-help">
              Ai nevoie de ajutor să alegi?
            </h3>
            <p className="text-gray-600 mb-6" data-testid="text-help-description">
              Echipa noastră este aici să te ajute să găsești soluția perfectă pentru afacerea ta.
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                data-testid="button-help-contact"
              >
                Contactează-ne
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
