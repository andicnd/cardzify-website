# Cardzify Design Guidelines

## Design Approach

**Reference-Based Approach: Modern SaaS + E-commerce Hybrid**

Drawing inspiration from:
- **Stripe**: Clean interfaces, strategic use of accent colors, trust-building elements
- **Linear**: Premium typography, smooth animations, dark navigation
- **Shopify**: Product showcase patterns, pricing tables, business solutions
- **Romanian Market Context**: Professional yet approachable, trust-focused

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Deep Purple: `#2C2645` - Navigation, headers, premium elements
- Warm Coral: `#F25C54` - Primary CTAs, active states, brand accents
- Warm Tan: `#B49272` - Card backgrounds, secondary elements
- Light Gray: `#F8F9FA` - Page backgrounds, subtle sections

**Supporting Colors:**
- White: `#FFFFFF` - Content cards, clean backgrounds
- Dark Text: `#1E1B30` - Primary text content
- Gray Text: `#6B7280` - Secondary text, descriptions
- Border Gray: `#E5E7EB` - Dividers, card borders

**Dark Mode:** Not required - light theme only for trust and approachability in Romanian market.

### B. Typography

**Font Family:** Inter (Google Fonts)
- Headings: 700-800 weight
- Subheadings: 600 weight  
- Body: 400-500 weight
- Buttons/CTAs: 600 weight

**Scale:**
- Hero H1: `text-4xl md:text-6xl` (36-60px)
- Section H2: `text-3xl md:text-4xl` (30-36px)
- Card H3: `text-xl` (20px)
- Body: `text-base md:text-lg` (16-18px)
- Small: `text-sm` (14px)

### C. Layout System

**Spacing Units:** Tailwind spacing - consistently use `4, 6, 8, 12, 16, 20` for rhythm
- Section padding: `py-20` (desktop), `py-12` (mobile)
- Container padding: `px-6`
- Card padding: `p-6` to `p-8`
- Element gaps: `gap-4`, `gap-6`, `gap-8`

**Container Widths:**
- Main container: `max-w-7xl mx-auto`
- Content sections: `max-w-3xl mx-auto` for text-heavy areas
- Full-width sections: `w-full` with inner containers

**Grid Patterns:**
- Features: `grid md:grid-cols-3 gap-8`
- Solutions: `lg:grid-cols-2 gap-16`
- Pricing: `grid md:grid-cols-3 gap-6`
- Mobile: Always stack to single column

### D. Component Library

**Navigation:**
- Fixed header: `bg-[#2C2645]/90 backdrop-blur-md` with shadow
- Logo size: `text-2xl font-bold` with emoji ✨
- Nav links: Gray-300 default, white on hover/active
- Mobile menu: Full-width dropdown, same background

**Cards:**
- Loyalty Card Display: Aspect ratio `1.586:1`, rounded-2xl, shadow-2xl
- Feature Cards: White background, `rounded-xl shadow-sm`, hover lift effect
- Pricing Cards: Border-2, hover scale(1.05), transition duration-300
- Business Selection Cards: Border-2, text-left, hover bg-gray-50

**Buttons:**
- Primary CTA: `bg-[#F25C54]` with hover lift (`translateY(-2px)`) and shadow
- Secondary: White with border, hover bg-gray-100
- Wallet Buttons: Black (Apple), White with border (Google)
- All buttons: `rounded-lg`, generous padding `px-8 py-3`

**Interactive Card Customization:**
- Card Preview: Real-time color changes, smooth transitions (duration-500)
- Type Selector: Pills/tabs with active state styling
- Business Buttons: Active state with coral border and light background
- Visual feedback on all interactions

**Forms:**
- Input fields: White background, border focus state with coral accent
- Labels: Semibold, clear hierarchy
- Validation: Inline error messages in red
- Submit buttons: Full-width on mobile, standard width desktop

**Pricing Tables:**
- Three-column layout (Starter, Professional, Enterprise)
- Feature comparison checkmarks/crosses
- Highlighted "recommended" plan with border accent
- Clear CTA buttons in each column

### E. Animations

**Minimal but Purposeful:**
- Page transitions: FadeIn animation (0.5s ease-in-out)
- Button hovers: Lift effect with shadow (0.3s ease)
- Card hovers: Scale 1.05 (0.3s ease)
- Card color changes: Smooth transition (duration-500)
- **No** scroll-triggered animations
- **No** complex parallax effects

## Page-Specific Requirements

### Homepage
- Hero with dotted pattern background (`radial-gradient`)
- Interactive card customization section (2-column: preview + controls)
- Business type selector (3 options: cafenele, saloane, restaurante)
- Benefits section (3-column feature grid)
- Social proof section (testimonials in purple cards)
- Final CTA section

### Features Page (Funcționalități)
- Showcase all 8 card types with visual examples
- Feature grid with icons (use emoji for consistency)
- Wallet integration explanation
- Analytics/reporting capabilities
- Notification system details

### Solutions Page (Soluții)
- Tab system for different industries (Cafenele, Saloane, Restaurante, etc.)
- Industry-specific messaging and card examples
- Case study snippets if available
- ROI/benefit highlights per industry

### Integrations Page (Integrări)
- Logo grid of integration partners
- Connection flow diagrams
- API documentation link
- Trust badges/certifications

### Pricing Page (Prețuri)
- 3-tier pricing table with feature comparison
- Annual/monthly toggle
- Clear feature lists per plan
- FAQ section below pricing
- Money-back guarantee badge

### Contact Page
- Left: Contact form (Nume, Email, Telefon, Mesaj)
- Right: Contact information, office hours, location if applicable
- Alternative contact methods (email, phone)
- Response time expectation

## Images

**Hero Section:** 
- Use a modern, professional image showing a mobile phone with a loyalty card displayed on screen
- Context: Coffee shop or salon setting, bright and inviting
- Placement: Right side of hero on desktop, above text on mobile
- Style: Clean, high-quality photography with soft shadows

**Card Previews:**
- Generate realistic mockups for each card type showing the actual card interface
- Include Apple/Google Wallet UI context
- Show stamps/points visualization clearly

**Integration Logos:**
- Partner logos in a clean grid (2-3 rows, 4-6 per row)
- Consistent sizing and spacing
- Grayscale with color on hover

**Business Solutions:**
- Authentic photos of actual businesses (cafes, salons, restaurants)
- Romanian context if possible
- Professional quality, well-lit

## Quality Standards

- All text in Romanian language
- Maintain professional, trustworthy aesthetic suitable for Romanian B2B market
- Ensure WCAG AA contrast ratios (already met with current palette)
- Mobile-first responsive design
- Fast loading: minimize animation, optimize images
- Clear hierarchy: bold headings, readable body text, obvious CTAs
- Consistent spacing rhythm throughout all pages