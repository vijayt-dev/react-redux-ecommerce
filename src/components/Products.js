import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/ecommerce/productSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
function Products() {
  const { products, loading, productsError } = useSelector((state) => state.product);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const renderElement = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col" key={id}>
        <div className="card">
          <img src={image} className="card-img-top p-2" alt={title} />
          <div className="card-body mt-2">
            <Link to={`/product/${id}`}>
              <h5 className="card-title">{title}</h5>
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
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
        {loading && <Loader />}
        {productsError && !loading ? (
          <div>
            <Error errorMessage={t("error.went_wrong")} />
          </div>
        ) : (
          <>{renderElement}</>
        )}
      </div>
    </div>
  );
}

export default Products;
