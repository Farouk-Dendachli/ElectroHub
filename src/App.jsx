import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.title === product.title);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (title) => {
    setCart(
      cart.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (title) => {
    setCart(
      cart
        .map((item) =>
          item.title === title ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navbar cartCount={totalItems} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/services"
              element={<Services onAddToCart={addToCart} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
