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
        userLandMark = ""
      } = response.data;
      yield put(
        setAddress({ userAddress, userLandMark, userGeoPoint, userPincode })
      );
    }
  } catch (e) {
    yield put(showToastMsg({ toastMsg: "Address Fetch Failed" }));
    console.log(e);
  }
}

export function* updateAddress(actionObj) {
  const { data = {} } = actionObj;

  try {
    yield put(setIsUpdating(true));
    const { addressObj = {}, geoPoint = {}, userLandMark = "" } = data;
    const userGeoPoint = [];
    userGeoPoint.push(geoPoint);

    const userAddress = `${addressObj.HouseName}, ${addressObj.userLandMark}, ${addressObj.street}, ${addressObj.panchayath}, ${addressObj.pinCode}`;

    const postData = {
      userAddress,
      userLandMark,
      userGeoPoint,
      userPincode: addressObj.pinCode
    };

    const response = yield triggerAPIRequest("saveAddress", "POST", postData);
    console.log(response);

    if (response && response.status == 200) {
      yield put(showToastMsg({ toastMsg: "Address Saved!" }));
      yield put(
        setAddress({
          userAddress,
          userLandMark,
          userGeoPoint,
          userPincode: addressObj.pinCode
        })
      );
      yield delay(500);
      yield RootNavigation.navigate("App", { screen: "CartTab" });
    } else {
      yield put(showToastMsg({ toastMsg: "Address Saved Failed!" }));
    }

    yield put(setIsUpdating(false));
  } catch (e) {
    yield put(setIsUpdating(false));
    yield put(showToastMsg({ toastMsg: "Address Saved Failed!" }));
    console.log(e);
  }
}

export function* watchForListRequest() {
  yield takeLatest(SAVE_ADDRESS, updateAddress);
  yield takeLatest(GET_ADDRESS, getAddress);
}

export default [watchForListRequest];
