import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Cum să creezi un program de loialitate de succes pentru cafeneaua ta",
      excerpt: "Descoperă cele mai bune practici pentru a construi un program de loialitate care să aducă clienții înapoi.",
      date: "15 octombrie 2025",
      author: "Echipa Cardzify",
      category: "Cafenele",
      readTime: "5 min citire",
    },
    {
      id: 2,
      title: "5 greșeli comune în programele de loialitate și cum să le eviți",
      excerpt: "Învață din experiența altora și optimizează-ți strategia de fidelizare a clienților.",
      date: "10 octombrie 2025",
      author: "Echipa Cardzify",
      category: "Business",
      readTime: "7 min citire",
    },
    {
      id: 3,
      title: "Carduri digitale vs. carduri fizice: Care sunt avantajele?",
      excerpt: "Comparație completă între cardurile tradiționale și soluțiile digitale moderne.",
      date: "5 octombrie 2025",
      author: "Echipa Cardzify",
      category: "Tehnologie",
      readTime: "6 min citire",
    },
  ];

  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-cardzify-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="heading-articles">
              Articole și Resurse
            </h1>
            <p className="text-lg text-gray-600" data-testid="text-articles-description">
              Descoperă sfaturi, strategii și cele mai bune practici pentru programele de loialitate.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((article, idx) => (
              <Card key={article.id} className="overflow-hidden hover-elevate" data-testid={`article-card-${idx}`}>
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-cardzify-coral to-cardzify-purple" data-testid={`article-image-${idx}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-cardzify-coral bg-cardzify-coral/10 px-3 py-1 rounded-full" data-testid={`article-category-${idx}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500" data-testid={`article-read-time-${idx}`}>
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2" data-testid={`article-title-${idx}`}>
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3" data-testid={`article-excerpt-${idx}`}>
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1" data-testid={`article-date-${idx}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1" data-testid={`article-author-${idx}`}>
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-cardzify-coral text-cardzify-coral hover:bg-cardzify-coral/10 group"
                    data-testid={`button-read-article-${idx}`}
                  >
                    Citește articolul
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="text-center max-w-2xl mx-auto bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" data-testid="heading-coming-soon">
              Articole noi în curând!
            </h2>
            <p className="text-gray-600 mb-6" data-testid="text-coming-soon">
              Lucrăm la conținut valoros pentru a vă ajuta să vă dezvoltați afacerea 
              cu ajutorul programelor de loialitate digitale.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-cardzify-coral text-white hover:bg-cardzify-coral/90"
                data-testid="button-subscribe"
              >
                Contactează-ne pentru mai multe informații
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
