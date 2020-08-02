import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectAddCategoryState = state => fromJS(state.get("categoryDrawer"));

export const makeSelectCategoryList = () =>
  createSelector(
    makeSelectAddCategoryState,
    state => state.get("categoryList") || state.getIn(["categoryList"], {})
  );
