import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [currentPage, setCurrentPage] = useState('shop');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('shop');
  };

  return (
    <CartProvider>
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="container">
        {currentPage === 'cart' ? (
          <Cart />
        ) : selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        ) : (
          <section>
            <div className="page-heading">
              <p className="eyebrow">Fresh picks for you</p>
              <h1>Our Products</h1>
              <p>
                Discover quality products at great prices.
              </p>
            </div>

            <ProductGrid
              onProductClick={handleProductClick}
            />
          </section>
        )}
      </main>
    </CartProvider>
  );
}

export default App;
