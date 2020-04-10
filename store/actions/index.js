import {
  FETCH_ALL_PRODUCTS,
  GET_PRODUCTS,
  SHOW_LOADER,
  HIDE_LOADER
} from "../../constants/productLoadConstants";

export const fetchAllProducts = products => {
  return {
    type: FETCH_ALL_PRODUCTS,
    products
  };
};

export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  };
};

export const toggleLoader = show => {
  if (show) {
    return {
      type: SHOW_LOADER
    };
  } else {
    return {
      type: HIDE_LOADER
    };
  }
};
