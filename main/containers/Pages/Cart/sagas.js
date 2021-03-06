import { put, takeLatest } from "redux-saga/effects";

import {
  VIEW_CART_ITEMS,
  UPDATE_CURRENT_ORDER,
  REMOVE_CART_ITEM,
  GET_PAYMENT_METHODS,
  REMOVE_CART_COMBO_ITEM,
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
import { VIEW_CHECKOUT } from "../Checkout/constants";
import { showLoader, closeLoader } from "../../../hoc/Loader/actions";

export function* fetchUserCartItems() {
  yield put(orderAPIFetching(true));
  try{
    const response = yield triggerAPIRequest("viewCart", "POST",{});
    if (response && response.status == 200) {
      yield put(viewCartItemsSucess(response.data));
      yield put(orderAPIFetching(false));
    } else {
      yield put(viewCartItemsError(response));
      yield put(orderAPIFetching(false));
    }
  }
  catch(e){
    yield put(orderAPIFetching(false));
  }
}

export function* updateOrder() {
  try {
    yield put(orderAPIFetching(true));
    const response = yield triggerAPIRequest("updateOrder", "POST", {});
    if (response && response.status === 200) {
      yield put(
        updateOrderAPIStatus({ status: "success", message: "success" })
      );
      yield put(viewCartItemsSucess(response.data));
    } else {
      yield put(
        updateOrderAPIStatus({
          status: "failed",
          message:
            "Sorry, An Error Occured. Our team will fix this issue soon.."
        })
      );
    }
  } catch (e) {
    yield put(
      updateOrderAPIStatus({
        status: "failed",
        message: "Sorry, An Error Occured. Our team will fix this issue soon.."
      })
    );
  }
  yield put(orderAPIFetching(false));
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
    { type: "Cash On Delivery", icon: "cash", selected: false }
  ];

  try {
    const response = yield triggerAPIRequest("getPaymentMethods");
    if (response && response.status === 200 && response.data && response.data.paymentMethods) {
      const paymentMethods  = response.data.paymentMethods;
      yield put(setPaymentMethods(paymentMethods));
    } else {
      yield put(setPaymentMethods(fallbackPaymentMethods));
    }
  } catch (e) {
    yield put(setPaymentMethods(fallbackPaymentMethods));
  }
}

export function* removeCartComboItem(actionObj){
  const comboId = actionObj && actionObj.data;
  try {
    yield put(updateFetchingProductId(comboId));
    const response = yield triggerAPIRequest("removeCartComboItem", "POST", {
      comboId
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

export function* fetchUserCheckoutItems() {
  yield put(showLoader());
  try{
    const response = yield triggerAPIRequest("viewCheckout", "POST",{});
    if (response && response.status == 200) {
      yield put(viewCartItemsSucess(response.data));
    } else {
      yield put(viewCartItemsError(response));
    }
    yield put(closeLoader());
  }
  catch(e){
    yield put(closeLoader());
  }
}

export function* watchForListRequest() {
  yield takeLatest(VIEW_CART_ITEMS, fetchUserCartItems);
  yield takeLatest(UPDATE_CURRENT_ORDER, updateOrder);
  yield takeLatest(REMOVE_CART_ITEM, removeProductFromCart);
  yield takeLatest(GET_PAYMENT_METHODS, getAllPaymentMethods);
  yield takeLatest(REMOVE_CART_COMBO_ITEM, removeCartComboItem);
  yield takeLatest(VIEW_CHECKOUT, fetchUserCheckoutItems);
}

export default [watchForListRequest];
