import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import fs from "fs";
import path from "path";

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
  },
  '/termeni-si-conditii': {
    title: 'Termeni și Condiții - Cardzify',
    description: 'Citește termenii și condițiile de utilizare a platformei Cardzify pentru carduri de loialitate digitale.'
  },
  '/politica-de-confidentialitate': {
    title: 'Politica de Confidențialitate - Cardzify',
    description: 'Află cum Cardzify protejează și gestionează datele tale personale în conformitate cu GDPR.'
  },
  '/articole': {
    title: 'Articole și Resurse - Cardzify',
    description: 'Descoperă articole utile, sfaturi și cele mai bune practici pentru programele de loialitate digitale.'
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // SEO-optimized page serving for production
  const servePageWithMeta = async (req: any, res: any, next: any) => {
    // In development, let Vite handle everything (client-side meta tags will work)
    if (app.get("env") === "development") {
      return next();
    }

    // In production, serve HTML with proper meta tags for SEO
    const url = req.path;
    const metadata = pageMetadata[url] || pageMetadata['/'];

    try {
      const distPath = path.resolve(import.meta.dirname, "public");
      const indexPath = path.resolve(distPath, "index.html");

      let html = await fs.promises.readFile(indexPath, "utf-8");
      
      // Replace title and description
      html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${metadata.title}</title>`
      );
      html = html.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${metadata.description}" />`
      );
      
      // Add Open Graph and Twitter tags
      const ogTags = `
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://cardzify.ro${url}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${metadata.title}" />
    <meta name="twitter:description" content="${metadata.description}" />`;
      
      html = html.replace('</head>', `${ogTags}\n  </head>`);
      
      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (error) {
      next();
    }
  };
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Mesajul a fost trimis cu succes!",
        data: contactMessage,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Datele furnizate sunt invalide",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "A apărut o eroare la trimiterea mesajului",
        });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({
        success: true,
        data: messages,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "A apărut o eroare la încărcarea mesajelor",
      });
    }
  });

  // Register SEO routes for each page (production only)
  app.get('/', servePageWithMeta);
  app.get('/functionalitati', servePageWithMeta);
  app.get('/solutii', servePageWithMeta);
  app.get('/integrari', servePageWithMeta);
  app.get('/preturi', servePageWithMeta);
  app.get('/contact', servePageWithMeta);
  app.get('/termeni-si-conditii', servePageWithMeta);
  app.get('/politica-de-confidentialitate', servePageWithMeta);
  app.get('/articole', servePageWithMeta);

  const httpServer = createServer(app);

  return httpServer;
}
