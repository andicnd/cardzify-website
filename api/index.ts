import express, { type Request, Response, NextFunction } from "express";
import { contactFormSchema } from "../shared/schema";
import { ZodError } from "zod";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form storage (in-memory for serverless)
interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    createdAt: Date;
}

const contactMessages: ContactMessage[] = [];

// API Routes
app.post("/api/contact", async (req, res) => {
    try {
        const validatedData = contactFormSchema.parse(req.body);

        const contactMessage: ContactMessage = {
            ...validatedData,
            id: Math.random().toString(36).substring(7),
            createdAt: new Date(),
        };

        contactMessages.push(contactMessage);

        // Forward to Google Sheets if URL is configured
        const sheetsUrl = process.env.GOOGLE_SHEETS_URL;
        if (sheetsUrl) {
            fetch(sheetsUrl, {
                method: 'POST',
                body: JSON.stringify(validatedData),
                headers: { 'Content-Type': 'application/json' },
            }).catch(err => console.error("Error forwarding to Google Sheets:", err));
        }

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

// Serve static files from dist/public
const distPath = path.join(process.cwd(), "dist", "public");
app.use(express.static(distPath));

// Serve index.html for all other routes (SPA)
app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

export default app;
