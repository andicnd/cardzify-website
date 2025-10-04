import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Start",
      price: "0",
      period: "RON/lună",
      description: "Perfect pentru a testa platforma.",
      features: [
        "Până la 50 de clienți",
        "1 locație",
        "Design card standard",
      ],
      cta: "Începe gratuit",
      ctaVariant: "outline" as const,
      borderColor: "border-gray-300",
      popular: false,
    },
    {
      name: "Pro",
      price: "129",
      period: "RON/lună",
      description: "Soluția completă pentru creșterea afacerii tale.",
      features: [
        "Clienți nelimitați",
        "Până la 3 locații",
        "Personalizare avansată card",
        "Notificări Push",
        "Analiză & CRM",
      ],
      cta: "Alege Pro",
      ctaVariant: "default" as const,
      borderColor: "border-cardzify-coral",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Contact",
      period: "",
      description: "Pentru afaceri cu nevoi personalizate și multiple locații.",
      features: [
        "Totul din Pro",
        "Locații nelimitate",
        "Integrări custom",
        "Suport prioritar",
      ],
      cta: "Contactează-ne",
      ctaVariant: "outline" as const,
      borderColor: "border-gray-800",
      popular: false,
      isContact: true,
    },
  ];

  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-pricing">
            Planuri tarifare simple și transparente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12" data-testid="text-pricing-description">
            Alege planul care se potrivește afacerii tale. Începe gratuit, fără niciun risc.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 border-t-4 ${plan.borderColor} relative transition-all hover:scale-105 hover:shadow-xl`}
                data-testid={`card-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cardzify-coral text-white px-4 py-1 rounded-full font-semibold text-sm" data-testid="badge-popular">
                    Cel mai popular
                  </p>
                )}

                <h3 className="text-2xl font-bold mb-4" data-testid={`title-plan-${plan.name.toLowerCase()}`}>{plan.name}</h3>
                <p className="text-4xl font-extrabold mb-4" data-testid={`text-price-${plan.name.toLowerCase()}`}>
                  {plan.price}
                  {plan.period && <span className="text-lg font-medium text-gray-500"> {plan.period}</span>}
                </p>
                <p className="text-gray-600 mb-6 h-12" data-testid={`text-plan-description-${plan.name.toLowerCase()}`}>{plan.description}</p>

                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2" data-testid={`feature-${plan.name.toLowerCase()}-${idx}`}>
                      <Check className="text-cardzify-coral w-5 h-5 flex-shrink-0" data-testid={`icon-check-${plan.name.toLowerCase()}-${idx}`} />
                      <span data-testid={`text-feature-${plan.name.toLowerCase()}-${idx}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.isContact ? (
                  <Link href="/contact">
                    <Button
                      variant={plan.ctaVariant}
                      className={`w-full ${
                        plan.ctaVariant === "default"
                          ? "bg-cardzify-coral hover:bg-cardzify-coral/90"
                          : plan.name === "Enterprise"
                          ? "bg-gray-800 text-white hover:bg-gray-700"
                          : ""
                      }`}
                      data-testid={`button-cta-${plan.name.toLowerCase()}`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant={plan.ctaVariant}
                    className={`w-full ${
                      plan.ctaVariant === "default"
                        ? "bg-cardzify-coral hover:bg-cardzify-coral/90"
                        : ""
                    }`}
                    data-testid={`button-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
