import { PlaceholderBadge } from "./PlaceholderBadge";

const categoryLabels = {
  product: "Product",
  store: "Store",
  behind_the_scenes: "Behind the Scenes",
  event: "Event",
};

export function GalleryCard({ item }) {
  const isPlaceholder = !item.image_url;

  return (
    <figure className="gallery-card card">
      <div className="gallery-image-wrap">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.caption}
            loading="lazy"
            className="gallery-image"
          />
        ) : (
          <div className="gallery-image-placeholder">
            <span>[REAL PHOTO NEEDED]</span>
          </div>
        )}
      </div>
      <figcaption className="gallery-caption">
        <span className="gallery-category">{categoryLabels[item.category] || item.category}</span>
        <span className="gallery-title">
          {item.caption}
          {isPlaceholder && <PlaceholderBadge text="Photo needed" />}
        </span>
      </figcaption>
    </figure>
  );
}
