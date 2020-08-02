import { fromJS } from "immutable";

import { addToCartAction } from "./actions";

const initialState = fromJS({ isUpdatingCartId: "" });

export const productCartReducer = (state = initialState, { type, data, error }) => {
  switch (type) {
    case addToCartAction.REQUEST:
      return state.set("isUpdatingCartId", data.productId);
    case addToCartAction.SUCCESS:
      return state.set("isUpdatingCartId", "");
    case addToCartAction.FAILURE:
      return state.set("isUpdatingCartId", "");
    default:
      return state;
  }
};
