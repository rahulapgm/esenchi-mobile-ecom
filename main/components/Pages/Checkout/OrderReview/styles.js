import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  orderItems: {
    backgroundColor: "#F6F6F7",
    flexDirection: "column",
    padding: 6,
  },
  orderItem: {
    flexDirection: "row",
    padding: 12,
    borderTopColor: "#81A5F1",
    borderTopWidth: 4,
    marginLeft: 2,
    marginRight: 2
  },
  productName: {
    flex: 7,
    fontWeight:"600"
  },
  quantity: {
    flex: 3,
    fontWeight:"600"
  },
  sellingPrice: {
    flex: 4,
    fontWeight:"600"
  }
});
