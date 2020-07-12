import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import toJS from "../../../hoc/toJS";
import UserAuthComponent from "../../../components/Pages/UserAuth/UserAuth";

import { signInUser, verifyLogin, resetUserLoginData } from "./actions";

export class UserAuth extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.resetUserLoginDetails();
  }
  render() {
    return <UserAuthComponent {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => dispatch(signInUser(userData)),
    verifyUserLogin: userData => dispatch(verifyLogin(userData)),
    resetUserLoginDetails: () => dispatch(resetUserLoginData())
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(toJS(UserAuth));
