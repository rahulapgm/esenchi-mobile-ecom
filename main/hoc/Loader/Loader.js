import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { Loader } from "../components/Loader";

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { showLoader = false } = this.props;
    if (showLoader) {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            top: 48
          }}
        >
          <Text>Loading....</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default Loader;
