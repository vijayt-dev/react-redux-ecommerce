import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ecommerce/productSlice";
import productsReducer from "../features/ecommerce/productsSlice";
import userReducer from "../features/ecommerce/userSlice";
import themeReducer from "../features/ecommerce/themeSlice";
import cartReducer from "../features/ecommerce/cartsSlice";

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
  Persistor,
} from "redux-persist";
import { PersistConfig } from "../type";
const userPersistConfig: PersistConfig = {
  key: "user-login",
  version: 1,
  storage,
};
const themePersistConfig: PersistConfig = {
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
    carts: cartReducer,
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

export const persistor: Persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;