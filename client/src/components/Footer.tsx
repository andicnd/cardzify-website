import { Link } from "wouter";
import { Sparkles, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Acasă", href: "/" },
    { name: "Funcționalități", href: "/functionalitati" },
    { name: "Soluții", href: "/solutii" },
    { name: "Prețuri", href: "/preturi" },
  ];

  const resourceLinks = [
    { name: "Articole", href: "/articole" },
    { name: "Termeni și Condiții", href: "/termeni-si-conditii" },
    { name: "Politica de Confidențialitate", href: "/politica-de-confidentialitate" },
    { name: "Acord de Abonament", href: "/acord-de-abonament" },
  ];

  return (
    <footer className="bg-cardzify-purple text-white border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cardzify Brand */}
          <div className="space-y-4">
            <Link href="/" data-testid="link-footer-logo">
              <div className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md p-2 -ml-2 w-fit">
                <Sparkles className="w-6 h-6 text-cardzify-coral" data-testid="icon-footer-logo" />
                <span className="text-xl font-bold" data-testid="text-footer-brand">Cardzify</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm" data-testid="text-footer-tagline">
              Transformăm vizitatorii în clienți fideli.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61572880710815" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cardzify-coral transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/cardzify/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cardzify-coral transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.youtube.com/@Cardzify-z7" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cardzify-coral transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">Youtube</span>
              </a>
              <a href="https://www.tiktok.com/@cardzify" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cardzify-coral transition-colors">
                {/* Custom Tiktok Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>

          </div>

          {/* Navigare */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="heading-footer-navigare">Navigare</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`link-footer-${link.name.toLowerCase()}`}>
                    <span className="text-gray-300 hover:text-cardzify-coral transition-colors text-sm">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resurse */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="heading-footer-resources">Resurse</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`link-footer-${link.name.toLowerCase().replace(/\s/g, '-')}`}>
                    <span className="text-gray-300 hover:text-cardzify-coral transition-colors text-sm">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="heading-footer-contact">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-gray-300 hover:text-cardzify-coral transition-colors text-sm">
                    Contactează-ne
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm" data-testid="text-footer-copyright">
            © {currentYear} Cardzify. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
