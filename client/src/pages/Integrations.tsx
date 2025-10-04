import { Card } from "@/components/ui/card";
import { 
  CreditCard, 
  Square, 
  DollarSign, 
  ShoppingCart, 
  Plug, 
  Mail, 
  Zap, 
  BarChart2, 
  Users, 
  Camera, 
  Cloud, 
  Building 
} from "lucide-react";

export default function Integrations() {
  const integrations = [
    { name: "Stripe", category: "Plăți", icon: <CreditCard className="w-12 h-12 text-cardzify-coral" /> },
    { name: "Square", category: "Plăți", icon: <Square className="w-12 h-12 text-cardzify-coral" /> },
    { name: "PayPal", category: "Plăți", icon: <DollarSign className="w-12 h-12 text-cardzify-coral" /> },
    { name: "Shopify", category: "E-commerce", icon: <ShoppingCart className="w-12 h-12 text-cardzify-coral" /> },
    { name: "WooCommerce", category: "E-commerce", icon: <Plug className="w-12 h-12 text-cardzify-coral" /> },
    { name: "Mailchimp", category: "Email Marketing", icon: <Mail className="w-12 h-12 text-cardzify-coral" /> },
    { name: "Zapier", category: "Automatizare", icon: <Zap className="w-12 h-12 text-cardzify-coral" /> },
    { name: "Google Analytics", category: "Analiză", icon: <BarChart2 className="w-12 h-12 text-cardzify-coral" /> },
    { name: "Facebook", category: "Social Media", icon: <Users className="w-12 h-12 text-cardzify-coral" /> },
    { name: "Instagram", category: "Social Media", icon: <Camera className="w-12 h-12 text-cardzify-coral" /> },
    { name: "Salesforce", category: "CRM", icon: <Cloud className="w-12 h-12 text-cardzify-coral" /> },
    { name: "HubSpot", category: "CRM", icon: <Building className="w-12 h-12 text-cardzify-coral" /> },
  ];

  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-integrations">
              Integrări cu platformele tale favorite
            </h2>
            <p className="text-lg text-gray-600" data-testid="text-integrations-description">
              Cardzify se integrează perfect cu instrumentele pe care le folosești deja.
              Conectează-te în câteva secunde și automatizează-ți fluxul de lucru.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {integrations.map((integration, idx) => (
              <Card
                key={idx}
                className="p-6 text-center hover-elevate transition-all"
                data-testid={`integration-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-cardzify-coral mb-3 flex justify-center" data-testid={`icon-integration-${idx}`}>{integration.icon}</div>
                <h3 className="font-bold mb-1" data-testid={`title-integration-${idx}`}>{integration.name}</h3>
                <p className="text-xs text-gray-500" data-testid={`category-integration-${idx}`}>{integration.category}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 lg:p-12 max-w-4xl mx-auto bg-cardzify-light border-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" data-testid="heading-custom-integration">
                Nu găsești integrarea de care ai nevoie?
              </h3>
              <p className="text-gray-600 mb-6" data-testid="text-custom-integration-description">
                Echipa noastră poate crea integrări personalizate pentru nevoile tale specifice.
                Contactează-ne pentru a discuta despre soluții custom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-cardzify-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-cardzify-coral/90 transition"
                  data-testid="button-contact-integrations"
                >
                  Contactează-ne
                </a>
                <a
                  href="#"
                  className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                  data-testid="button-api-docs"
                >
                  Documentație API
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
