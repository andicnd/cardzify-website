import { z, ZodError } from "zod";

// Inline schema to avoid module resolution issues in Vercel
const contactFormSchema = z.object({
    name: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
    email: z.string().email("Email invalid"),
    phone: z.string().optional(),
    message: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere"),
});

interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    createdAt: Date;
}

const contactMessages: ContactMessage[] = [];

export default async function handler(req: any, res: any) {
    // Only handle POST requests to /api/contact
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

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
            console.log("Forwarding to Google Sheets:", sheetsUrl);
            try {
                const sheetsResponse = await fetch(sheetsUrl, {
                    method: 'POST',
                    body: JSON.stringify(validatedData),
                    headers: { 'Content-Type': 'application/json' },
                });
                const responseText = await sheetsResponse.text();
                console.log("Google Sheets response:", sheetsResponse.status, responseText);
            } catch (err) {
                console.error("Error forwarding to Google Sheets:", err);
            }
        } else {
            console.warn("GOOGLE_SHEETS_URL not configured");
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
}
