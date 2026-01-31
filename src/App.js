import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Appointment from "./pages/Appointment";


const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "6px 12px",
  borderRadius: "6px",
  background: "rgba(255,255,255,0.15)"
  

};

function App() {

  // 🛒 CART STATE
  const [cart, setCart] = useState([]);

  // ➕ ADD TO CART
  function addToCart(item) {
    setCart([...cart, item]);
  }

  // ❌ REMOVE FROM CART
  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <Router>
      <div style={{ padding: "20px" }}>

        {/* NAVBAR */}
        <nav style={{
          marginBottom: "30px",
          padding: "15px",
          background: "#2e7d32",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center"
        }}>
          <Link style={navLink} to="/">Home</Link>
          <Link style={navLink} to="/medicines">Medicines</Link>
          <Link style={navLink} to="/cart">Cart ({cart.length})</Link>
          <Link style={navLink} to="/about">About</Link>
          <Link style={navLink} to="/contact">Contact</Link>
          <Link style={navLink} to="/appointment">Book Appointment</Link>

        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicines" element={<Medicines addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
