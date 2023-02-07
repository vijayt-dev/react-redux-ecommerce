import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/ecommerce/productSlice";
function Product() {
  const { productId } = useParams();
  let product = useSelector((state) => state.product.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(productId));
    return () => {
      dispatch(fetchProductById());
    };
  }, [dispatch, productId]);
  return (
    <div className="container">
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
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
