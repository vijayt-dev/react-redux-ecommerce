import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/ecommerce/productSlice";
import Loader from "./Loader";
import Error from "./Error";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "../app/store";
import {
  setQuantity,
  addCart,
  cartReset,
} from "../features/ecommerce/cartSlice";
import { addCarts } from "../features/ecommerce/cartsSlice";
import Success from "./Success";
function Product() {
  const { productId } = useParams();
  const [success, setSuccess] = useState<boolean>(false);
  const { product, loading, error } = useSelector(
    (state: RootState) => state.product
  );
  const cart = useSelector((state: RootState) => state.cart.cart);
  const { t } = useTranslation();

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductById(productId as string));
    return () => {
      if (product.id) {
        dispatch(cartReset());
      }
    };
  }, [dispatch, productId, product.id]);

  const total = useMemo(() => {
    return Number(cart.quantity as number) * Number(price as number);
  }, [cart.quantity, price]);
  const addToCart = useCallback(() => {
    setSuccess(true);
    dispatch(
      addCart({
        id: productId,
        title: product.title,
        price: product.price,
        category: product.category,
        image: product.image,
        quantity: cart.quantity,
        total: total,
      })
    );

    dispatch(
      addCarts({
        id: productId,
        title: product.title,
        price: product.price,
        category: product.category,
        image: product.image,
        quantity: cart.quantity,
        total: total,
      })
    );
    dispatch(cartReset());
  }, [cart, dispatch, product, productId, total]);
  const incrementQuantity = useCallback(() => {
    if ((cart.quantity as number) < 10) {
      dispatch(setQuantity((cart.quantity as number) + 1));
    }
  }, [cart.quantity, dispatch]);
  const decrementQuantity = useCallback(() => {
    if ((cart?.quantity as number) > 1) {
      dispatch(setQuantity((cart.quantity as number) - 1));
    }
  }, [cart.quantity, dispatch]);
  const card = useMemo(() => {
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 p-3">
            <img src={image} className="img-fluid rounded-start" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body p-5">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle d-inline-block p-2 text-white mb-4 mt-1 bg-success">
                $ {price}
              </h6>

              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">{category}</small>
              </p>
              <div className="d-flex align-items-start gap-4">
                <button className="btn d-block btn-primary" onClick={addToCart}>
                  {t("product.btn")}
                </button>
                <div>
                  <div className="input-group mb-3">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="sub-btn"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>

                    <span className="input-group-text">{cart.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="add-btn"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <span className="input-group-text">$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [
    image,
    title,
    price,
    description,
    category,
    t,
    cart.quantity,
    total,
    addToCart,
    incrementQuantity,
    decrementQuantity,
  ]);
  return (
    <div className="container">
      {loading && <Loader />}
      {error && !loading ? (
        <div>
          <Error errorMessage={t("error.went_wrong")} />
        </div>
      ) : (
        !loading && (
          <>
            {card}
            {success && <Success successMessage={t("success.product_added")} />}
          </>
        )
      )}
    </div>
  );
}

export default Product;
