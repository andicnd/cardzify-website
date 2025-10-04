import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);

  return httpServer;
}
