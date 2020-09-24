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
    top: 6
  },
  userInputs: { marginTop: 32, flexDirection: "column", flex: 1 },
  inputItem: {
    marginTop: 18
  },
  welcomeMsg: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    marginBottom:12
  },
  signInView: {
    flex: 1,
    flexDirection: "column",
    marginTop: 12,
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
    justifyContent:"center",
    alignItems:"center",
    height: 32,
    width: 40
  },
  brandViewStyle:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  address: {}
});
