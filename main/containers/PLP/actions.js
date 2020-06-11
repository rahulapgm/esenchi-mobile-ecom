import {
	SET_CATEGORY_TYPE,
	GET_PRODUCTS,
	GET_PRODCUTS_SUCCESS,
	GET_PRODCUTS_ERROR,
	SET_PRODUCT_LIST,
	SET_SEARCH_TERM,
	GET_SEARCH_SUGGESTION,
} from "./constants";

export const setCategoryType = (data) => {
	return { type: SET_CATEGORY_TYPE, data };
};

export const getProducts = (data = {}) => {
	return { type: GET_PRODUCTS, data };
};

export const getProductsSuccess = (data) => {
	return { type: GET_PRODCUTS_SUCCESS, data };
};

export const getProductsError = (data) => {
	return { type: GET_PRODCUTS_ERROR, data };
};

export const setProductList = (data = [1, 2]) => {
	return { type: SET_PRODUCT_LIST, data };
};

export const setSearchTerm = (data) => {
	return { type: SET_SEARCH_TERM, data };
};

export const getSearchSuggeston = (data) => {
	return { type: GET_SEARCH_SUGGESTION, data };
};
