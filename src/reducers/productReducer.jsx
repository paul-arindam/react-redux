import {
  FETCH_PRODUCTS,
  FILTER_PRODUCT_BY_COLOR,
  ORDER_PRODUCTS_BY_PRICE,
  SEARCH_PRODUCTS,
} from "../action-types/types";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCT_BY_COLOR:
      return {
        ...state,
        color: action.payload.color,
        filteredItems: action.payload.items,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        filteredItems: action.payload,
      };
    default:
      return state;
  }
};
