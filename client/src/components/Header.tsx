import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Acasă" },
    { href: "/functionalitati", label: "Funcționalități" },
    { href: "/solutii", label: "Soluții" },
    { href: "/integrari", label: "Integrări" },
    { href: "/preturi", label: "Prețuri" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-cardzify-purple/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link href="/" data-testid="link-logo">
            Cardzify
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                location === item.href
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/preturi">
            <Button
              className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90 transition-all hover:-translate-y-0.5 shadow-lg"
              data-testid="button-cta-header"
            >
              Creează card gratuit
            </Button>
          </Link>
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
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 transition-colors ${
                location === item.href
                  ? "text-white font-semibold"
                  : "text-gray-300"
              }`}
              data-testid={`link-mobile-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
