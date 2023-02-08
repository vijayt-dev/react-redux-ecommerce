import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
function Cart() {
  const thumbnail1 = require("../images/empty-cart.jpg");
  const thumbnail2 = require("../images/cart-login.webp");

  const { user } = useSelector((state) => state.user);
  const {t} = useTranslation();
  return (
    <div className="container d-flex justify-content-center">
      {user ? (
        <div className="card w-50 mt-3">
          <img
            src={thumbnail1}
            className="card-img-top"
            alt="product-thumbnail"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{t("cart_login.cart_title")}</h5>
            <p className="card-text">{t("cart_login.cart_subtitle")}</p>
            <Link to="/products" className="btn btn-primary">
            {t("cart_login.cart_btn")}
            </Link>
          </div>
        </div>
      ) : (
        <div className="card w-50 mt-3">
          <img
            src={thumbnail2}
            className="card-img-top"
            alt="product-thumbnail"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{t("cart_logout.cart_title")}</h5>
            <p className="card-text">
            {t("cart_logout.cart_subtitle")}
            </p>
            <Link to="/login" className="btn btn-primary">
            {t("cart_logout.cart_btn")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
