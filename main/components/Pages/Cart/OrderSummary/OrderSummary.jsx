import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import ShadowBox from "../../../../hoc/ShadowBox";

import styles from "./styles";

export const OrderSummary = ({
  cartTotalAmount,
  cartTotalSavings,
  cartTotalMRPRate
}) => {
  return (
    <ShadowBox style={styles.container}>
      <Text style={styles.titleStyle}>ORDER SUMMARY</Text>

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.totalAmtContainer}>
          Total Amount:{" "}
          <Text style={styles.mrpRateText}>{` ${cartTotalMRPRate} `}</Text>
          {`  ${cartTotalAmount}`} Rs.
        </Text>
        <Text style={styles.savingMsgText}>
          You saved {cartTotalSavings} Rs.
        </Text>
      </View>

      <Text style={{ paddingTop: 6, paddingHorizontal: 6 }}>
        Delivery address:
        <Text
          style={styles.deliveryAddress}
        >{` Near CA High School, Peruvemba, Palakkad, Pin:678531`}</Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("ChangeAddress");
        }}
      >
        <Text style={styles.changeAddress}>Change Address</Text>
      </TouchableOpacity>
    </ShadowBox>
  );
};

export default OrderSummary;
