import { Phone } from "lucide-react";
import { CTAButton } from "./CTAButton";

// Sticky bottom action bar shown on mobile only, so the two most important
// actions (call / order) are always one tap away.
export function MobileCTABar({ business }) {
  return (
    <div className="mobile-cta-bar" role="region" aria-label="Quick contact actions">
      <a href={`tel:${business.phone}`} className="mobile-cta-call">
        <Phone size={20} aria-hidden="true" />
        <span>Call</span>
      </a>
      <CTAButton
        href={business.primary_cta_link}
        variant="primary"
        className="mobile-cta-order"
      >
        {business.primary_cta_label}
      </CTAButton>
    </div>
  );
}
