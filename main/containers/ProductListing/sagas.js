import { put, takeLatest, delay } from "redux-saga/effects";
import {
  setProductsListOnCategory,
  fetchErrorOnProductCategory,
  showProductListLoader
} from "./actions";
import {
  GET_PRODUCTS_ON_CATEGORY,
} from "./constants";

import triggerAPIRequest from "../../utils/apiUtils";
import { showToastMsg } from "../../hoc/Toast/actions";

export function* fetchProductsOnCategory(actionObj) {

  yield put(showProductListLoader(true));

  try {
    const data = actionObj && actionObj.data
    const response = yield triggerAPIRequest(
      "searchProducts",
      "POST",
      data
    );
    if (response && response.status == 200) {
      const {docs = [], isAllDocumentLoaded} = response.data;
      yield put(setProductsListOnCategory({docs, isAllDocumentLoaded}));
      yield put(showProductListLoader(false));
    } else {
      yield put(showToastMsg({toastMsg:`No Products Available`}))
      yield put(fetchErrorOnProductCategory(response));
      yield put(showProductListLoader(false));
    }
  } catch (e) {
    yield put(showToastMsg({toastMsg:`No Products Available`}))
    yield put(fetchErrorOnProductCategory(e));
    yield put(showProductListLoader(false));
  }
}

export function* watchForListRequest() {
  yield takeLatest(GET_PRODUCTS_ON_CATEGORY, fetchProductsOnCategory);
}

export default [watchForListRequest];
