import { MapPin, Star, Clock, Users } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { ProductCard } from "../components/ProductCard";
import { GalleryCard } from "../components/GalleryCard";
import { FAQItem } from "../components/FAQItem";
import { PlaceholderBadge } from "../components/PlaceholderBadge";

export function Home({ data }) {
  const { business, featured_products, gallery, faqs, why_choose } = data;

  const trustItems = [
    { icon: Star, label: business.review_rating, sublabel: "Rating" },
    { icon: Clock, label: business.years_in_business, sublabel: "In business" },
    { icon: Users, label: "Local customers", sublabel: "Served" },
  ].filter((item) => !item.label.startsWith("["));

  const topFAQs = faqs.slice(0, 5);
  const topGallery = gallery.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-category">{business.category}</p>
            <h1 id="hero-title" className="hero-title">
              {business.name}
            </h1>
            <p className="hero-tagline">{business.tagline}</p>
            <p className="hero-description">{business.description}</p>

            <div className="hero-location">
              <MapPin size={20} aria-hidden="true" />
              <span>{business.location}</span>
            </div>

            <div className="hero-actions">
              <CTAButton href={business.primary_cta_link} variant="primary">
                {business.primary_cta_label}
              </CTAButton>
              <CTAButton href="/products" variant="secondary" icon={false}>
                View menu
              </CTAButton>
            </div>
          </div>

          <div className="hero-image">
            {topGallery[0]?.image_url ? (
              <img
                src={topGallery[0].image_url}
                alt={topGallery[0].caption}
                className="hero-image-img"
              />
            ) : (
              <div className="hero-image-placeholder">
                <span>[REAL BUSINESS PHOTO NEEDED]</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      {trustItems.length > 0 && (
        <section className="trust-strip" aria-label="Trust evidence">
          <div className="container">
            <div className="trust-grid">
              {trustItems.map((item, idx) => (
                <div key={idx} className="trust-item">
                  <item.icon size={24} aria-hidden="true" />
                  <div>
                    <strong>{item.label}</strong>
                    <span className="text-muted">{item.sublabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured products */}
      <section className="section" aria-labelledby="products-title">
        <div className="container">
          <div className="section-title">
            <h2 id="products-title">Our Kuih & Snacks</h2>
            <p>
              A small selection of what we make. Prices and flavours to be
              confirmed before publishing.
            </p>
          </div>
          <div className="products-grid">
            {featured_products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                business={business}
              />
            ))}
          </div>
          <div className="text-center mt-3">
            <CTAButton href="/products" variant="secondary" icon={false}>
              See full menu
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section-alt" aria-labelledby="why-title">
        <div className="container">
          <div className="section-title">
            <h2 id="why-title">Why customers choose us</h2>
            <p>These reasons need to be confirmed with the business owner.</p>
          </div>
          <div className="why-grid">
            {why_choose.map((reason) => (
              <div key={reason.id} className="why-card card">
                <h3>{reason.title}</h3>
                <p>{reason.explanation}</p>
                {reason.title.startsWith("[") && (
                  <PlaceholderBadge text="To confirm" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section-title">
            <h2 id="gallery-title">Gallery</h2>
            <p>Real photos work better than stock images. Add business photos here.</p>
          </div>
          <div className="gallery-grid">
            {topGallery.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-3">
            <CTAButton href="/gallery" variant="secondary" icon={false}>
              View all photos
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-alt" aria-labelledby="how-title">
        <div className="container">
          <div className="section-title">
            <h2 id="how-title">How to order</h2>
            <p>Simple steps for first-time customers.</p>
          </div>
          <ol className="steps-list">
            <li className="step">
              <span className="step-number">1</span>
              <div>
                <h3>Choose your kuih or snack</h3>
                <p>Browse our menu and pick what you like.</p>
              </div>
            </li>
            <li className="step">
              <span className="step-number">2</span>
              <div>
                <h3>Message us on WhatsApp</h3>
                <p>Tell us what you want and when you need it.</p>
              </div>
            </li>
            <li className="step">
              <span className="step-number">3</span>
              <div>
                <h3>Confirm your order</h3>
                <p>We confirm availability, price, and pickup or delivery.</p>
              </div>
            </li>
            <li className="step">
              <span className="step-number">4</span>
              <div>
                <h3>Pick up or receive delivery</h3>
                <p>Collect your order or arrange delivery. [CONFIRM DELIVERY AREA]</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-title">
            <h2 id="faq-title">Questions & answers</h2>
            <p>Quick answers to common customer questions.</p>
          </div>
          <div className="faq-list">
            {topFAQs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="text-center mt-3">
            <CTAButton href="/contact" variant="secondary" icon={false}>
              Still have questions? Contact us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta" aria-labelledby="final-cta-title">
        <div className="container text-center">
          <h2 id="final-cta-title">Ready to order?</h2>
          <p className="mb-3">
            Message us on WhatsApp to check availability and place your order.
          </p>
          <CTAButton href={business.primary_cta_link} variant="primary">
            {business.primary_cta_label}
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
