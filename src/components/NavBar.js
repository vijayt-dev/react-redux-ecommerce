import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../features/ecommerce/userSlice";
import { setTheme } from "../features/ecommerce/themeSlice";
function NavBar() {
  const { user } = useSelector((state) => state.user);
  const [themeLocal, setThemeLocal] = useState("light");
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(logout());
  };
  const { theme } = useSelector((state) => state.theme);
  const toggleTheme = () => {
    const value = themeLocal === "light" ? "dark" : "light";
    setThemeLocal(value);
    dispatch(setTheme(value));
  };
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            OnShop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="cart" className="nav-link">
                  Cart
                </NavLink>
              </li>
              {user && (
                <li className="nav-item me-2">
                  <NavLink to="profile" className="nav-link">
                    Profile
                  </NavLink>
                </li>
              )}
              <li className="nav-item me-2">
                {user ? (
                  <button
                    onClick={handleClear}
                    className="btn btn-primary me-2"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink to="login" className="nav-link">
                    Login
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                <div className="form-check form-switch pt-2 pb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="theme"
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                  />
                  <label className="form-check-label" htmlFor="theme">
                    {theme === "light" ? "Light Mode" : "Dark Mode"}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
