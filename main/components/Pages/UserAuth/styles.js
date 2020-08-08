import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    top: 24
  },
  userInputs: { marginTop: 32, flexDirection: "column", flex: 1 },
  inputItem: {
    marginTop: 18
  },
  welcomeMsg: {
    color: "black",
    textAlign: "center",
    fontSize: 16
  },
  signInView: {
    flex: 1,
    flexDirection: "column",
    top: 42,
    width: "72%"
  },
  signInBanner: {
    width: "100%",
    height: "38%"
  },
  bannerImgStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  gradient: {
    width: "100%"
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    padding: 8
  },
  brandIcon: {
    height: 56,
    width: 80
  },
  address: {}
});
