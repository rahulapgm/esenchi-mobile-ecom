import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectState = (state) => fromJS(state.get("productListReducers"));

export const makeSelectProductList = () =>
	createSelector(
		makeSelectState,
		(state) => state.get("productList") || state.getIn(["productList"], [])
	);
