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
    fontSize: 16,
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
