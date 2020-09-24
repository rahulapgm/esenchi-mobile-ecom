import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectCartState = state => fromJS(state.get("Cart"));
const makeSelectCheckoutState = state => fromJS(state.get("Checkout"));

export const makePaymentMethods= () =>
  createSelector(
    makeSelectCartState,
    state => state.get("paymentMethods") || state.getIn(["paymentMethods"], [])
  );

export const makeSelectPlacedOrderData = () =>
  createSelector(
    makeSelectCheckoutState,
    state => state.get("placedOrderData") || state.getIn(["placedOrderData"], {})
  );

