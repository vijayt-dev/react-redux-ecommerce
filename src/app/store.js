import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ecommerce/productSlice";
import productsReducer from "../features/ecommerce/productsSlice";
import userReducer from "../features/ecommerce/userSlice";
import themeReducer from "../features/ecommerce/themeSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const userPersistConfig = {
  key: "user-login",
  version: 1,
  storage,
};
const themePersistConfig = {
  key: "theme",
  version: 1,
  storage,
};
const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const themePersistedReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    user: userPersistedReducer,
    theme: themePersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
