import { ErrorMessage } from "../type";

function Error({errorMessage}: ErrorMessage) {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  );
}

export default Error;
