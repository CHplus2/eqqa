import { MapPin, Trophy, Leaf, ShieldCheck } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { ProductCard } from "../components/ProductCard";
import { GalleryCard } from "../components/GalleryCard";
import { FAQItem } from "../components/FAQItem";

export function Home({ data }) {
  const { business, featured_products, gallery, faqs, why_choose } = data;

  // Trust strip uses only confirmed evidence from the beneficiary interview.
  const trustItems = [
    { icon: Trophy, label: business.achievement, sublabel: "Award" },
    { icon: Leaf, label: business.claim_1, sublabel: "Product claim" },
    { icon: ShieldCheck, label: business.claim_2, sublabel: "Product claim" },
  ].filter(
    (item) => item.label && !item.label.startsWith("[")
  );

  const topFAQs = faqs.slice(0, 5);
  const topGallery = gallery.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-category">Produk dari Sibu, Sarawak</p>
            <h1 id="hero-title" className="hero-title">
              {business.name}
            </h1>
            <p className="hero-tagline">{business.tagline}</p>
            <p className="hero-description">{business.description}</p>
            <p className="hero-audience">
              For {business.target_customers.toLowerCase()}.
            </p>

            <div className="hero-location">
              <MapPin size={20} aria-hidden="true" />
              <span>{business.location}</span>
            </div>

            <div className="hero-actions">
              <CTAButton href={business.primary_cta_link} variant="primary">
                {business.primary_cta_label}
              </CTAButton>
              <CTAButton href="/products" variant="secondary" icon={false}>
                View products
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

      {/* Trust strip — confirmed evidence only */}
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
            <h2 id="products-title">Our Authentic Traditional Products</h2>
            <p>
              Handmade with 100% fresh ingredients and no preservatives.
              Discover our range from Sibu, Sarawak.
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
              See all products
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why choose us — confirmed selling points */}
      <section className="section section-alt" aria-labelledby="why-title">
        <div className="container">
          <div className="section-title">
            <h2 id="why-title">Why customers choose us</h2>
          </div>
          <div className="why-grid">
            {why_choose.map((reason) => (
              <div key={reason.id} className="why-card card">
                <h3>{reason.title}</h3>
                <p>{reason.explanation}</p>
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
            <p>Real photos of our handmade products and events.</p>
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

      {/* How to order — confirmed channels and delivery methods */}
      <section className="section section-alt" aria-labelledby="how-title">
        <div className="container">
          <div className="section-title">
            <h2 id="how-title">How to order</h2>
            <p>Order through {business.ordering_channels}.</p>
          </div>
          <ol className="steps-list">
            <li className="step">
              <span className="step-number">1</span>
              <div>
                <h3>Choose your product</h3>
                <p>Browse our range of authentic traditional kuih and snacks.</p>
              </div>
            </li>
            <li className="step">
              <span className="step-number">2</span>
              <div>
                <h3>Contact us</h3>
                <p>Reach us on WhatsApp or TikTok, or find us at events.</p>
              </div>
            </li>
            <li className="step">
              <span className="step-number">3</span>
              <div>
                <h3>Confirm your order</h3>
                <p>We confirm availability and arrange your delivery method.</p>
              </div>
            </li>
            <li className="step">
              <span className="step-number">4</span>
              <div>
                <h3>Receive your order</h3>
                <p>
                  {business.delivery_methods}. [TO BE CONFIRMED: delivery areas
                  and fees]
                </p>
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
            Contact us to check availability and place your order.
          </p>
          <CTAButton href={business.primary_cta_link} variant="primary">
            {business.primary_cta_label}
          </CTAButton>
          <p className="final-cta-phones">
            {business.phone}
            {business.phone_secondary && ` / ${business.phone_secondary}`}
          </p>
        </div>
      </section>
    </main>
  );
}
