import {
  FETCH_PRODUCTS,
  FILTER_PRODUCT_BY_COLOR,
  ORDER_PRODUCTS_BY_PRICE,
} from "../action-types/types";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (products, color) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCT_BY_COLOR,
    payload: {
      color: color,
      items:
        color === ""
          ? products
          : products.filter((product) => product.colors.indexOf(color) >= 0),
    },
  });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = [...filteredProducts];
  sortedProducts.sort((item1, item2) => {
    if (sort === "lowest") {
      if (item1.price > item2.price) return 1;
      else if (item1.price < item2.price) return -1;
      else return 0;
    } else {
      if (item1.price < item2.price) return 1;
      else if (item1.price > item2.price) return -1;
      else return 0;
    }
  });

  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: { sort: sort, items: sortedProducts },
  });
};
