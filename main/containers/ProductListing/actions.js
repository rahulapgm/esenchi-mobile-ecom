import {
  GET_PRODUCTS_ON_CATEGORY,
  SET_PRODUCTS_ON_CATEGORY,
  FETCH_ERROR_PRODCUT_LISTING,
  ADD_PRODUCT_TO_CART,
  GET_PRODUCTS_ON_SCROLL,
  CLEAR_ALL_PRODUCTS_FROM_STORE,
  SHOW_PRODUCT_LIST_LOADER
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


export const addProductToCart = (data) => {
	return {
		type: ADD_PRODUCT_TO_CART,
		data
	}
}

export const getProductsListOnScroll = () => {
  return {
    type: GET_PRODUCTS_ON_SCROLL,
		data
  }
}

export const clearProductsFromStore = () => {
  return {
    type: CLEAR_ALL_PRODUCTS_FROM_STORE
  }
}


export const showProductListLoader = (data) => {
  return {
    type:SHOW_PRODUCT_LIST_LOADER,
    data
  }
}
