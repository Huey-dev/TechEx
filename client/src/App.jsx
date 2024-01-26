import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductDetail from "./pages/ProductDetail";
import ProductListing from "./pages/ProductListing";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
