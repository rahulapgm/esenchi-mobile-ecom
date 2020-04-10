import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";

import { styles } from "./brandStyles.js";

const Brand = props => {
  const { brandFontSize, brandIcon } = props;
  return (
    <React.Fragment>
      <Image
        style={brandIcon}
        source={require("../../../../assets/images/healthy-eating-1.png")}
      />
      <Text
        style={{
          ...styles.brandTitle,
          fontSize: brandFontSize
        }}
      >
        eSenchi
      </Text>
    </React.Fragment>
  );
};

export default Brand;
