import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#cccccc",
    margin: 6,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    borderRadius: 4,
    elevation: 3
  },

  prdDescriptionSec: {
    flex: 1.44,
    padding: 6,
    flexDirection: "column",
    alignItems: "flex-start"
  },

  imgSection: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4
  },

  image: {
    flex: 1.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 6
  },

  discountStyle: {
    padding: 0.5,
    width: "100%",
    textAlign: "center",
    backgroundColor: "green",
    color: "white",
    borderRadius: 20,
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 5
  },

  prdNameText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    flex: 1,
    flexDirection: "row",
    padding: 3
  },

  price: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 3,
    color: "blue",
    fontSize: 16,
    fontWeight: "bold"
  },

  strikedPrice: {
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },

  dropdownStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 3
  },
  addToCartBtn: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0a00ff",
    borderRadius: 4,
    color: "white",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 5,
    padding: 6
  },
  addToCartBtnText: {
    flex: 1,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold"
  },
  deliveryMsgText: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 3,
    fontSize: 11,
    paddingVertical: 6
  }
});

export default styles;
