import { createSelector } from "reselect";
import { fromJS } from "immutable";

const MakeSelectUserAddressDetails = state =>
  fromJS(state.get("userAddressDetails"));

export const selectUserAddress = () =>
  createSelector(
    MakeSelectUserAddressDetails,
    state => state.get("userAddress")
  );

export const selectUserLandMark = () =>
  createSelector(
    MakeSelectUserAddressDetails,
    state => state.get("userLandMark")
  );

export const selectUserPincode = () =>
  createSelector(
    MakeSelectUserAddressDetails,
    state => state.get("userPincode")
  );

export const selectIsUpdating = () =>
  createSelector(
    MakeSelectUserAddressDetails,
    state => state.get("isUpdating")
  );

export const selectUserName = () =>
  createSelector(
    MakeSelectUserAddressDetails,
    state => state.get("userName")
  );
