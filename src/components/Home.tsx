import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Home() {
  const { t } = useTranslation();
  return (
    <main className="container">
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-title">{t("home.banner.title")}</h1>
          <p className="banner-text">{t("home.banner.subtitle")}</p>
          <Link
            to="/products"
            className="btn btn-primary"
          >
            {t("home.banner.btn")}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
