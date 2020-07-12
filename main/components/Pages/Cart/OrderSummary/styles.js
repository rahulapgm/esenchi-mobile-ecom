import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flexDirection: "column", flex: 1, paddingHorizontal: 6 },
  titleStyle: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 6,
    fontWeight: "bold",
    fontSize: 16
  },
  totalAmtContainer: {
    flex: 1,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 14,
    color: "blue"
  },
  mrpRateText: {
    color: "#260505",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },
  savingMsgText: {
    flex: 0.6,
    textAlign: "right",
    paddingRight: 6,
    fontSize: 14,
    color: "#11bd47",
    fontWeight: "bold"
  },
  deliveryAddress: {
    flex: 0.5,
    paddingTop: 6,
    fontWeight: "bold",
    textAlign: "left"
  },
  changeAddress: { color: "#1a75ff", textDecorationLine: "underline", paddingHorizontal:6 }
});


export default styles;
