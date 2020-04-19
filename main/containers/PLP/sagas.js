import { put, takeLatest, delay } from "redux-saga/effects";
import { setProductList, getProductsError } from "./actions";

import {
	SET_CATEGORY_TYPE,
	GET_PRODUCTS,
	GET_PRODCUTS_SUCCESS,
	GET_PRODCUTS_ERROR,
	SET_PRODUCT_LIST,
	SET_SEARCH_TERM,
	GET_SEARCH_SUGGESTION,
} from "./constants";

import triggerAPIRequest from "../../utils/apiUtils";

export function* findProducts(data = {}) {
	const response = yield triggerAPIRequest("getProducts", "GET", data);
	if (response && response.status == 200) {
		console.log("response->productlist->\n", response.data);
		yield put(setProductList(response.data));
	} else {
		yield put(getProductsError(response));
	}
}

export function* findSearchSuggestion(data) {}

export function* watchForListRequest() {
	yield takeLatest(GET_PRODUCTS, findProducts);
	yield takeLatest(GET_SEARCH_SUGGESTION, findSearchSuggestion);
}

export default [watchForListRequest];