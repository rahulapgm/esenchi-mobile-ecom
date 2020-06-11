import { fromJS } from "immutable";

import {
	SET_CATEGORY_TYPE,
	GET_PRODUCTS,
	GET_PRODCUTS_SUCCESS,
	GET_PRODCUTS_ERROR,
	SET_PRODUCT_LIST,
	SET_SEARCH_TERM,
	GET_SEARCH_SUGGESTION,
} from "./constants";

const initialState = fromJS({ productList: [] });

export const productListReducers = (
	state = initialState,
	{ type, data, error }
) => {
	switch (type) {
		case SET_PRODUCT_LIST:
			return state.set("productList", data);
		default:
			return state;
	}
};
