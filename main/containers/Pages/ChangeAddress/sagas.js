import { put, takeLatest, delay } from "redux-saga/effects";
import { SAVE_ADDRESS, GET_ADDRESS } from "./constants";

import * as RootNavigation from "../../../../RootNavigation";

import triggerAPIRequest from "../../../utils/apiUtils";
import { showToastMsg } from "../../../hoc/Toast/actions";
import { setAddress, setIsUpdating } from "./actions";

export function* getAddress() {
  try {
    const response = yield triggerAPIRequest("getUserAddress", "POST", {});
    if (response && response.status == 200) {
      const {
        userPincode = "",
        userAddress = "",
        userGeoPoint = [],
        userLandMark = "",
        userName
      } = response.data;
      yield put(
        setAddress({userName, userAddress, userLandMark, userGeoPoint, userPincode })
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

      const { userName } = response.data;

      yield put(
        setAddress({
          userName,
          userAddress,
          userLandMark,
          userGeoPoint,
          userPincode: addressObj.pinCode
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

export function* watchForListRequest() {
  yield takeLatest(SAVE_ADDRESS, updateAddress);
  yield takeLatest(GET_ADDRESS, getAddress);
}

export default [watchForListRequest];
