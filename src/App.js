import React from "react";
import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ItemsBlock from "./components/ItemsBlock";
import Skeleton from "./components/Skeleton";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
