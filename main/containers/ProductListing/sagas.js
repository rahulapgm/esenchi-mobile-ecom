import { put, takeLatest, delay } from "redux-saga/effects";
import {
  getProductsListOnCategory,
  setProductsListOnCategory,
  fetchErrorOnProductCategory
} from "./actions";
import {
  GET_PRODUCTS_ON_CATEGORY,
  SET_PRODUCTS_ON_CATEGORY,
  FETCH_ERROR_PRODCUT_LISTING
} from "./constants";

import triggerAPIRequest from "../../utils/apiUtils";

export function* fetchProductsOnCategory(data = {}) {
  try {
    const response = yield triggerAPIRequest(
      "getProductsByFilter",
      "GET",
      data
    );
    if (response && response.status == 200) {
      // console.log("products -> \n", response.data);
      yield put(setProductsListOnCategory(response.data));
    } else {
      yield put(fetchErrorOnProductCategory(response));
    }
  } catch (e) {
    yield put(fetchErrorOnProductCategory(e));
  }
}

export function* watchForListRequest() {
  yield takeLatest(GET_PRODUCTS_ON_CATEGORY, fetchProductsOnCategory);
}

export default [watchForListRequest];
