import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  expandedView: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  optionListView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(100,100,100, .9)",
    padding: 24
  },
  optionView: {
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: "#0a00ff",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 5,
    padding: 18,
    margin: 6
  },
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2e5ef0",
    textAlign: "center"
  },
  collapseView: {
    borderRadius: 8,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#cccccc",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1.0,
    elevation: 5,
    borderColor: "#2e5ef0",
    borderWidth: 1.6
  },
  collapseButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding:2,
  },
  collapseButtonText: {
    flex: 1,
    fontWeight: "bold",
    paddingLeft:2
  },
  upDownArrowIcon: {
    height: 32,
    width: 32,
    justifyContent: "flex-end",
    resizeMode: "center"
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 8,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 5,
    padding: 8,
    margin: 6
  }
});

export default styles;
