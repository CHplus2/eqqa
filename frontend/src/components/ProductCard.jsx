import { CTAButton } from "./CTAButton";
import { PlaceholderBadge } from "./PlaceholderBadge";

export function ProductCard({ product, business }) {
  const isPlaceholder = product.name.startsWith("[");

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
            <span>[REAL PHOTO NEEDED]</span>
          </div>
        )}
      </div>
      <div className="product-content">
        <h3 className="product-title">
          {product.name}
          {isPlaceholder && <PlaceholderBadge text="To confirm" />}
        </h3>
        <p className="product-description">{product.description}</p>
        <p className="product-benefit">
          <strong>Best for:</strong> {product.benefit}
        </p>
        {product.options && (
          <p className="product-options text-muted">
            <strong>Options:</strong> {product.options}
          </p>
        )}
        <div className="product-meta">
          <span className="product-price">{product.price}</span>
          <span className="product-availability">{product.availability}</span>
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
