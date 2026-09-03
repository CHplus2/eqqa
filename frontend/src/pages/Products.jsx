import { ProductCard } from "../components/ProductCard";

export function Products({ data }) {
  const { business, products } = data;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p className="page-hero-lead">
            Authentic traditional kuih and snacks from Sibu, Sarawak — handmade
            with 100% fresh ingredients and no preservatives.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {products.length === 0 ? (
            <p className="text-center text-muted">
              No products added yet. Add confirmed offerings in the admin
              panel.
            </p>
          ) : (
            <div className="products-grid products-page-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  business={business}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
