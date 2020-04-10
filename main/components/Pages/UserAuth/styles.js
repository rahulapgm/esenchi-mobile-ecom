import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  userInputs: { marginTop: 24, flexDirection: "column", flex: 1 },
  inputItem: {
    marginTop: 18
  },
  welcomeMsg: {
    color: "black",
    fontFamily: "FredokaOne-Regular",
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
    marginTop: 6,
    width: "100%"
  },
  buttonText: {
    color: "white",
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
