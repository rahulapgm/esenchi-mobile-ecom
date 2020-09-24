import { put, takeLatest, call } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import {
  signInSuccess,
  signInErr,
  verifyLoginSuccess,
  verifyLoginErr,
  validateOTPSuccess,
  setInCorrectOTP,
  setLoginData
} from "./actions";

import { VERIFY_LOGIN, VALIDATE_OTP } from "./constants";

import { setAddress } from "../ChangeAddress/actions";

import triggerAPIRequest from "../../../utils/apiUtils";
import * as RootNavigation from "../../../../RootNavigation";

// import NavigationService from "../../../utils/navigationService";

import { showLoader, closeLoader } from "../../../hoc/Loader/actions";
import { showToastMsg } from "../../../hoc/Toast/actions";

export function* authenticateUser(userData) {
  const { data = {} } = userData;
  yield put(showLoader());
  try {
    yield put(setLoginData(data));
    const response = yield call(
      triggerAPIRequest,
      "authenticate",
      "post",
      data
    );
    if (response && response.status == 200) {
      yield AsyncStorage.setItem("userPhoneNumber", data.customerPh);
      yield put(closeLoader());
    } else {
      yield put(showToastMsg({ toastMsg: "Failed to fetch otp" }));
      yield put(closeLoader());
    }
  } catch (err) {
    yield put(showToastMsg({ toastMsg: "Failed to fetch otp" }));
    yield put(closeLoader());
  }
}

export function* invokeOTPValidation(userData) {
  const { data = {} } = userData;
  yield put(showLoader());
  try {
    const response = yield call(triggerAPIRequest, "loginUser", "post", data);

    if (response && response.status == 200) {
      yield put(validateOTPSuccess(data));
      if (response.data && response.data.token) {
        yield AsyncStorage.setItem("userToken", response.data.token);

        const { user = {} } = response.data;

        const {
          userPincode = "",
          userAddress = "",
          userGeoPoint = [],
          userLandMark = "",
          userName = ""
        } = user;

        yield put(
          setAddress({
            userName,
            userAddress,
            userLandMark,
            userGeoPoint,
            userPincode
          })
        );
        if (userAddress) {
          yield RootNavigation.navigate("App", {
            screen: "HomeMain"
          });
        } else {
          yield RootNavigation.navigate("ChangeAddress", {
            screen: "ChangeAddress",
            params: { noHeaderButton: true }
          });
        }

        yield put(closeLoader());
      }
    } else {
      yield put(closeLoader());
      yield put(setInCorrectOTP(true));
    }
  } catch (err) {
    yield put(closeLoader());
    yield put(setInCorrectOTP(true));
  }
}

export function* watchForListRequest() {
  yield takeLatest(VERIFY_LOGIN, authenticateUser);
  yield takeLatest(VALIDATE_OTP, invokeOTPValidation);
}

export default [watchForListRequest];
