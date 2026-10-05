import { useCart } from '../hooks/useCart';

function ProductCard({ product, onProductClick }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image product-clickable"
        onClick={() => onProductClick(product)}
      />

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3
          className="product-title product-clickable"
          onClick={() => onProductClick(product)}
        >
          {product.title}
        </h3>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
