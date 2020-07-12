import React from "react";

import { Text } from "react-native";

import { styles } from "./styles";

export const Heading = props => {
  const { type = "h2", style } = props;
  let headingStyle = styles.h3;
  if (type === "h2") {
    headingStyle = styles.h2;
  } else if (type === "h4") {
    headingStyle = styles.h4;
  } else if (type === "h5") {
    headingStyle = styles.h5;
  }
  headingStyle = { ...headingStyle, ...style };
  return <Text style={headingStyle}>{props.children}</Text>;
};

export default Heading;
