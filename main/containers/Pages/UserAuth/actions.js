import {
  VERIFY_LOGIN,
  VERIFY_LOGIN_ERR,
  VERIFY_LOGIN_SUCCESS,
  VALIDATE_OTP,
  VALIDATE_OTP_ERR,
  VALIDATE_OTP_SUCCESS,
  SET_LOGIN_DATA,
  RESET_LOGIN_DATA,
  INCORRECT_OTP_ERR
} from "./constants";

export const addUserToken = data => {
  return {
    type: ADD_USER_TOKEN,
    data
  };
};

export const verifyLogin = data => {
  return { type: VERIFY_LOGIN, data };
};
export const verifyLoginSuccess = data => {
  return { type: VERIFY_LOGIN_SUCCESS, data };
};

export const verifyLoginErr = data => {
  return { type: VERIFY_LOGIN_ERR, data };
};

export const validateOTP = data => {
  return { type: VALIDATE_OTP, data };
};

export const validateOTPErr = data => {
  return { type: VALIDATE_OTP_ERR, data };
};

export const validateOTPSuccess = data => {
  return { type: VALIDATE_OTP_SUCCESS, data };
};

export const setLoginData = data => {
  return { type: SET_LOGIN_DATA, data };
};

export const resetUserLoginData = () => {
  return {
    type: RESET_LOGIN_DATA
  };
};

export const setInCorrectOTP = (data) => {
  return {
    type: INCORRECT_OTP_ERR,
    data
  };
};

export const isAuthenticatingOTP = data => {
  return {
    type: IS_FETCHING_OTP,
    data
  };
};
