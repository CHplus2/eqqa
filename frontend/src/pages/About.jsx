import { MapPin, Phone, Clock, Leaf, TrendingUp, Trophy } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { PlaceholderBadge } from "../components/PlaceholderBadge";

export function About({ data }) {
  const { business, gallery } = data;
  const behindScenesPhoto = gallery.find(
    (item) => item.category === "behind_the_scenes"
  );

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>About {business.name}</h1>
          <p className="page-hero-lead">
            Produk dari Sibu, Sarawak — authentic traditional kuih and snacks.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-content">
            <h2>Who we are</h2>
            <p>{business.description}</p>

            <h2>What we believe in</h2>
            <ul className="about-beliefs">
              <li>Authentic traditional taste, made the traditional way.</li>
              <li>Handmade products, crafted carefully with attention to customer satisfaction.</li>
              <li>{business.claim_1} — {business.claim_2.toLowerCase()}.</li>
              <li>Affordable pricing for everyone: {business.target_customers.toLowerCase()}.</li>
            </ul>

            <h2>Our logo</h2>
            <ul className="about-beliefs">
              <li>
                <Leaf size={18} aria-hidden="true" className="about-inline-icon" />
                The leaf represents our fresh, natural products.
              </li>
              <li>
                <TrendingUp size={18} aria-hidden="true" className="about-inline-icon" />
                The arrow represents business growth.
              </li>
              <li>Green stands for freshness.</li>
              <li>Gold stands for quality and success.</li>
            </ul>

            <h2>Our achievement</h2>
            <p>
              <Trophy size={18} aria-hidden="true" className="about-inline-icon" />
              {business.achievement}.{" "}
              <span className="placeholder-text">
                [TO BE CONFIRMED: exact details/name of the competition]
              </span>
            </p>

            <div className="about-contact">
              <div>
                <MapPin size={18} aria-hidden="true" />
                <span>
                  {business.location} —{" "}
                  <span className="placeholder-text">exact address [TO BE CONFIRMED]</span>
                </span>
              </div>
              <div>
                <Phone size={18} aria-hidden="true" />
                <span>
                  <a href={`tel:${business.phone}`}>{business.phone}</a>
                  {business.phone_secondary && (
                    <>
                      {" / "}
                      <a href={`tel:${business.phone_secondary}`}>
                        {business.phone_secondary}
                      </a>
                    </>
                  )}
                </span>
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
            {behindScenesPhoto?.image_url ? (
              <img
                src={behindScenesPhoto.image_url}
                alt={behindScenesPhoto.caption}
                className="about-image-img"
              />
            ) : (
              <div className="about-image-placeholder">
                <span>
                  [REAL PHOTO NEEDED: Owner / team / handmade preparation]
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
