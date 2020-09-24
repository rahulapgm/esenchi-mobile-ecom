import { fromJS } from "immutable";

import { SHOW_ORDER_CONFITMATION_SUCCESS, SHOW_ORDER_CONFITMATION_FAILURE, SET_ORDER_CONFIRMATION_DATA } from './constants';

const initialState = fromJS({ orderData: {}, showOrderConfirmation:false });

export const checkoutReducers = (state = initialState, { type, data, error }) => {
  switch (type) {
    case SHOW_ORDER_CONFITMATION_SUCCESS:
      return state.set("showOrderConfirmation", data);
    case SHOW_ORDER_CONFITMATION_FAILURE:
      return state.set("showOrderConfirmationFailure", data);
    case SET_ORDER_CONFIRMATION_DATA:
      return state.set("placedOrderData", data);
    default:
        return state;
  }
}

export default checkoutReducers;
