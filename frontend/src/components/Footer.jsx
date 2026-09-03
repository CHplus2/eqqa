import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Footer({ business }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">{business.name}</h3>
            <p className="text-muted">{business.category}</p>
            <p className="footer-tagline">{business.tagline}</p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul className="footer-list">
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={`tel:${business.phone}`}>{business.phone}</a>
              </li>
              <li>
                <MessageCircle size={18} aria-hidden="true" />
                <a href={business.primary_cta_link}>WhatsApp</a>
              </li>
              {business.email && !business.email.startsWith("[") && (
                <li>
                  <Mail size={18} aria-hidden="true" />
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
              )}
            </ul>
          </div>

          <div className="footer-location">
            <h4>Location</h4>
            <ul className="footer-list">
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>{business.address}</span>
              </li>
              <li>
                <Clock size={18} aria-hidden="true" />
                <span>{business.opening_hours}</span>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow us</h4>
            <ul className="footer-list">
              {business.social_facebook && !business.social_facebook.startsWith("[") && (
                <li>
                  <a href={business.social_facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
              )}
              {business.social_instagram && !business.social_instagram.startsWith("[") && (
                <li>
                  <a href={business.social_instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              )}
            </ul>
            <CTAButton href={business.primary_cta_link} variant="primary">
              {business.primary_cta_label}
            </CTAButton>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-muted">
            © {currentYear} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
