import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import Integrations from "@/pages/Integrations";
import Contact from "@/pages/Contact";

function App() {
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
