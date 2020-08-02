import { put, takeLatest, delay, select } from "redux-saga/effects";

import {
  VIEW_CART_ITEMS,
  UPDATE_CURRENT_ORDER,
  REMOVE_CART_ITEM
} from "./constants";
import {
  viewCartItemsSucess,
  viewCartItemsError,
  orderAPIFetching,
  updateOrderAPIStatus
} from "./actions";

import { updateFetchingProductId } from "./OrderItem/actions";

import triggerAPIRequest from "../../../utils/apiUtils";

import { makeSelectOrderApiFetching } from "./selectors";

export function* fetchUserCartItems() {
  const data = { customerPh: "+919633882121" };
  const isOrderApiFetching = yield select(makeSelectOrderApiFetching());
  if (!isOrderApiFetching) {
    yield put(orderAPIFetching(true));
    const response = yield triggerAPIRequest("viewCart", "POST", data);
    if (response && response.status == 200) {
      // console.log("Cart Items", response.data);
      yield put(viewCartItemsSucess(response.data));
      yield put(orderAPIFetching(false));
    } else {
      yield put(viewCartItemsError(response));
      yield put(orderAPIFetching(false));
    }
  }
}

export function* updateOrder() {
  const data = { customerPh: "+919633882121" };
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
      customerPh: "+919633882121",
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

export function* watchForListRequest() {
  yield takeLatest(VIEW_CART_ITEMS, fetchUserCartItems);
  yield takeLatest(UPDATE_CURRENT_ORDER, updateOrder);
  yield takeLatest(REMOVE_CART_ITEM, removeProductFromCart);
}

export default [watchForListRequest];
