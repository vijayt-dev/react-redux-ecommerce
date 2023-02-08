import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Product from "./components/Product";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { translationData } from "./Local";

function App() {
  const { theme } = useSelector((state) => state.theme);
  const { products } = useSelector((state) => state.product);
  const user = useSelector((state) => state.user);

  translationData(products, user.email, user.password);
  return (
    <div id={theme} className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
