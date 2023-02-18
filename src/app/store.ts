import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ecommerce/productSlice";
import productsReducer from "../features/ecommerce/productsSlice";
import userReducer from "../features/ecommerce/userSlice";
import themeReducer from "../features/ecommerce/themeSlice";
import cartsReducer from "../features/ecommerce/cartsSlice";
import cartReducer from "../features/ecommerce/cartSlice";
import categoryReducer from "../features/ecommerce/categorySlice";
import filterReducer from "../features/ecommerce/filterSlice";

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
const cartPersistConfig: PersistConfig = {
  key: "cart",
  version: 1,
  storage,
};

const cartsPersistConfig: PersistConfig = {
  key: "carts",
  version: 1,
  storage,
};
const filtersPersistConfig: PersistConfig = {
  key: "filters",
  version: 1,
  storage,
};
const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const themePersistedReducer = persistReducer(themePersistConfig, themeReducer);
const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);
const cartsPersistedReducer = persistReducer(cartsPersistConfig, cartsReducer);
const filtersPersistedReducer = persistReducer(
  filtersPersistConfig,
  filterReducer
);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    carts: cartsPersistedReducer,
    cart: cartPersistedReducer,
    user: userPersistedReducer,
    theme: themePersistedReducer,
    category: categoryReducer,
    filters: filtersPersistedReducer,
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
