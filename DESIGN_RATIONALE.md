# Eqqa Enterprise Website — Design Rationale

## Project overview
- **Business:** Eqqa Enterprise
- **Category:** Kuih & Snacks
- **Stack:** Django backend + React frontend
- **Goal:** A simple, trustworthy, mobile-first website that helps real customers understand the business, find answers, and order via WhatsApp.

## 1. Website sitemap
```
Home
├── Hero
├── Trust strip
├── Featured products / kuih
├── Why choose us
├── Gallery
├── How to order
├── FAQ
├── Final CTA
└── Footer

About
Products (full catalogue)
Gallery (all photos)
Contact
```

## 2. Homepage wireframe structure
1. **Header:** Logo + Home / About / Products / Gallery / Contact + "Order on WhatsApp" CTA
2. **Hero:** Business name, tagline, description, location, primary + secondary CTAs, hero image placeholder
3. **Trust strip:** Confirmed rating, years in business, local customers
4. **Products:** Top 3 featured offerings with name, benefit, price, availability, enquire CTA
5. **Why choose us:** 3 concise reasons
6. **Gallery:** 4 real-photo placeholders
7. **How it works:** 4-step ordering flow
8. **FAQ:** Expandable questions and answers
9. **Final CTA:** Repeat primary action
10. **Footer:** Contact, location, hours, social links

## 3. Inner page structures
- **About:** Who we are, beliefs, trust evidence, contact summary, store/team photo
- **Products:** Full catalogue grid with details and enquire CTAs
- **Gallery:** Visual proof grid (products, store, behind-the-scenes, events)
- **Contact:** WhatsApp CTA, phone, address, hours, email/social, map placeholder

## 4. Visual hierarchy
1. Real business photos
2. Real products / services
3. Real customer proof
4. Brand graphics
5. Decorative elements

Hero is benefit-first (what, who, where, why, action). Technical details come after benefits.

## 5. Responsive behavior
- **Mobile (390px):** Single column, sticky header with hamburger, large touch targets, vertical content flow, prominent WhatsApp CTA
- **Tablet (820px):** 2-column grids, header nav visible, larger images
- **Desktop (1280px):** 3–4 column grids, side-by-side hero, contained max-width 1200px

## 6. Mini brand system
See `frontend/src/index.css` for the full variable system. Key choices:
- Warm earth palette (placeholder until brand colours confirmed)
- Rounded pill buttons for approachability
- System fonts for speed and familiarity
- Rounded real-photo cards
- Lucide outline icons

## 7. CTA system
Primary action: **"Order on WhatsApp"**
Repeated in:
- Header (desktop + mobile)
- Hero
- Each product card
- Final CTA section
- Footer

Same wording everywhere to reduce cognitive load.

## 8. Recommended components
- `Header` with mobile menu
- `Footer`
- `CTAButton`
- `ProductCard`
- `GalleryCard`
- `FAQItem`
- `PlaceholderBadge` (flags unconfirmed content)

## 9. Suggested microcopy
- Hero: "Home-style kuih and snacks for your everyday cravings."
- CTA: "Order on WhatsApp"
- Product card CTA: "Enquire"
- FAQ intro: "Quick answers to common customer questions."
- Final CTA: "Ready to order? Message us on WhatsApp."

## 10. Placeholder / content checklist
See `CONTENT_CHECKLIST.md`.

## 11. UX problems being solved

| Customer problem | Design decision | Business value |
|---|---|---|
| "I don't know what they sell" | Hero immediately states business name, category, tagline, and top 3 products | Visitors understand the business in 5–10 seconds |
| "I can't find the price" | Price shown on every product card; placeholder badge when unconfirmed | Reduces uncertainty before contacting |
| "I don't know where they are" | Location appears in hero, footer, contact page, and FAQ | Customers can decide if delivery/pickup is feasible |
| "How do I order?" | Repeated "Order on WhatsApp" CTA and a 4-step "How to order" section | Lowers friction from discovery to purchase |
| "Can I trust them?" | Trust strip, real photo gallery, FAQ, and honest placeholders | Builds credibility without fake claims |
| "The site is hard to use on my phone" | Mobile-first single-column layout, large buttons, sticky header | Better experience for local mobile users |

## 12. Final high-fidelity concept
The built website is the concept. Run `python manage.py runserver` and open http://127.0.0.1:8000/ to view it.

## Trade-offs
- **No fake content:** All unconfirmed facts are placeholders, so the site looks unfinished until the owner confirms details. This is intentional.
- **Single API endpoint:** Content is served via one `/api/site-data/` endpoint for hackathon speed, instead of separate endpoints per section.
- **No built-in order form:** Orders route to WhatsApp because the target customers prefer direct contact.
- **No real photos by default:** Image upload is supported through Django admin; real photos should replace placeholders before launch.
