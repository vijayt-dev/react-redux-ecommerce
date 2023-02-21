import { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/ecommerce/productsSlice";
import { fetchCategories } from "../features/ecommerce/categorySlice";
import {
  setSearchInput,
  setSelectedCategories,
} from "../features/ecommerce/filterSlice";

import Loader from "../components/Loader";
import Error from "../components/Error";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "../app/store";
import { ProductData } from "../type";
import classNames from "classnames";
function Products() {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const category = useSelector((state: RootState) => state.category);
  const { searchInput, selectedCategories } = useSelector(
    (state: RootState) => state.filters
  );
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const productsElement = products
    .filter((product) => {
      return product.title?.toLowerCase().includes(searchInput.toLowerCase());
    })
    .filter(function (product) {
      const selected =
        selectedCategories.length <= 0
          ? category.categories
          : selectedCategories;
      for (let key of selected) {
        if (product["category"] === key) return true;
      }
      return false;
    })
    .map((product: ProductData) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="col products" key={id}>
          <Link to={`/product/${id}`}>
            <div className="card">
              <img src={image} className="card-img-top p-2" alt={title} />
              <div className="card-body mt-2">
                <h5
                  className="card-title fw-normal product-title"
                  title={title}
                >
                  {title}
                </h5>

                <h6 className="card-subtitle fw-bold mt-1">$ {price}</h6>
                <p className="card-text">
                  <small className="text-muted">{category}</small>
                </p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  const categoryOptions = useMemo(
    () =>
      category.categories.map((category) => {
        return category
          .split(" ")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
          })
          .join(" ");
      }),
    [category]
  );
  const handleOnChange = useCallback(
    (e: React.FormEvent) => {
      const { value, checked } = e.target as HTMLInputElement;
      if (checked) {
        dispatch(setSelectedCategories([...selectedCategories, value]));
      } else {
        dispatch(
          setSelectedCategories(
            selectedCategories.filter((category) => category !== value)
          )
        );
      }
    },
    [selectedCategories, dispatch]
  );

  const isSelected = useCallback(
    (category: string): boolean => {
      return selectedCategories.findIndex(
        (selectedCategory) => selectedCategory === category.toLowerCase()
      ) !== -1
        ? true
        : false;
    },
    [selectedCategories]
  );
  const categoryElement = useMemo(
    () =>
      categoryOptions.map((category, index) => {
        return (
          <li key={index}>
            <div className="dropdown-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={category.toLowerCase()}
                  checked={isSelected(category)}
                  onChange={handleOnChange}
                  id={String(index)}
                />
                <label className="form-check-label" htmlFor={String(index)}>
                  {category}
                </label>
              </div>
            </div>
          </li>
        );
      }),
    [categoryOptions, handleOnChange, isSelected]
  );
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-8">
          <input
            className="form-control mb-3"
            type="search"
            placeholder={t("products.placeholder.search") as string}
            value={searchInput}
            aria-label="Search"
            onChange={(e) => dispatch(setSearchInput(e.target.value))}
          />
        </div>
        <div className="col-4">
          <div className="dropdown-center">
            <button
              className="btn btn-secondary w-100 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("products.category")}
            </button>
            <ul className="dropdown-menu dropdown-menu">{categoryElement}</ul>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
        {loading && <Loader />}
        {error ? (
          <div>
            <Error errorMessage={t("error.went_wrong")} />
          </div>
        ) : (
          !loading && <>{productsElement}</>
        )}
      </div>
    </div>
  );
}

export default Products;
