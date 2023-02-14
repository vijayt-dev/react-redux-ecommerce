import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/ecommerce/userSlice";
import { useTranslation } from "react-i18next";
import { LoginError, UserDetails } from "../type";
import { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
function Login() {
  const { t } = useTranslation();
  const [userLogin, setUserLogin] = useState<UserDetails>({
    email: "",
    password: "",
  });
  const loginCredientials: UserDetails = {
    email: "vijay@gmail.com",
    password: "123",
  };
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  let [isLogin, setLoginError] = useState<LoginError>({
    type: "",
    isError: false,
  });
  const handleError = ({ email, password }: UserDetails) => {
    if (email && password) {
      setLoginError({ type: "empty", isError: false });
      if (
        email &&
        password &&
        email === loginCredientials.email &&
        password === loginCredientials.password
      ) {
        setLoginError({ type: "authentication", isError: false });
        dispatch(login({ email, password }));
        setUserLogin({ email: "", password: "" });
        navigate("/products");
      } else {
        setLoginError({ type: "authentication", isError: true });
      }
    } else {
      setLoginError({ type: "empty", isError: true });
    }
  };
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    handleError(userLogin);
  };
  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {t("login.labels.email")}
          </label>
          <input
            type="email"
            autoComplete="off"
            className="form-control"
            id="email"
            placeholder={t("login.placeholder.email") as string}
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            value={userLogin.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            {t("login.labels.password")}
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder={t("login.placeholder.password") as string}
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            value={userLogin.password}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary mb-3">
            {t("login.btn")}
          </button>
        </div>
      </form>
      {isLogin.type === "empty" && isLogin.isError && (
        <Error errorMessage={t("error.fill_details")} />
      )}
      {isLogin.type === "authentication" && isLogin.isError && (
        <Error errorMessage={t("error.wrong_details")} />
      )}
    </div>
  );
}

export default Login;
