import { useCart } from '../hooks/useCart';

function Navbar({ currentPage, onNavigate }) {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          className="logo"
          onClick={() => onNavigate('shop')}
          aria-label="Go to Shop"
        >
          ShopCart
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          <button
            className={
              currentPage === 'shop'
                ? 'nav-btn active'
                : 'nav-btn'
            }
            onClick={() => onNavigate('shop')}
          >
            Shop
          </button>

          <button
            className={
              currentPage === 'cart'
                ? 'nav-btn active'
                : 'nav-btn'
            }
            onClick={() => onNavigate('cart')}
          >
            Cart
            <span className="cart-count">{totalItems}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
