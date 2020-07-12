import {
  GET_PRODUCTS_ON_CATEGORY,
  SET_PRODUCTS_ON_CATEGORY,
  FETCH_ERROR_PRODCUT_LISTING
} from "./constants";

export const getProductsListOnCategory = (data) => {
  return {
    type: GET_PRODUCTS_ON_CATEGORY,
    data
  }
}

export const setProductsListOnCategory = (data) => {
  return {
    type: SET_PRODUCTS_ON_CATEGORY,
    data
  }
}

export const fetchErrorOnProductCategory = (data) => {
  return {
    type: FETCH_ERROR_PRODCUT_LISTING,
    data
  }
}
