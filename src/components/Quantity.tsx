import { useState } from "react";

function Quantity() {
  const [quantity, setQuantity] = useState<number>(1);
  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    }
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
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

        <span className="input-group-text">{quantity}</span>
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
  );
}

export default Quantity;
