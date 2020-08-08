import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectCartState = state => fromJS(state.get("Cart"));

export const makePaymentMethods= () =>
  createSelector(
    makeSelectCartState,
    state => state.get("paymentMethods") || state.getIn(["paymentMethods"], [])
  );
