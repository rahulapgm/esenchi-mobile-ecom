import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "blue",
    margin: 6,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    borderRadius: 4,
    elevation: 3
  },
  prdDescriptionSec: {
    width: "60%",
    padding: 6,
    flexDirection: "column",
    alignItems: "flex-end"
  },
  imgSection: {
    flex: 1,
    width: "36%"
  },
  image: {
    width: 160,
    height: 160,
    margin: 12
  },
  prdNameText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    bottom: 12,
    width: "100%"
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonStyle: {
    justifyContent: "space-between"
  },
  gradient: {
    flexDirection: "column",
    fontFamily: "FredokaOne-Regular",
    width: "30%",
    margin: 2
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 4
  }
});

export default styles;
