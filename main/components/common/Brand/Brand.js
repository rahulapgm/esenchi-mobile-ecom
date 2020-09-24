import React from "react";

import { View, Image, Text } from "react-native";

import { Headline } from "react-native-paper";

import { styles } from "./brandStyles.js";

const Brand = props => {
  const { brandFontSize, brandIcon, brandViewStyle } = props;
  return (
    <View style={{ ...styles.viewStyle, ...brandViewStyle }}>
      <Image
        style={brandIcon}
        source={require("../../../../assets/images/standard-32x32.png")}
      />
      <Headline
        style={{
          fontSize: brandFontSize,
          fontWeight: "bold",
          ...styles.brandTitle
        }}
      >
        eSenchi
      </Headline>
    </View>
  );
};

export default Brand;
