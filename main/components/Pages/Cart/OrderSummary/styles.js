import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flexDirection: "column", flex: 1, paddingHorizontal: 6 },
  titleStyle: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 6,
  },
  totalAmtContainer: {
    flex: 1,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 14,
  },
  mrpRateText: {
    color: "#260505",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },
  savingMsgText: {
    paddingRight: 6,
    fontSize: 14,
    fontWeight: "bold"
  },
  deliveryAddress: {
    flex: 0.5,
    paddingTop: 6,
    fontWeight: "bold",
    textAlign: "left"
  },
  changeAddress: { color: "#1a75ff", textDecorationLine: "underline" }
});


export default styles;
