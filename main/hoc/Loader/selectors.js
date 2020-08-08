import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectToastState = state => fromJS(state.get("loader"));

export const makeSelectShowLoader = () =>
  createSelector(
    makeSelectToastState,
    state => state.get("showLoader") || state.getIn(["showLoader"], false)
  );
