import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootState } from "../app/store";

function Cart() {
  const emptyCart = require("../images/empty-cart.jpg");
  const cartLogin = require("../images/cart-login.webp");
  const { product, loading, error } = useSelector(
    (state: RootState) => state.product
  );
  console.log(product);
  const { user } = useSelector((state: RootState) => state.user);
  const { t } = useTranslation();
  return (
    <div className="container d-flex justify-content-center">
      {user ? (
        <div className="card w-50 mt-3">
          <img
            src={emptyCart}
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
            src={cartLogin}
            className="card-img-top"
            alt="product-thumbnail"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{t("cart_logout.cart_title")}</h5>
            <p className="card-text">{t("cart_logout.cart_subtitle")}</p>
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
