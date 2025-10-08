import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Switch, Route, useLocation } from "wouter";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import Integrations from "@/pages/Integrations";
import Contact from "@/pages/Contact";

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Cardzify - Soluții de Loialitate Digitale pentru Afaceri',
    description: 'Creează carduri de loialitate digitale în câteva minute. Adu-ți clienții înapoi, înțelege-le preferințele și crește-ți afacerea cu Cardzify. Simplu, digital, eficient.'
  },
  '/functionalitati': {
    title: 'Funcționalități Cardzify - Carduri de Loialitate Digitale',
    description: 'Descoperă funcționalitățile complete Cardzify: carduri personalizabile, notificări push, analiză avansată și integrare ușoară cu Apple Wallet și Google Wallet.'
  },
  '/solutii': {
    title: 'Soluții de Loialitate - Cardzify pentru Afacerea Ta',
    description: 'Soluții personalizate de loialitate digitală pentru cafenele, saloane de înfrumusețare și restaurante. Crește fidelizarea clienților cu Cardzify.'
  },
  '/integrari': {
    title: 'Integrări Cardzify - Apple Wallet & Google Wallet',
    description: 'Integrează Cardzify cu Apple Wallet și Google Wallet pentru a oferi clienților tăi carduri de loialitate digitale accesibile instant pe telefon.'
  },
  '/preturi': {
    title: 'Prețuri Cardzify - Planuri pentru Orice Afacere',
    description: 'Planuri tarifare simple și transparente pentru carduri de loialitate digitale. Începe gratuit cu planul Start sau alege Pro pentru funcționalități avansate.'
  },
  '/contact': {
    title: 'Contact Cardzify - Transformă Vizitatorii în Clienți Fideli',
    description: 'Contactează echipa Cardzify pentru o demonstrație personalizată. Descoperă cum cardurile de loialitate digitale pot transforma afacerea ta.'
  }
};

function updateMetaTags(pathname: string) {
  const metadata = pageMetadata[pathname] || pageMetadata['/'];
  
  // Update title
  document.title = metadata.title;
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', metadata.description);
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', metadata.description);
    document.head.appendChild(metaDescription);
  }
  
  // Update or create Open Graph tags
  const ogTags = [
    { property: 'og:title', content: metadata.title },
    { property: 'og:description', content: metadata.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://cardzify.ro${pathname}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: metadata.title },
    { name: 'twitter:description', content: metadata.description }
  ];
  
  ogTags.forEach(tag => {
    const selector = tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`;
    let metaTag = document.querySelector(selector);
    
    if (metaTag) {
      metaTag.setAttribute('content', tag.content);
    } else {
      metaTag = document.createElement('meta');
      if (tag.property) {
        metaTag.setAttribute('property', tag.property);
      } else if (tag.name) {
        metaTag.setAttribute('name', tag.name);
      }
      metaTag.setAttribute('content', tag.content);
      document.head.appendChild(metaTag);
    }
  });
}

function App() {
  const [location] = useLocation();
  
  // Update meta tags when location changes (client-side navigation)
  useEffect(() => {
    updateMetaTags(location);
  }, [location]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-20">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/preturi" component={Pricing} />
              <Route path="/functionalitati" component={Features} />
              <Route path="/solutii" component={Solutions} />
              <Route path="/integrari" component={Integrations} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
