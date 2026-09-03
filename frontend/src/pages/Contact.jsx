import { MapPin, Phone, MessageCircle, Clock, Truck, Globe } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { PlaceholderBadge } from "../components/PlaceholderBadge";

export function Contact({ data }) {
  const { business } = data;

  const hasFacebookUrl = business.social_facebook && !business.social_facebook.startsWith("[");
  const hasTiktokUrl = business.social_tiktok && !business.social_tiktok.startsWith("[");
  const whatsappConfirmed = business.whatsapp && !business.whatsapp.startsWith("[");

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Contact {business.name}</h1>
          <p className="page-hero-lead">
            Order or ask questions through {business.ordering_channels}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card card">
            <h2>WhatsApp us</h2>
            {whatsappConfirmed ? (
              <>
                <p className="text-muted">The easiest way to order.</p>
                <CTAButton href={business.primary_cta_link} variant="primary">
                  {business.primary_cta_label}
                </CTAButton>
              </>
            ) : (
              <>
                <p className="text-muted">
                  The easiest way to order. WhatsApp line:
                </p>
                <p>
                  <PlaceholderBadge text="To confirm" />{" "}
                  <span className="placeholder-text">
                    Which number is the primary WhatsApp ordering number
                  </span>
                </p>
              </>
            )}
          </div>

          <div className="contact-card card">
            <h2>Call us</h2>
            <p className="text-muted">Speak to us directly:</p>
            <a href={`tel:${business.phone}`} className="contact-link">
              <Phone size={20} aria-hidden="true" />
              {business.phone}
            </a>
            {business.phone_secondary && (
              <a href={`tel:${business.phone_secondary}`} className="contact-link">
                <Phone size={20} aria-hidden="true" />
                {business.phone_secondary}
              </a>
            )}
          </div>

          <div className="contact-card card">
            <h2>Find us</h2>
            <div className="contact-link">
              <MapPin size={20} aria-hidden="true" />
              <span>
                {business.location}
              </span>
            </div>
            <p className="placeholder-text mt-1">
              <PlaceholderBadge text="To confirm" /> Exact business address
            </p>
            <div className="contact-link">
              <Clock size={20} aria-hidden="true" />
              <span>{business.opening_hours}</span>
            </div>
          </div>

          <div className="contact-card card">
            <h2>Delivery</h2>
            <div className="contact-link">
              <Truck size={20} aria-hidden="true" />
              <span>{business.delivery_methods}</span>
            </div>
            <p className="placeholder-text mt-1">
              <PlaceholderBadge text="To confirm" /> Delivery areas and fees
            </p>
          </div>

          <div className="contact-card card">
            <h2>Social media</h2>
            {hasFacebookUrl ? (
              <a
                href={business.social_facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Globe size={20} aria-hidden="true" />
                Facebook: {business.facebook_name}
              </a>
            ) : (
              <div className="contact-link">
                <Globe size={20} aria-hidden="true" />
                <span>
                  Facebook: {business.facebook_name}{" "}
                  <PlaceholderBadge text="URL to confirm" />
                </span>
              </div>
            )}
            {hasTiktokUrl ? (
              <a
                href={business.social_tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Globe size={20} aria-hidden="true" />
                TikTok: {business.tiktok_name}
              </a>
            ) : (
              <div className="contact-link">
                <Globe size={20} aria-hidden="true" />
                <span>
                  TikTok: {business.tiktok_name}{" "}
                  <PlaceholderBadge text="URL to confirm" />
                </span>
              </div>
            )}
            <p className="text-muted mt-1">
              You can also order through TikTok.
            </p>
          </div>
        </div>

        <div className="container map-section">
          <h2 className="text-center">Find us in {business.location}</h2>
          <div className="map-placeholder">
            <MapPin size={32} aria-hidden="true" />
            <p>[TO BE CONFIRMED: map / location embed]</p>
            <p className="text-muted">
              A map or directions will be added once the exact address is confirmed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
