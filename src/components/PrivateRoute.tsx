import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";

function PrivateRoute() {
  const { user } = useSelector((state: RootState) => state.user);
  return user ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
