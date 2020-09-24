import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:12,
    flexDirection: "column",
    backgroundColor: "white",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    borderRadius: 4,
    elevation: 3,
    minHeight:160,
  },

  prdDescriptionSec: {
    padding: 6,
    flexDirection: "column",
    alignItems: "flex-start"
  },

  imgSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4,
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: 6,
  },

  discountStyle: {
    position: 'absolute',
    right:6,
    top:6,
    padding:6,
    fontWeight: "bold",
    backgroundColor: "#1b0000",
    color: "white",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 5,
    minWidth:80
  },

  prdNameText: {
    flex:1,
    fontSize: 18,
    fontWeight: "bold",
    flexDirection: "row",
    padding:6
  },

  price: {
    alignItems: "flex-start",
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    position:"relative",
    padding:6
  },

  strikedPrice: {
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },

  dropdownStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6
  },

  addToCartBtn: {
    flexDirection: "row",
    backgroundColor: "#0a00ff",
    borderRadius: 4,
    color: "white",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 5,
    padding: 6,
    margin:6
  },
  addToCartBtnText: {
    flex: 1,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold"
  },
  deliveryMsgText: {
    flexDirection: "row",
    paddingHorizontal: 3,
    fontSize: 11,
    paddingVertical: 6
  }
});

export default styles;
