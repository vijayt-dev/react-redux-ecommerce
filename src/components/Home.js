import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Home() {
  const { t } = useTranslation();
  return (
    <main className="container">
      <div className="alert alert-primary text-center" role="alert">
        {t("home.tag")}
      </div>
      <div className="card text-bg-dark">
        <img
          src="https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="card-img"
          alt="men with dress and cap"
        />
        <div className="card-img-overlay text-center d-flex flex-column justify-content-center">
          <h1 className="card-title">{t("home.banner.title")}</h1>
          <p className="card-text">{t("home.banner.subtitle")}</p>
          <Link
            to="/products"
            className="btn btn-primary align-content-center flex-grow-0"
          >
            {t("home.banner.btn")}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
