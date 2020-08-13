import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  strikedPrice: {
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },
  price: {
    alignItems: "flex-start",
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    position: "relative",
    padding: 6
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});