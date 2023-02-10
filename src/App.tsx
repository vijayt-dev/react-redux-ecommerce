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
import { RootState } from "./app/store";

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);
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
