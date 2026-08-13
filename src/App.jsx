import Home from "./pages/Home";
import Products from "./pages/product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import CheckoutVerification from "./pages/CheckoutVerification";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/Nav.css";
import "./styles/Home.css";
import "./styles/Footer.css";
import "./styles/products.css";
import "./styles/ProductDetails.css";
import "./styles/Cart.css";
import "./styles/Auth.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout/verification"
              element={
                <ProtectedRoute>
                  <CheckoutVerification />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
