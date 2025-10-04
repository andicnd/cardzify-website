# Cardzify - Soluții de Loialitate Digitale

## Overview

Cardzify is a Romanian-language loyalty card platform that enables businesses to create and manage digital loyalty cards for their customers. The platform offers customizable cards compatible with Apple Wallet and Google Wallet, eliminating the need for physical cards or additional mobile apps.

## Recent Changes

**Initial Implementation (2024)**
- Built complete frontend with interactive card customization
- Implemented multi-page SPA with smooth navigation
- Created responsive mobile menu and design
- Added contact form with validation

## User Preferences

- **Language**: Romanian (all UI text in Romanian)
- **Design**: Modern, professional SaaS aesthetic with custom color palette
- **Colors**: Purple (#2C2645), Coral (#F25C54), Tan (#B49272), Light Gray (#F8F9FA)
- **Typography**: Inter font family throughout

## Project Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with Shadcn UI components
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for data fetching

### Backend
- **Server**: Express.js
- **Storage**: In-memory storage (MemStorage)
- **Validation**: Zod schemas

### Key Features
1. **Interactive Card Customization**: Real-time preview of loyalty cards with business-specific designs
2. **8 Card Types**: Stamps, Points, Value, Discount, Membership, Events, Combo, Vouchers
3. **Business Solutions**: Tailored for cafes, salons, restaurants, retail, fitness, and services
4. **Contact Form**: With validation and submission handling
5. **Responsive Design**: Mobile-first with adaptive layouts
6. **Multi-page Navigation**: Home, Features, Solutions, Integrations, Pricing, Contact

### Pages
- **Home** (`/`): Hero section, interactive card preview, benefits, testimonials
- **Pricing** (`/preturi`): 3-tier pricing (Start free, Pro 129 RON, Enterprise custom)
- **Features** (`/functionalitati`): Feature showcase and 8 card types
- **Solutions** (`/solutii`): Industry-specific solutions with tab navigation
- **Integrations** (`/integrari`): Integration partners display
- **Contact** (`/contact`): Contact form and company information

## Data Models

### ContactForm
```typescript
{
  name: string (min 2 chars)
  email: string (valid email)
  phone?: string (optional)
  message: string (min 10 chars)
}
```

## Color Palette

- **Primary Purple**: `#2C2645` - Navigation, headers
- **Coral/Pink**: `#F25C54` - Primary CTAs, accents
- **Warm Tan**: `#B49272` - Card backgrounds
- **Light Gray**: `#F8F9FA` - Page backgrounds

## Running the Project

The workflow "Start application" runs `npm run dev` which starts both the Express backend and Vite frontend on the same port.
