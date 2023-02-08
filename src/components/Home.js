import React from "react";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
function Home() {
  const {t} = useTranslation();
  return (
    <main className="container">
      <div>{t("home")}</div>
    </main>
  );
}

export default Home;
