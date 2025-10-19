# Cardzify - Soluții de Loialitate Digitale

## Overview

Cardzify is a Romanian-language loyalty card platform that enables businesses to create and manage digital loyalty cards for their customers. The platform offers customizable cards compatible with Apple Wallet and Google Wallet, eliminating the need for physical cards or additional mobile apps.

## Recent Changes

**Pricing Page Redesign (October 2025)**
- Redesigned pricing page with single plan model: "Cardzify Complete"
- Interactive billing period selector with 3 options:
  - Lunar: 349 RON/lună
  - Trimestrial: 899 RON/trimestru (Economisești 11%)
  - Anual: 2.999 RON/an (Economisești 28%)
- Dynamic price updates based on selected billing period
- Billing selector uses Card components with hover-elevate and active-elevate-2
- Complete feature list: 10 features displayed in 2-column grid
- CTAs: "Începe perioada de probă gratuită" and "Contactează vânzările"
- Fully compliant with Shadcn component usage guidelines (no custom hover states)
- Responsive design for mobile and desktop

**CTA Buttons Enhancement (October 2025)**
- Replaced Apple/Google Wallet buttons in "Direct în telefon, fără aplicații" section with conversion-focused CTAs:
  - "Începe gratuit" button (coral, links to /preturi)
  - "Instalează card demo" button (purple outline, links to /contact)
- Added CTA section at bottom of Solutions page:
  - "Vezi prețurile" button (links to /preturi)
  - "Contactează-ne" button (links to /contact)
  - Heading: "Gata să îți transformi clienții în fani?"
- Added CTA section at bottom of Features page:
  - "Instalează card demo" button (coral, links to /contact)
  - "Vezi planurile" button (purple outline, links to /preturi)
  - Heading: "Începe acum și transformă clienții în fani"
- All "Instalează card demo" buttons throughout the site now link to /contact for demo requests
- Responsive design: flex-col sm:flex-row for mobile/desktop compatibility
- Consistent styling using Cardzify brand colors (coral #F25C54, purple #2C2645)

**Home Page Business Showcase Enhancement (October 2025)**
- Expanded business type showcase from 3 to all 9 industries (Cafenele, Saloane, Restaurante, Retail, Fitness, Servicii, Hoteluri, Tatuaje, Vape Shops)
- Compact phone mockup design: loyalty card displayed inside realistic device frame (max-w-xs, aspect 9/16) with notch and bezels
- Implemented card type pairing system: each business automatically shows most suitable card type
- Business selector: single horizontal line with custom coral scrollbar (scrollbar-thin class), pill-style buttons (rounded-full), all 9 on same line
- Compact loyalty card: reduced padding (p-4), smaller fonts (text-lg/xs), tighter element spacing for proportional display
- Card details panel with two prominent buttons:
  - "Instalează card demo" (purple background, full width)
  - "Descoperă alte carduri" (coral outline, links to /functionalitati)
- Redesigned wallet section: compact grid layout with QR code (left) and wallet buttons (right)
  - Apple Wallet button: black background with Apple icon (Lucide), shadcn Button component
  - Google Wallet button: white with border, official Google "G" logo, shadcn Button outline variant
  - Both buttons: dark mode support, accessibility attributes (aria-hidden), complete test IDs
- Romanian interface throughout, including wallet instruction: "Folosește camera telefonului pentru a scana codul QR și a instala cardul de loialitate"
- Layout structure: business selector (top, scrollable) → phone mockup (left, compact) + card details (right, with buttons)
- Responsive design: horizontal scroll for selector, grid stacks vertically on mobile

**Features Page Card Types Update (October 2025)**
- Updated the 8 card types to match Cardzify's actual offerings
- Changed: Card cu Puncte → Card de Recompense
- Changed: Card cu Valoare → Card Cashback (with adapted description)
- Changed: Card pentru Evenimente → Card Coupon (single-use coupons for new customer acquisition)
- Changed: Card Combo → Card Multipass
- Changed: Card cu Vouchere → Gift Card (digital gift cards)
- Maintained: Card cu Ștampile, Card Discount, Card de Membru

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
2. **8 Card Types**: Ștampile, Recompense, Cashback, Discount, Membru, Coupon, Multipass, Gift Card
3. **Business Solutions**: Tailored for 9 industries including cafes, salons, restaurants, retail, fitness, services, hotels, tattoo studios, and vape shops
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
