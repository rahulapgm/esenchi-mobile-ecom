import { put, takeLatest, delay } from "redux-saga/effects";
import { SAVE_ADDRESS, GET_ADDRESS, GET_ESTIMATED_DELIVERY_TIME } from "./constants";

import * as RootNavigation from "../../../../RootNavigation";

import triggerAPIRequest from "../../../utils/apiUtils";
import { showToastMsg } from "../../../hoc/Toast/actions";
import { setAddress, setIsUpdating, setEstimatedDelivery } from "./actions";

export function* getAddress() {
  try {
    const response = yield triggerAPIRequest("getUserAddress", "POST", {});
    if (response && response.status == 200) {
      const {
        userPincode = "",
        userAddress = "",
        userGeoPoint = [],
        userLandMark = "",
        userName,
        estimatedDelivery
      } = response.data;
      yield put(
        setAddress({userName, userAddress, userLandMark, userGeoPoint, userPincode, estimatedDelivery })
      );
    }
  } catch (e) {
    yield put(showToastMsg({ toastMsg: "Address Fetch Failed" }));
  }
}

export function* updateAddress(actionObj) {
  const { data = {} } = actionObj;

  try {
    yield put(setIsUpdating(true));
    const { addressObj = {}, geoPoint = {} } = data;
    const userGeoPoint = [];
    userGeoPoint.push(geoPoint);

    const userAddress = `${addressObj.houseName}, ${addressObj.userLandMark}, ${addressObj.street}, ${addressObj.panchayath}, ${addressObj.pinCode}`;

    const {userName, userLandMark, pinCode} = addressObj;

    const postData = {
      userName,
      userAddress,
      userGeoPoint,
      userLandMark,
      userPincode: pinCode
    };

    const response = yield triggerAPIRequest("saveAddress", "POST", postData);

    if (response && response.status == 200) {

      const { userName, estimatedDelivery } = response.data;

      yield put(
        setAddress({
          userName,
          userAddress,
          userLandMark,
          userGeoPoint,
          userPincode: addressObj.pinCode,
          estimatedDelivery
        })
      );

      yield put(showToastMsg({ toastMsg: "Address Saved!" }));
      yield RootNavigation.navigate("App", {screen: "Home"});
    } else {
      yield put(showToastMsg({ toastMsg: "Address Saved Failed!" }));
    }

    yield put(setIsUpdating(false));
  } catch (e) {
    yield put(setIsUpdating(false));
    yield put(showToastMsg({ toastMsg: "Address Saved Failed!" }));
  }
}

export function* getEstimatedDelivery(actionObj) {
  const userPincode = actionObj && actionObj.data;
  try {
    const response = yield triggerAPIRequest("getEstimatedDelivery", "POST", { userPincode });
    if (response && response.status === 200) {
      const {
        estimatedDelivery
      } = response.data;
      yield put(
        setEstimatedDelivery(estimatedDelivery)
      );
    }
  } catch (e) {
  }
}

export function* watchForListRequest() {
  yield takeLatest(SAVE_ADDRESS, updateAddress);
  yield takeLatest(GET_ADDRESS, getAddress);
  yield takeLatest(GET_ESTIMATED_DELIVERY_TIME, getEstimatedDelivery);
}

export default [watchForListRequest];
