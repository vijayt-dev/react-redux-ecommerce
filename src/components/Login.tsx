import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/ecommerce/userSlice";
import { useTranslation } from "react-i18next";
import { Errors, UserDetails } from "../type";
import { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
function Login() {
  const { t } = useTranslation();
  const initialError = { error: false, message: "" };
  const [userLogin, setUserLogin] = useState<UserDetails>({
    email: "",
    password: "",
  });
  const [isEmpty, setIsEmpty] = useState<{ error: boolean; message: string }>({
    error: false,
    message: "",
  });
  const [isValidCrediential, setIsValidCrediential] =
    useState<Errors>(initialError);
  const loginCredientials: UserDetails = {
    email: "vijay@gmail.com",
    password: "123",
  };
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleError = () => {
    const { email, password } = userLogin;
    if (!email || !password) {
      setIsEmpty({
        ...isEmpty,
        error: true,
        message: t("error.fill_details"),
      });
    } else if (
      email !== loginCredientials.email ||
      password !== loginCredientials.password
    ) {
      setIsEmpty(initialError);
      setIsValidCrediential({
        ...isValidCrediential,
        error: true,
        message: t("error.wrong_details"),
      });
    } else {
      setIsValidCrediential(initialError);
      dispatch(login(userLogin));
      setUserLogin({ email: "", password: "" });
      navigate("/products");
    }
  };
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    handleError();
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
      {isEmpty.error && <Error errorMessage={isEmpty.message} />}
      {isValidCrediential.error && (
        <Error errorMessage={isValidCrediential.message} />
      )}
    </div>
  );
}

export default Login;
