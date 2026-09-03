import { MapPin, Phone, MessageCircle, Clock, Mail, Globe } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { PlaceholderBadge } from "../components/PlaceholderBadge";

export function Contact({ data }) {
  const { business } = data;

  const hasPhone = business.phone && !business.phone.startsWith("[");
  const hasAddress = business.address && !business.address.startsWith("[");
  const hasHours = business.opening_hours && !business.opening_hours.startsWith("[");
  const hasEmail = business.email && !business.email.startsWith("[");
  const hasFacebook = business.social_facebook && !business.social_facebook.startsWith("[");
  const hasInstagram = business.social_instagram && !business.social_instagram.startsWith("[");

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Contact {business.name}</h1>
          <p className="page-hero-lead">
            Get in touch directly. We reply fastest on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card card">
            <h2>WhatsApp us</h2>
            <p className="text-muted">
              The easiest way to order or ask questions.
            </p>
            <CTAButton href={business.primary_cta_link} variant="primary">
              {business.primary_cta_label}
            </CTAButton>
          </div>

          <div className="contact-card card">
            <h2>Call us</h2>
            {hasPhone ? (
              <>
                <p className="text-muted">Speak to us directly.</p>
                <a href={`tel:${business.phone}`} className="contact-link">
                  <Phone size={20} aria-hidden="true" />
                  {business.phone}
                </a>
              </>
            ) : (
              <p className="placeholder-text">
                <PlaceholderBadge text="To confirm" /> Phone number needed.
              </p>
            )}
          </div>

          <div className="contact-card card">
            <h2>Visit us</h2>
            {hasAddress ? (
              <>
                <p className="text-muted">Find us at:</p>
                <div className="contact-link">
                  <MapPin size={20} aria-hidden="true" />
                  {business.address}
                </div>
              </>
            ) : (
              <p className="placeholder-text">
                <PlaceholderBadge text="To confirm" /> Address needed.
              </p>
            )}
            {hasHours && (
              <div className="contact-link">
                <Clock size={20} aria-hidden="true" />
                {business.opening_hours}
              </div>
            )}
          </div>

          <div className="contact-card card">
            <h2>Email & social</h2>
            {hasEmail && (
              <a href={`mailto:${business.email}`} className="contact-link">
                <Mail size={20} aria-hidden="true" />
                {business.email}
              </a>
            )}
            {hasFacebook && (
              <a
                href={business.social_facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Globe size={20} aria-hidden="true" />
                Facebook
              </a>
            )}
            {hasInstagram && (
              <a
                href={business.social_instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Globe size={20} aria-hidden="true" />
                Instagram
              </a>
            )}
            {!hasEmail && !hasFacebook && !hasInstagram && (
              <p className="placeholder-text">
                <PlaceholderBadge text="To confirm" /> Email and social links
                needed.
              </p>
            )}
          </div>
        </div>

        <div className="container map-section">
          <h2 className="text-center">Find us</h2>
          <div className="map-placeholder">
            <MapPin size={32} aria-hidden="true" />
            <p>[CONFIRM MAP / LOCATION EMBED]</p>
            <p className="text-muted">
              Add a Google Maps embed or address directions here once the
              location is confirmed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
