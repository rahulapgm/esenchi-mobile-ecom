import { fromJS } from "immutable";

import {
  VIEW_CART_ITEMS_SUCCESS,
  VIEW_CART_ITEM_ERROR,
  ORDER_API_FETCHING,
  UPDATE_ORDER_API_STATUS,
  SET_PAYMENT_METHODS
} from "./constants";

import { UPDATE_FETCHING_PRODUCT_ID } from "./OrderItem/constants";

const initialState = fromJS({ cartDetailsObj: {} });

export const cartReducers = (state = initialState, { type, data, error }) => {
  switch (type) {
    case VIEW_CART_ITEMS_SUCCESS:
      return state.set("cartDetailsObj", data).set("cartError", {});
    case VIEW_CART_ITEM_ERROR:
      return state.set("cartError", data);
    case ORDER_API_FETCHING:
      // console.log("**************************************************");
      // console.log("Redux State", state);
      // console.log("**************************************************");
      return state.set("orderApiFetching", data);
    case UPDATE_ORDER_API_STATUS:
      return state.set("orderAPIStatus", data);
    case UPDATE_FETCHING_PRODUCT_ID:
      return state.set("productIdUpdating", data);
    case SET_PAYMENT_METHODS:
      return state.set("paymentMethods", data);
    default:
      return state;
  }
};
