import { type ContactForm } from "@shared/schema";
import { randomUUID } from "crypto";

export interface ContactMessage extends ContactForm {
  id: string;
  createdAt: Date;
}

export interface IStorage {
  createContactMessage(message: ContactForm): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.contactMessages = new Map();
  }

  async createContactMessage(message: ContactForm): Promise<ContactMessage> {
    const id = randomUUID();
    const contactMessage: ContactMessage = {
      ...message,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
