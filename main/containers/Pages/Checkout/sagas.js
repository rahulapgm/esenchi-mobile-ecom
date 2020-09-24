import { put, takeLatest, delay, call } from "redux-saga/effects";

import * as RootNavigation from "../../../../RootNavigation";

import { PLACE_ORDER } from './constants';
import { showLoader, closeLoader } from "../../../hoc/Loader/actions";
import triggerAPIRequest from "../../../utils/apiUtils";
import { setOrderConfirmationData } from "./actions";

export function* placeOrder() {
  yield put(showLoader());
  try {
    const response = yield call(triggerAPIRequest, "placeOrder", "POST", {});
    if(response && response.status === 200){
      const { orderObject } = response.data;
      yield put(setOrderConfirmationData(orderObject));
      yield RootNavigation.navigate("OrderConfirmation");
    }
  } catch(e) {
    console.log(e);
  }
  yield put(closeLoader());
}

export function* watchForListRequest() {
  yield takeLatest(PLACE_ORDER, placeOrder);
}

export default [watchForListRequest];
