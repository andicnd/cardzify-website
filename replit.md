# Cardzify - Soluții de Loialitate Digitale

## Overview

Cardzify is a Romanian-language loyalty card platform that enables businesses to create and manage digital loyalty cards for their customers. The platform offers customizable cards compatible with Apple Wallet and Google Wallet, eliminating the need for physical cards or additional mobile apps.

## Recent Changes

**Solutions Page Expansion (October 2025)**
- Added 3 new business types to Solutions page: Hoteluri/Pensiuni, Studiouri de Tatuaje, Vape Shops
- Each new category has custom icon (Hotel, Paintbrush, Cloud) and 4 tailored benefits
- Total 9 industries now supported with tab navigation
- Maintained consistent design and functionality across all categories

**Footer Component (October 2025)**
- Added professional footer with 4-column layout matching brand design
- Included sections: Cardzify brand (logo + tagline), Navigare (all site pages), Contact
- Footer appears on all pages with sticky bottom positioning
- All footer links use wouter for instant SPA navigation
- Design: Purple background (#2C2645), coral hover effects (#F25C54)

**Performance Optimization & SEO (October 2025)**
- Optimized navigation speed with dual strategy: SPA performance + SEO benefits
- Reintroduced wouter for instant client-side routing (no page reloads)
- Maintained server-side meta tag injection for SEO when accessing URLs directly
- Added client-side meta tag updates via useEffect when navigating in app
- Result: Instant navigation between pages while preserving perfect SEO

**Multi-page Website & SEO Optimization (October 2025)**
- Transformed from SPA to multi-page website with proper SEO
- Implemented server-side meta tag injection for production (unique title, description, Open Graph tags per page)
- Removed client-side routing (wouter) and replaced with standard HTML navigation
- Added SEO-optimized routes in Express that serve HTML with page-specific metadata
- Client-side meta tag fallback for development mode

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
- **Routing**: Wouter for instant SPA navigation
- **Styling**: Tailwind CSS with Shadcn UI components
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for data fetching
- **SEO**: Dual strategy - server-side meta tags for direct access (SEO), client-side updates for in-app navigation (performance)

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
- **Solutions** (`/solutii`): Industry-specific solutions with tab navigation (9 industries: Cafenele, Saloane, Restaurante, Retail, Fitness, Servicii, Hoteluri/Pensiuni, Studiouri de Tatuaje, Vape Shops)
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
