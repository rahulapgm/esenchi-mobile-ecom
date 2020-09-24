import { fromJS } from "immutable";

import { SET_ADDRESS, IS_UPDATING, SET_ESTIMATED_DELIVERY_TIME } from "./constants";

const initialState = fromJS({
  userAddress: "",
  userGeoPoint: "",
  userLandMark: "",
  userPincode: ""
});

export const addressReducers = (
  state = initialState,
  { type, data, error }
) => {
  switch (type) {
    case SET_ADDRESS:
      return state
        .set("userAddress", data.userAddress)
        .set("userGeoPoint", data.userGeoPoint)
        .set("userLandMark", data.userLandMark)
        .set("userPincode", data.userPincode)
        .set("userName", data.userName)
        .set("estimatedDelivery", data.estimatedDelivery)
    case IS_UPDATING:
      return state.set('isUpdating', data);
    case SET_ESTIMATED_DELIVERY_TIME:
      return state.set("estimatedDelivery",data);
    default:
      return state;
  }
};

export default addressReducers;
