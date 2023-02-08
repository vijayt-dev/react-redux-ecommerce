import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/ecommerce/userSlice";
import Error from "./Error";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
function Login() {
  const {t} = useTranslation();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleError = ({ email, password }) => {
    if (email && password) {
      setLoginError(true);
      dispatch(login({ email, password }));
    } else {
      setLoginError(false);
    }
  };

  let [isLogin, setLoginError] = useState(null);
  const handleClick = (e) => {
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
            placeholder={t("login.placeholder.email")}
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
            placeholder={t("login.placeholder.password")}
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
      {isLogin === false && <Error errorMessage={t("error.fill_details")} />}
    </div>
  );
}

export default Login;
