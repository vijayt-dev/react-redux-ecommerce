import React from "react";
import { useSelector } from "react-redux";
function Profile() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Password: {user.password}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
