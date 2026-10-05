
import products from '../data/products';
import ProductCard from './ProductCard';

function ProductGrid({ onProductClick }) {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onProductClick={onProductClick}
        />
      ))}
    </section>
  );
}

export default ProductGrid;