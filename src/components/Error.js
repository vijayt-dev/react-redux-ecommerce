import React from "react";

function Error({ errorMessage }) {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  );
}

export default Error;
