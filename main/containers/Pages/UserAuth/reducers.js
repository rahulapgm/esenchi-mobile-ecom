import { fromJS } from "immutable";
import {
  VERIFY_LOGIN_ERR,
  VERIFY_LOGIN_SUCCESS,
  VALIDATE_OTP_ERR,
  VALIDATE_OTP_SUCCESS,
  SET_LOGIN_DATA,
  RESET_LOGIN_DATA,
  INCORRECT_OTP_ERR
} from "./constants";

const initialState = fromJS({
  userLoginData: {},
  isFetchingOTP: false,
  loginDataFetched: false,
  isError: false,
  isOTPFetchError: false,
  inCorrectOTP: false
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
    case INCORRECT_OTP_ERR:
      return state.set("inCorrectOTP", data);
    default:
      return state;
  }
};
