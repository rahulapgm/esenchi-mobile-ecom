import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectSearchModalState = state => fromJS(state.get("productSearch"));

export const makeSelectSearchSuggestions = () =>
  createSelector(
    makeSelectSearchModalState,
    state => state.get("searchSuggestions") || state.getIn(["searchSuggestions"], {})
  );
