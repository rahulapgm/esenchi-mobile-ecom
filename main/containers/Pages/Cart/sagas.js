import { put, takeLatest, delay, select } from "redux-saga/effects";

import {
  VIEW_CART_ITEMS,
  UPDATE_CURRENT_ORDER,
  REMOVE_CART_ITEM,
  GET_PAYMENT_METHODS
} from "./constants";
import {
  viewCartItemsSucess,
  viewCartItemsError,
  orderAPIFetching,
  updateOrderAPIStatus,
  setPaymentMethods
} from "./actions";

import { updateFetchingProductId } from "./OrderItem/actions";

import triggerAPIRequest from "../../../utils/apiUtils";

import { makeSelectOrderApiFetching } from "./selectors";

export function* fetchUserCartItems() {
  const isOrderApiFetching = yield select(makeSelectOrderApiFetching());
  if (!isOrderApiFetching) {
    yield put(orderAPIFetching(true));
    const response = yield triggerAPIRequest("viewCart", "POST",{});
    if (response && response.status == 200) {
      yield put(viewCartItemsSucess(response.data));
      yield put(orderAPIFetching(false));
    } else {
      console.log(response.status);
      yield put(viewCartItemsError(response));
      yield put(orderAPIFetching(false));
    }
  }
}

export function* updateOrder() {
  try {
    yield put(orderAPIFetching(true));
    const response = yield triggerAPIRequest("updateOrder", "POST", data);
    if (response && response.status == 200) {
      yield put(
        updateOrderAPIStatus({ status: "success", message: "success" })
      );
      yield put(orderAPIFetching(false));
      yield put(viewCartItemsSucess(response.data));
    } else {
      yield put(orderAPIFetching(false));
      yield put(
        updateOrderAPIStatus({
          status: "failed",
          message:
            "Sorry, An Error Occured. Our team will fix this issue soon.."
        })
      );
    }
  } catch (e) {
    yield put(orderAPIFetching(false));
    yield put(
      updateOrderAPIStatus({
        status: "failed",
        message: "Sorry, An Error Occured. Our team will fix this issue soon.."
      })
    );
  }
}

export function* removeProductFromCart(actionObj) {
  const productId = actionObj && actionObj.data;

  try {
    yield put(updateFetchingProductId(productId));
    const response = yield triggerAPIRequest("removeCartItem", "POST", {
      productId
    });
    if (response && response.status == 200) {
      yield put(viewCartItemsSucess(response.data));
      yield put(updateFetchingProductId(""));
    } else {
      yield put(viewCartItemsError(response));
      yield put(updateFetchingProductId(""));
    }
  } catch (e) {
    yield put(orderAPIFetching(false));
    yield put(
      updateOrderAPIStatus({
        status: "failed",
        message: "Sorry, An Error Occured. Our team will fix this issue soon.."
      })
    );
  }
}

export function* getAllPaymentMethods(){

  const fallbackPaymentMethods = [
    { type: "UPI", icon: "contactless-payment", selected: true },
    { type: "Google Pay", icon: "google", selected: false },
    { type: "Credit/Debit/ATM Card", icon: "credit-card", selected: false },
  ];

  try {
    const response = yield triggerAPIRequest("getPaymentMethods");
    if (response && response.status == 200) {
      const paymentMethods  = response.data;
      yield put(setPaymentMethods(paymentMethods));
    } else {
      yield put(setPaymentMethods(fallbackPaymentMethods));
    }
  } catch (e) {
    yield put(setPaymentMethods(fallbackPaymentMethods));
  }
}

export function* watchForListRequest() {
  yield takeLatest(VIEW_CART_ITEMS, fetchUserCartItems);
  yield takeLatest(UPDATE_CURRENT_ORDER, updateOrder);
  yield takeLatest(REMOVE_CART_ITEM, removeProductFromCart);
  yield takeLatest(GET_PAYMENT_METHODS, getAllPaymentMethods);
}

export default [watchForListRequest];
