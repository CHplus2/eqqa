import { MapPin, Phone, Clock } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { PlaceholderBadge } from "../components/PlaceholderBadge";

export function About({ data }) {
  const { business, gallery } = data;
  const storePhoto = gallery.find((item) => item.category === "store");

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>About {business.name}</h1>
          <p className="page-hero-lead">
            A local business serving kuih and snacks to the community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-content">
            <h2>Who we are</h2>
            <p>{business.description}</p>
            {business.description.startsWith("[") && (
              <p className="placeholder-text">
                <PlaceholderBadge text="Needs confirmation" /> This section
                should tell the real story of the business, how it started, and
                what makes it local.
              </p>
            )}

            <h2>What we believe in</h2>
            <ul className="about-beliefs">
              <li>Fresh, home-style kuih and snacks.</li>
              <li>Friendly, personal service.</li>
              <li>Fair prices for the local community.</li>
            </ul>
            <p className="placeholder-text">
              <PlaceholderBadge text="To confirm" /> Replace the above values
              with the actual principles the business owner wants to
              communicate.
            </p>

            <h2>Why customers trust us</h2>
            <p>
              {business.name} has built trust through consistent quality and
              personal service. [CONFIRM REVIEWS / YEARS IN BUSINESS /
              CERTIFICATIONS / LOCAL PRESENCE]
            </p>

            <div className="about-contact">
              <div>
                <MapPin size={18} aria-hidden="true" />
                <span>{business.address}</span>
              </div>
              <div>
                <Phone size={18} aria-hidden="true" />
                <a href={`tel:${business.phone}`}>{business.phone}</a>
              </div>
              <div>
                <Clock size={18} aria-hidden="true" />
                <span>{business.opening_hours}</span>
              </div>
            </div>

            <CTAButton href={business.primary_cta_link} variant="primary">
              {business.primary_cta_label}
            </CTAButton>
          </div>

          <div className="about-image">
            {storePhoto?.image_url ? (
              <img
                src={storePhoto.image_url}
                alt={storePhoto.caption}
                className="about-image-img"
              />
            ) : (
              <div className="about-image-placeholder">
                <span>[REAL PHOTO NEEDED: Store / Team / Owner]</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
