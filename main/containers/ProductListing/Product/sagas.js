
import { put, takeLatest, delay } from "redux-saga/effects";

import { ADD_PRODUCT_TO_CART } from './constants';

import { isUpdatingCartItem, addToCartAction } from './actions';


import triggerAPIRequest from "../../../utils/apiUtils";
import { showToastMsg } from "../../../hoc/Toast/actions";

export function* updateCartItem({ data }) {
  data.customerPh = "+919633882121";
  const response = yield triggerAPIRequest("addCartItem", "POST", data);
  if (response && response.status == 200) {
    const { productName = "" } = data;
    yield put(addToCartAction.success());
    yield put(showToastMsg({ toastMsg: `Successfully Added '${productName}' to Cart` }));
  } else {
    yield put(addToCartAction.failure());
    yield put(showToastMsg({ toastMsg: `Failed to add '${productName}', Sorry..` }));
    yield put(getProductsError(response));
  }
}



export function* watchForListRequest() {
  yield takeLatest(addToCartAction.REQUEST, updateCartItem);
}

export default [watchForListRequest];
