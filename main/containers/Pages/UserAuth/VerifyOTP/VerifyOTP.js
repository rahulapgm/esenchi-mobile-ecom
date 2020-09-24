import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import VerifyOTPComponent from "../../../../components/Pages/UserAuth/VerifyOTP/VerifyOTP";
import toJS from "../../../../hoc/toJS";
import {
  makeSelectLoginDataFetched,
  makeSelectUserLoginData,
  makeSelectLoginErrors,
  makeSelectIncorrectOTPError
} from "../selectors";

import { validateOTP, setInCorrectOTP } from "../actions";

class VerifyOTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _signInAsync = async () => {
    // this.props.navigation.navigate("App");
  };

  render() {
    return (
      <VerifyOTPComponent signInUser={this._signInAsync} {...this.props} />
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    loginDataFetched: makeSelectLoginDataFetched(),
    userLoginData: makeSelectUserLoginData(),
    isError: makeSelectLoginErrors(),
    inCorrectOTP: makeSelectIncorrectOTPError()
  });

const mapDispatchToProps = dispatch => {
  return {
    invokeOTPValidation: userData => dispatch(validateOTP(userData)),
    setInCorrectOTPValue: data => dispatch(setInCorrectOTP(data))
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(toJS(VerifyOTP));
