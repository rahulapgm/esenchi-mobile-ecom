import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Banner = props => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    margin: 6,
    backgroundColor: "white",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    borderRadius: 10,
    elevation: 5
  }
});

export default Banner;
