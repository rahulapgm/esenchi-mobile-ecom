import { fromJS } from "immutable";
import {
	SIGN_IN_USER,
	SIGN_IN_SUCCESS,
	SIGN_IN_USER_ERR,
	SIGN_UP_USER,
	SIGN_UP_SUCCESS,
	SIGN_UP_USER_ERR,
	VERIFY_LOGIN,
	VERIFY_LOGIN_ERR,
	VERIFY_LOGIN_SUCCESS,
	VALIDATE_OTP,
	VALIDATE_OTP_ERR,
	VALIDATE_OTP_SUCCESS,
	SET_LOGIN_DATA,
	IS_FETCHING_OTP,
	RESET_LOGIN_DATA,
} from "./constants";

const initialState = fromJS({
	userLoginData: {},
	isFetchingOTP: false,
	loginDataFetched: false,
	isError: false,
});

export const loginReducer = (state = initialState, { type, data, error }) => {
	switch (type) {
		case SET_LOGIN_DATA:
			return state.set("userLoginData", data).set("isError", false);
		case VERIFY_LOGIN_SUCCESS:
			return state
				.set("userLoginData", data)
				.set("isError", false)
				.set("loginDataFetched", false);
		case VALIDATE_OTP_SUCCESS:
			return state
				.set("userLoginData", data)
				.set("isError", false)
				.set("loginDataFetched", true);
		case RESET_LOGIN_DATA:
			return state
				.set("userLoginData", {})
				.set("isError", false)
				.set("loginDataFetched", false)
				.set("isFetchingOTP", false);
		case VERIFY_LOGIN_ERR:
		case VALIDATE_OTP_ERR:
			return state.set("isError", data);
		case IS_FETCHING_OTP:
			console.log("\n****State****\n");
			console.log(fromJS(state));
			console.log("\n*************\n");
			console.log("is fetching otp*******\n", { type, data });
			return state.set("isFetchingOTP", data);
		default:
			return state;
	}
};
