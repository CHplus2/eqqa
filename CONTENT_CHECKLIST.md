# Eqqa Enterprise Website — Content Checklist

This website is built with **Django** (backend) and **React** (frontend).
Confirmed information from the beneficiary interview is live. Anything not
confirmed is marked `[TO BE CONFIRMED]` or shown with a yellow
"To confirm" / "Photo needed" badge in the interface.

## How to run locally

1. Start the Django backend:
   ```bash
   .\venv\Scripts\Activate.ps1
   python manage.py runserver
   ```
2. (Optional) Start the React dev server for front-end changes:
   ```bash
   cd frontend
   npm run dev
   ```
3. Or view the built site through Django at: http://127.0.0.1:8000/
4. Edit content in the Django admin: http://127.0.0.1:8000/admin/
   - Username: `admin`
   - Password: `password123`

## Confirmed information (live on the site)

- [x] Business name: Eqqa Enterprise
- [x] Business identity: Produk dari Sibu, Sarawak
- [x] Location: Sibu, Sarawak
- [x] Products & prices: Kuih Cuan RM25, Kuih Jala RM25, Kacang Pedas Manis RM10,
      Kerepek Pisang Panggang RM25, Kerepek Ubi Panggang RM25, Kuih Meruku RM15
- [x] Target customers: adults, children, families, and groups of friends
- [x] Selling points: authentic traditional taste, handmade, made carefully with
      attention to customer satisfaction, affordable pricing
- [x] Product claims: 100% fresh ingredients, no preservatives
- [x] Ordering channels: WhatsApp, TikTok, events
- [x] Phone numbers: 011-1408 0050 and 013-566 9234
- [x] Delivery: self-delivery, runner, delivery by bus
- [x] Brand colours: green (freshness) and gold (quality and success)
- [x] Logo meaning: leaf = fresh/natural, arrow = business growth
- [x] Achievement: Champion, Kuih Cap competition (Sarawak district level),
      Wellbest Carnival 2025
- [x] Social media names: Facebook — Erica Sandra, TikTok — Eqqa Enterprise

## Still [TO BE CONFIRMED]

- [ ] Exact physical business address
- [ ] Exact Facebook URL
- [ ] Exact TikTok URL
- [ ] Which phone number is the primary WhatsApp ordering number
- [ ] Whether all six products are available all the time
- [ ] Whether the listed prices are per package, container, etc.
- [ ] Exact delivery areas
- [ ] Delivery fees
- [ ] Exact details/name of the "Kuih Cap" competition
- [ ] Whether "Produk dari Sibu Sarawak" is an official tagline
- [ ] Whether the website should support online ordering or simply direct
      customers to WhatsApp
- [ ] Business opening hours, if applicable
- [ ] Halal status
- [ ] Payment methods
- [ ] Real logo file (currently a leaf icon + text treatment)
- [ ] Real photos: each product, owner/team, behind-the-scenes, events
      (including Wellbest Carnival 2025)

## Notes
- Do not publish fake testimonials, reviews, certifications, or claims.
- Upload real business photos via the Django admin for Products and Gallery.
- After updating the React front-end, rebuild with `cd frontend && npm run build`.
