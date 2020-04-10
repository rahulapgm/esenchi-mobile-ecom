import { createSelector } from "reselect";
import { fromJS } from "immutable";
const makeSelectState = state => fromJS(state.get('loginReducer'));
export const makeSelectIsFetching = () =>
  createSelector(
    makeSelectState,
    state => state.getIn(["isFetchingOTP"], false)
  );

export const makeSelectUserLoginData = () =>
  createSelector(
    makeSelectState,
    state => state.getIn(["userLoginData"], {})
  );


export const makeSelectLoginErrors = () =>
  createSelector(
    makeSelectState,
    state => state.getIn(["isError"], {})
  );


export const makeSelectLoginDataFetched = () =>
  createSelector(
    makeSelectState,
    state => state.getIn(["loginDataFetched"])
  );
