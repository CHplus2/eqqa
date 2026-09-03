import { MapPin, Phone, Clock, Truck } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Footer({ business }) {
  const currentYear = new Date().getFullYear();
  const hasFacebookUrl = business.social_facebook && !business.social_facebook.startsWith("[");
  const hasTiktokUrl = business.social_tiktok && !business.social_tiktok.startsWith("[");

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">{business.name}</h3>
            <p className="text-muted">Produk dari Sibu, Sarawak</p>
            <p className="footer-tagline">{business.tagline}</p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul className="footer-list">
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={`tel:${business.phone}`}>{business.phone}</a>
              </li>
              {business.phone_secondary && (
                <li>
                  <Phone size={18} aria-hidden="true" />
                  <a href={`tel:${business.phone_secondary}`}>{business.phone_secondary}</a>
                </li>
              )}
              <li>
                <Clock size={18} aria-hidden="true" />
                <span>{business.opening_hours}</span>
              </li>
            </ul>
          </div>

          <div className="footer-location">
            <h4>Location & delivery</h4>
            <ul className="footer-list">
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>{business.location}</span>
              </li>
              <li>
                <Truck size={18} aria-hidden="true" />
                <span>{business.delivery_methods}</span>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow us</h4>
            <ul className="footer-list">
              <li>
                {hasFacebookUrl ? (
                  <a href={business.social_facebook} target="_blank" rel="noopener noreferrer">
                    Facebook: {business.facebook_name}
                  </a>
                ) : (
                  <span>Facebook: {business.facebook_name} [URL TO BE CONFIRMED]</span>
                )}
              </li>
              <li>
                {hasTiktokUrl ? (
                  <a href={business.social_tiktok} target="_blank" rel="noopener noreferrer">
                    TikTok: {business.tiktok_name}
                  </a>
                ) : (
                  <span>TikTok: {business.tiktok_name} [URL TO BE CONFIRMED]</span>
                )}
              </li>
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
