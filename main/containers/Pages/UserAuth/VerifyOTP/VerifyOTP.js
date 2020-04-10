import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
// import { withNavigation } from "react-navigation";
import { AsyncStorage } from "react-native";
import { createStructuredSelector } from "reselect";

import Loader from "../../../../hoc/Loader";
import VerifyOTPComponent from "../../../../components/Pages/UserAuth/VerifyOTP/VerifyOTP";
import toJS from "../../../../hoc/toJS";
import {
  makeSelectLoginDataFetched,
  makeSelectIsFetching,
  makeSelectUserLoginData,
  makeSelectLoginErrors
} from "../selectors";

import { validateOTP } from "../actions";

class VerifyOTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: AsyncStorage.getItem("userToken"),
      isFetching: this.props.isFetching
    };
  }
  _signInAsync = async () => {
    // this.props.navigation.navigate("App");
  };
  componentDidUpdate(prevProps, nextProps) {
    console.log(prevProps, "\n", nextProps);
    if (prevProps.loginDataFetched && this.state.userToken) {
      // this.props.navigation.navigate("App");
    }
  }
  render() {
    console.log("Verify OTP Container Props - ", this.props);
    const { isFetching } = this.props;
    return (
      <Loader showLoader={isFetching}>
        {!this.props.loginDataFetched && this.state.userToken && (
          <VerifyOTPComponent signInUser={this._signInAsync} {...this.props} />
        )}
      </Loader>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    loginDataFetched: makeSelectLoginDataFetched(),
    userLoginData: makeSelectUserLoginData(),
    isFetching: makeSelectIsFetching(),
    isError: makeSelectLoginErrors()
  });

const mapDispatchToProps = dispatch => {
  return {
    invokeOTPValidation: userData => dispatch(validateOTP(userData))
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(toJS(VerifyOTP));
