import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "../app/store";
import {
  setQuantity,
  setPrice,
  removeCarts,
} from "../features/ecommerce/cartsSlice";
import { useMemo } from "react";

function Cart() {
  const emptyCart = require("../images/empty-cart.jpg");
  const carts = useSelector((state: RootState) => state.carts.carts);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const incrementQuantity = (id: number, quantity: number, price?: number) => {
    if (quantity < 10) {
      const increment = quantity + 1;
      dispatch(setQuantity({ id: id, quantity: increment }));
      dispatch(
        setPrice({
          id: id,
          total: Number(increment as number) * Number(price as number),
        })
      );
    }
  };
  const decrementQuantity = (id: number, quantity: number, price?: number) => {
    if (quantity > 1) {
      const decrement = quantity - 1;
      dispatch(setQuantity({ id: id, quantity: decrement }));
      dispatch(
        setPrice({
          id: id,
          total: Number(decrement as number) * Number(price as number),
        })
      );
    }
  };
  const removeCart = (id: number) => {
    dispatch(removeCarts({ id: id }));
  };
  const totalPrice = useMemo((): number => {
    return carts.reduce((acc, curr) => acc + Number(curr.total), 0);
  }, [carts]);
  const table = () => {
    return (
      <div className="table-responsive">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">{t("cart.product")}</th>
              <th scope="col">{t("cart.quantity")}</th>
              <th scope="col">{t("cart.price")}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => {
              return (
                <tr key={cart.id}>
                  <td>
                    <div
                      className="card mb-3  border-0"
                      style={{ maxWidth: "300px" }}
                    >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={cart.image}
                            className="img-fluid rounded-start"
                            alt={cart.title}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fs-6">{cart.title}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="input-group mb-3">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="sub-btn"
                          onClick={() =>
                            decrementQuantity(
                              cart.id as number,
                              cart.quantity as number,
                              cart.price
                            )
                          }
                        >
                          -
                        </button>

                        <span className="input-group-text">
                          {cart.quantity}
                        </span>
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="add-btn"
                          onClick={() =>
                            incrementQuantity(
                              cart.id as number,
                              cart.quantity as number,
                              cart.price
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="product-price">
                    <p className="fw-bold mb-1">$ {cart.total?.toFixed(2)}</p>
                    <span className="fw-light">$ {cart.price} each</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeCart(cart.id as number)}
                      className="btn btn-outline-danger"
                    >
                      {t("cart.btn")}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <div className="container d-flex justify-content-center flex-column">
      {carts.length > 0 ? (
        <>
          {table()}
          <div className="card">
            <div className="card-body">
              <span className="fw-bolder">{t("cart.total_price")}:</span> ${" "}
              {totalPrice.toFixed(2)}
            </div>
          </div>
        </>
      ) : (
        <div className="card w-50 align-self-center">
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
      )}
    </div>
  );
}

export default Cart;
