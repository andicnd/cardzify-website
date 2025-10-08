import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header({ currentPage }: { currentPage: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Acasă", page: "home" },
    { href: "/functionalitati", label: "Funcționalități", page: "functionalitati" },
    { href: "/solutii", label: "Soluții", page: "solutii" },
    { href: "/integrari", label: "Integrări", page: "integrari" },
    { href: "/preturi", label: "Prețuri", page: "preturi" },
    { href: "/contact", label: "Contact", page: "contact" },
  ];

  return (
    <header className="bg-cardzify-purple/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <a href="/" data-testid="link-logo">
            Cardzify
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                currentPage === item.page
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
          <a href="/preturi">
            <Button
              className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 transition-all hover:-translate-y-0.5 shadow-lg"
              data-testid="button-cta-header"
            >
              Creează card gratuit
            </Button>
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-cardzify-purple px-6 pb-4 animate-fadeIn" data-testid="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 transition-colors ${
                currentPage === item.page
                  ? "text-white font-semibold"
                  : "text-gray-300"
              }`}
              data-testid={`link-mobile-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
