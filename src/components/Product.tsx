import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/ecommerce/productSlice";
import Loader from "./Loader";
import Error from "./Error";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "../app/store";

function Product() {
  const { productId } = useParams();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.product
  );
  const { t } = useTranslation();

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductById(productId as string));
  }, [dispatch, productId]);

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
              <button className="btn btn-primary">{t("product.btn")}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }, [image, title, price, description, category, t]);
  return (
    <div className="container">
      {loading && <Loader />}
      {error && !loading ? (
        <div>
          <Error errorMessage={t("error.went_wrong")} />
        </div>
      ) : (
        !loading && <>{card}</>
      )}
    </div>
  );
}

export default Product;
