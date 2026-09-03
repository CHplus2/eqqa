import { GalleryCard } from "../components/GalleryCard";

export function Gallery({ data }) {
  const { gallery } = data;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p className="page-hero-lead">
            Real photos of products, the store, and behind-the-scenes moments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {gallery.length === 0 ? (
            <p className="text-center text-muted">
              No gallery photos added yet. Upload real business photos in the
              admin panel.
            </p>
          ) : (
            <div className="gallery-grid gallery-page-grid">
              {gallery.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
