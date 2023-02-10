import { type } from "os";
import { WebStorage } from "redux-persist/es/types";

type PersistConfig = {
  key: string;
  version: number;
  storage: WebStorage;
};

type Theme = {
  theme: string;
};

type Rating = {
  rate: number;
  count: number;
};
type ProductData = {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: Rating;
};

type Products = {
  products: ProductData[];
  loading: boolean;
  error: null | string;
};

type Product = {
  product: ProductData;
  loading: boolean;
  error: null | string;
};

type ErrorMessage = {
  errorMessage: string;
};
type UserDetails = {
  email: string;
  password: string;
};
type User = {
  user: null | UserDetails;
  loading: boolean;
  error: null | string;
};
type Language = {
  code: string;
  name: string;
  dir: string;
  country_code: string;
};
