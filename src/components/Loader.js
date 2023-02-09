import React from "react";

function Loader() {
  return (
    <div className="container mt-3 mb-3">
      <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
