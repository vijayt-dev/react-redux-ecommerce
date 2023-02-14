import { SuccessMessage } from "../type";

function Success({successMessage}: SuccessMessage) {
  return (
    <div className="alert alert-success" role="alert">
      {successMessage}
    </div>
  );
}

export default Success;
