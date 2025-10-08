import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import Integrations from "@/pages/Integrations";
import Contact from "@/pages/Contact";

function App({ page }: { page: string }) {
  let PageComponent;
  
  switch (page) {
    case 'home':
      PageComponent = Home;
      break;
    case 'preturi':
      PageComponent = Pricing;
      break;
    case 'functionalitati':
      PageComponent = Features;
      break;
    case 'solutii':
      PageComponent = Solutions;
      break;
    case 'integrari':
      PageComponent = Integrations;
      break;
    case 'contact':
      PageComponent = Contact;
      break;
    default:
      PageComponent = Home;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Header currentPage={page} />
          <main className="pt-20">
            <PageComponent />
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
