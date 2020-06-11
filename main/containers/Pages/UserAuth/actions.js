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

export const signInUser = (data) => {
	return {
		type: SIGN_IN_USER,
		data,
	};
};

export const signInSuccess = (data) => {
	return {
		type: SIGN_IN_SUCCESS,
		data,
	};
};

export const signInErr = (data) => {
	return {
		type: SIGN_IN_USER_ERR,
		data,
	};
};

export const signUpUser = (data) => {
	return {
		type: SIGN_UP_USER,
		data,
	};
};

export const signUpSuccess = (data) => {
	return {
		type: SIGN_UP_SUCCESS,
		data,
	};
};

export const signUpErr = (data) => {
	return {
		type: SIGN_UP_USER_ERR,
		data,
	};
};

export const addUserToken = (data) => {
	return {
		type: ADD_USER_TOKEN,
		data,
	};
};

export const verifyLogin = (data) => {
	return { type: VERIFY_LOGIN, data };
};
export const verifyLoginSuccess = (data) => {
	return { type: VERIFY_LOGIN_SUCCESS, data };
};

export const verifyLoginErr = (data) => {
	return { type: VERIFY_LOGIN_ERR, data };
};

export const validateOTP = (data) => {
	return { type: VALIDATE_OTP, data };
};

export const validateOTPErr = (data) => {
	return { type: VALIDATE_OTP_ERR, data };
};

export const validateOTPSuccess = (data) => {
	return { type: VALIDATE_OTP_SUCCESS, data };
};

export const setLoginData = (data) => {
	return { type: SET_LOGIN_DATA, data };
};

export const isFetchingOTP = (data) => {
	return {
		type: IS_FETCHING_OTP,
		data,
	};
};

export const resetUserLoginData = () => {
	return {
		type: RESET_LOGIN_DATA,
	};
};
