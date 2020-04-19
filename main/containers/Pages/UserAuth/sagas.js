import { put, takeLatest, delay } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import {
	signInSuccess,
	signInErr,
	verifyLoginSuccess,
	verifyLoginErr,
	validateOTPSuccess,
	validateOTPErr,
	setLoginData,
	isFetchingOTP,
} from "./actions";

import { SIGN_IN_USER, VERIFY_LOGIN, VALIDATE_OTP } from "./constants";

import triggerAPIRequest from "../../../utils/apiUtils";
import * as RootNavigation from "../../../../RootNavigation";

// import NavigationService from "../../../utils/navigationService";

export function* invokeSignInAPI(userData) {
	try {
		yield signInSuccess(userData);
	} catch (err) {
		yield signInErr(err);
	}
}

export function* authenticateUser(userData) {
	const { data = {} } = userData;
	yield put(isFetchingOTP(true));
	try {
		yield put(setLoginData(data));
		const response = yield triggerAPIRequest("authenticate", "post", {
			...data,
		});
		if (response && response.status == 200) {
			yield put(verifyLoginSuccess({ ...data }));
			yield delay(2500);
			yield put(isFetchingOTP(false));
		} else {
			yield put(verifyLoginErr(response));
		}
	} catch (err) {
		yield put(isFetchingOTP(false));
		console.log("verify Err", err);
		yield put(verifyLoginErr(err));
	}
}

export function* invokeOTPValidation(userData) {
	const { data = {} } = userData;
	yield put(isFetchingOTP(true));
	try {
		const response = yield triggerAPIRequest("loginUser", "post", {
			...data,
		});

		if (response && response.status == 200) {
			yield put(validateOTPSuccess(data));
			if (response.data && response.data.token) {
				yield put(isFetchingOTP(false));
				yield AsyncStorage.setItem("userToken", response.data.token);
			}
			RootNavigation.navigate("App", {}, RootNavigation.navigate("Home"));
			yield delay(2000);
		} else {
			yield put(isFetchingOTP(false));
			yield put(validateOTPErr(true));
			console.log("message=> loginUser 2", response);
		}
	} catch (err) {
		console.log(err);
		yield put(validateOTPErr(err));
	}
}

export function* watchForListRequest() {
	yield takeLatest(SIGN_IN_USER, invokeSignInAPI);
	yield takeLatest(VERIFY_LOGIN, authenticateUser);
	yield takeLatest(VALIDATE_OTP, invokeOTPValidation);
}

export default [watchForListRequest];
