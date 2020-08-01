import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectSearchResultsState = state => fromJS(state.get("searchResults"));

export const makeSelectProductList = () =>
  createSelector(
    makeSelectSearchResultsState,
    state => state.get("productList") || state.getIn(["productList"], {})
  );

  export const makeSelectIsAllDocumentLoaded = () =>
  createSelector(
    makeSelectSearchResultsState,
    state => state.get("isAllDocumentLoaded") || state.getIn(["isAllDocumentLoaded"], {})
  );

  export const makeSelectProductListLoader = () => createSelector(
    makeSelectSearchResultsState,
    state => state.get("showProductListLoader") || state.getIn(["showProductListLoader"], false)
  );
