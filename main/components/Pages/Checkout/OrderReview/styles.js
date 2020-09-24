import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  orderItems: {
    flexDirection: "column",
  },
  orderItem: {
    flexDirection: "row",
    padding: 12,
  },
  productName: {
    flex: 7,
    fontWeight:"600",
    justifyContent:"center"
  },
  quantity: {
    flex: 6,
    fontWeight:"600",
    justifyContent:"center"
  },
  sellingPrice: {
    flex: 3,
    fontWeight:"600",
    justifyContent:"center"
  }
});

export default styles

// borderTopColor: "#81A5F1",
// borderTopWidth: 4,
