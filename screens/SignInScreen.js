import React, { Suspense, lazy } from "react";
import { View, Button, ImageBackground } from "react-native";
const UserAuthComponent = lazy(() =>
  import("../main/containers/Pages/UserAuth/UserAuth")
);

export class SignInScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<View></View>}>
          <UserAuthComponent {...this.props}/>
        </Suspense>
      </React.Fragment>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    // this.props.navigation.navigate("App");
  };
}

export default SignInScreen;
