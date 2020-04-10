import React from "react";
// import { ExpoConfigView } from "@expo/samples";
// import { withNavigation } from "react-navigation";
import { StyleSheet, View, AsyncStorage, Button } from "react-native";

export class MyAccountScreen extends React.PureComponent {
  // /**
  //  * Go ahead and delete ExpoConfigView and replace it with your content;
  //  * we just wanted to give you a quick view of your config.
  //  */
  // return <ExpoConfigView />;
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("SignIn");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign Out!" onPress={this._signOutAsync} />
      </View>
    );
  }
}

// MyAccountScreen.navigationOptions = {
//   title: "My Account Page"
// };

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  }
});

export default MyAccountScreen;
