import React from "react";
import { View, StyleSheet } from "react-native";

import Lottie from "lottie-react-native";
import singleWaveAnim from "../../../assets/loaders/singleWaveAnim.json";

export default class Loader extends React.Component {
  state = {
    animation: singleWaveAnim
  };

  componentDidMount() {
    this._playAnimation();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.animation && (
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 400,
              height: 400,
              backgroundColor: "#FFFFFF"
            }}
            source={this.state.animation}
          />
        )}
      </View>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this.animation.play();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: 1
  }
});
