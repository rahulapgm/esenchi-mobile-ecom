import React from "react";
import UserAuthComponent from "../main/containers/Pages/UserAuth/UserAuth";

export class SignInScreen extends React.Component {
  render() {
    return <UserAuthComponent {...this.props} />;
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    // this.props.navigation.navigate("App");
  };
}

export default SignInScreen;
