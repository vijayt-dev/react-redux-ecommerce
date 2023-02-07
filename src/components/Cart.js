import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Cart() {
  const thumbnail1 = require("../images/empty-cart.jpg");
  const thumbnail2 = require("../images/cart-login.webp");
  // const auth = useAuth();
  // const user = auth.getUserLogin();
  const { user } = useSelector((state) => state.user);
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
            <h5 className="card-title">Your basket is empty!</h5>
            <p className="card-text">Enjoy Upto 10% Savings on Laptops</p>
            <Link to="/products" className="btn btn-primary">
              Shop Now
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
            <h5 className="card-title">Missing Cart items?</h5>
            <p className="card-text">
              Login to see the items you added previously
            </p>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
