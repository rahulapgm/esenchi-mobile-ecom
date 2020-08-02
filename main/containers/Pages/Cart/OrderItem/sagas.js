import { put, takeLatest, delay } from "redux-saga/effects";

import triggerAPIRequest from "../../../../utils/apiUtils";

import { UPDATE_ITEM_QUANTITY } from "./constants";

import { viewCartItemsSucess, viewCartItemsError } from "../actions";

import { updateFetchingProductId } from "./actions";

export function* updateCartItemQuantity(actionObj) {
  try {
    const { data } = actionObj;
    const requestData = {
      customerPh: "+919633882121",
      ...data
    };

    const { productId } = data;

    yield put(updateFetchingProductId(productId));

    const response = yield triggerAPIRequest(
      "updateProductQuantity",
      "POST",
      requestData
    );
    if (response && response.status == 200) {
      yield put(viewCartItemsSucess(response.data));
      yield put(updateFetchingProductId(""));
    } else {
      yield put(viewCartItemsError(response));
      yield put(updateFetchingProductId(""));
    }
  } catch (e) {
    yield put(viewCartItemsError(e));
    yield put(updateFetchingProductId(""));
  }
}

export function* watchForListRequest() {
  yield takeLatest(UPDATE_ITEM_QUANTITY, updateCartItemQuantity);
}

export default [watchForListRequest];
