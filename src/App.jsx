
import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import { Login } from "./pages/Login/Login";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Counter } from "./components/Counter/Counter";

import { CartProvider } from "./context/CartContext";

function App() {
  let location = useLocation();

  return (
    <CartProvider>
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {location.pathname !== "/login" && <Footer />}
    </CartProvider>
  );
}

export default App;
