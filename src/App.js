import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer">
        <img src="img/l2.png" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
