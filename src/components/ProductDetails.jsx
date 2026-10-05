import { useCart } from '../hooks/useCart';

function ProductDetails({ product, onBack }) {
  const { addToCart } = useCart();

  if (!product) {
    return null;
  }

  return (
    <section className="product-details">
      <button className="back-btn" onClick={onBack}>
        ← Back to Products
      </button>

      <div className="product-details-card">
        <div className="product-details-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-details-image"
          />
        </div>

        <div className="product-details-info">
          <p className="product-details-category">
            {product.category}
          </p>

          <h2>{product.title}</h2>

          <p className="product-details-price">
            ${product.price.toFixed(2)}
          </p>

          <p className="product-details-description">
            This is a high-quality {product.title.toLowerCase()}.
            Perfect for everyday use with a modern and practical
            design.
          </p>

          <button
            className="add-to-cart-btn details-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
