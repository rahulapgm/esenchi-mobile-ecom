import {
 PLACE_ORDER,
 PLACE_ORDER_FAILED,
 PLACE_ORDER_SUCCESS,
 SET_ORDER_CONFIRMATION_DATA,
 VIEW_CHECKOUT,
 SHOW_ORDER_CONFITMATION_SUCCESS,
 SHOW_ORDER_CONFITMATION_FAILURE,
} from './constants';

export const placeOrder = (data) => {
  return {
    type: PLACE_ORDER,
    data
  }
}

export const placeOrderFailed = (data) => {
  return {
    type: PLACE_ORDER_FAILED,
    data
  }
}

export const placeOrderSuccess = (data) => {
  return {
    type: PLACE_ORDER_SUCCESS,
    data
  }
}

export const viewCheckout = () => {
  return {
    type: VIEW_CHECKOUT
  }
}

export const showOrderConfirmationSuccess = data => {
  return {
    type: SHOW_ORDER_CONFITMATION_SUCCESS,
    data
  }
}

export const showOrderConfirmationFailure = data => {
  return {
    type: SHOW_ORDER_CONFITMATION_FAILURE,
    data
  }
}

export const setOrderConfirmationData = data => {
  return {
    type: SET_ORDER_CONFIRMATION_DATA,
    data
  }
}

export const setOrderConfirmationError = data => {
  return {
    type: SET_ORDER_CONFIRMATION_ERROR,
    data
  }
}
