import { CTAButton } from "./CTAButton";
import { PlaceholderBadge } from "./PlaceholderBadge";

export function ProductCard({ product, business }) {
  const isPlaceholder = product.name.startsWith("[");
  const optionsPending = product.options && product.options.startsWith("[");
  const availabilityPending = product.availability && product.availability.startsWith("[");

  return (
    <article className="product-card card">
      <div className="product-image-wrap">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            loading="lazy"
            className="product-image"
          />
        ) : (
          <div className="product-image-placeholder">
            <span>[REAL PHOTO NEEDED: {product.name}]</span>
          </div>
        )}
        <span className="product-price-badge">{product.price}</span>
      </div>
      <div className="product-content">
        <h3 className="product-title">
          {product.name}
          {isPlaceholder && <PlaceholderBadge text="To confirm" />}
        </h3>
        <p className="product-description">{product.description}</p>
        <p className="product-benefit">
          <strong>Why you'll love it:</strong> {product.benefit}
        </p>
        {optionsPending ? (
          <p className="product-options placeholder-text">
            <PlaceholderBadge text="To confirm" /> Price unit (per package / container)
          </p>
        ) : product.options ? (
          <p className="product-options text-muted">
            <strong>Options:</strong> {product.options}
          </p>
        ) : null}
        <div className="product-meta">
          {availabilityPending ? (
            <span className="product-availability placeholder-text">
              Availability [TO BE CONFIRMED]
            </span>
          ) : (
            <span className="product-availability">{product.availability}</span>
          )}
        </div>
        <CTAButton
          href={business.primary_cta_link}
          variant="secondary"
          className="product-cta"
        >
          Enquire
        </CTAButton>
      </div>
    </article>
  );
}
