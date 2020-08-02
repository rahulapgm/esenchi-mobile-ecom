import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectCartState = state => fromJS(state.get("Cart"));

export const makeSelectCartItems = () =>
  createSelector(
    makeSelectCartState,
    state => state.get("cartDetailsObj") || state.getIn(["cartDetailsObj"], [])
  );

export const makeSelectOrderApiFetching = () =>
    createSelector(
      makeSelectCartState,
      state => state.get("orderApiFetching") || state.getIn(['orderApiFetching'], false)
    )

export const makeSelectOrderAPIStatus = () =>
    createSelector(
      makeSelectCartState,
      state => state.get("orderAPIStatus") || state.getIn(['orderAPIStatus'], null)
    )

export const makeProductIdUpdating = () =>
    createSelector(
      makeSelectCartState,
      state => state.get("productIdUpdating") || state.getIn(['productIdUpdating'], "")
    )
