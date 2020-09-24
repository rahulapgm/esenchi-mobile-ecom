import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  brandIcon: {
    height: 56,
    width: 80
  },
  inputTextStyle: { backgroundColor: "white", paddingTop: 8 },

  saveAddressBtn: {
    flexDirection: "row",
    backgroundColor: "#0a00ff",
    borderRadius: 4,
    color: "white",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 5,
    margin: 24,
    padding: 6,
    justifyContent: "center"
  }
});

export default styles;
