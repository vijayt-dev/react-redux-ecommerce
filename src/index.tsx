import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Loader from "./components/Loader";
import "flag-icon-css/css/flag-icons.min.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar", "fr"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["localStorage", "path", "htmlTag"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/assets/i18n/{{lng}}/translation.json",
    },
  });

root.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
