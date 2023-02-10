import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/ecommerce/productsSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "../app/store";
import { ProductData } from "../type";
function Products() {
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const renderElement = products.map((product: ProductData) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col products" key={id}>
        <div className="card">
          <img src={image} className="card-img-top p-2" alt={title} />
          <div className="card-body mt-2">
            <Link to={`/product/${id}`}>
              <h5 className="card-title product-title" title={title}>{title}</h5>
            </Link>
            <h6 className="card-subtitle mt-1">$ {price}</h6>
            <p className="card-text">
              <small className="text-muted">{category}</small>
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container mb-4">
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
        {loading && <Loader />}
        {error ? (
          <div>
            <Error errorMessage={t("error.went_wrong")} />
          </div>
        ) : (
          !loading && <>{renderElement}</>
        )}
      </div>
    </div>
  );
}

export default Products;
