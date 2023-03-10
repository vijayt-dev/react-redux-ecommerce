import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../app/store";
function Profile() {
  const { user } = useSelector((state: RootState) => state.user);
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{t("profile.title")}</h5>
          <p className="card-text">
            {t("profile.labels.email")}: {user?.email}
          </p>
          <p className="card-text">
            {t("profile.labels.password")}: {user?.password}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
