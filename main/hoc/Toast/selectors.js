import { createSelector } from "reselect";
import { fromJS } from "immutable";

const makeSelectToastState= state => fromJS(state.get("toast"));

export const makeSelectToastVisibility = () =>
  createSelector(
    makeSelectToastState,
    state => state.get("toastVisibility") || state.getIn(["toastVisibility"], false)
  );

  export const makeSelectToastData = () =>
  createSelector(
    makeSelectToastState,
    state => state.get("toastData") || state.getIn(["toastData"], {})
  );

