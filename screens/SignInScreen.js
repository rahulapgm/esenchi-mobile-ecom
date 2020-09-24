import React from "react";
import UserAuthComponent from "../main/containers/Pages/UserAuth/UserAuth";

export class SignInScreen extends React.Component {
  render() {
    return <UserAuthComponent {...this.props} />;
  }
}

export default SignInScreen;
