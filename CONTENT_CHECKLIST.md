# Eqqa Enterprise Website — Content Checklist

This website is built with **Django** (backend) and **React** (frontend).
All unconfirmed business facts are marked with `[CONFIRM ...]` placeholders
or yellow "To confirm" / "Photo needed" badges in the interface.

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

## Information to confirm before launch

### Business identity
- [ ] Business name (currently: Eqqa Enterprise)
- [ ] Business category / tagline
- [ ] One-sentence value proposition
- [ ] Full business description / story
- [ ] Brand colours (current palette is a placeholder suggestion)

### Contact & location
- [ ] Phone number
- [ ] WhatsApp number (used for primary CTA)
- [ ] Address
- [ ] Email (optional)
- [ ] Facebook URL (optional)
- [ ] Instagram URL (optional)
- [ ] Opening hours
- [ ] Google Maps embed / location directions

### Trust evidence
- [ ] Years in business
- [ ] Review / rating
- [ ] Number of local customers / orders
- [ ] Certifications (e.g. halal, food handling)
- [ ] Real testimonials with customer permission

### Products / services
- [ ] Offering 1: name, description, key benefit, price, options, availability
- [ ] Offering 2: name, description, key benefit, price, options, availability
- [ ] Offering 3: name, description, key benefit, price, options, availability
- [ ] Additional offerings (add in Django admin)

### Photos
- [ ] Hero / main business photo
- [ ] Product photos (minimum one per offering)
- [ ] Store / location photo
- [ ] Behind-the-scenes photo
- [ ] Customer / event photo (with permission)

### Customer questions (FAQs)
- [ ] Location
- [ ] Opening hours
- [ ] Payment methods
- [ ] Delivery area / method
- [ ] Event orders
- [ ] Lead time / notice required
- [ ] Halal status
- [ ] Ordering process

### Why choose us
- [ ] Reason 1 with short explanation
- [ ] Reason 2 with short explanation
- [ ] Reason 3 with short explanation

## Notes
- Do not publish fake testimonials, reviews, prices, certifications, or claims.
- Replace every `[CONFIRM ...]` placeholder with verified information.
- Upload real business photos via the Django admin for Products and Gallery.
- After updating the React front-end, rebuild with `cd frontend && npm run build`.
