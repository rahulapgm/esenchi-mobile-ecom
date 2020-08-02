import { createSelector } from "reselect";
import { fromJS } from "immutable";

const productState = state => fromJS(state.get("productCart"));

export const selectProductState = () =>
  createSelector(
    productState,
    state => state.get("isUpdatingCartId")
  );
