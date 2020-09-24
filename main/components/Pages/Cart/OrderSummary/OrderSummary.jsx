import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import ShadowBox from "../../../../hoc/ShadowBox";
import styles from "./styles";

export const OrderSummary = ({
  cartTotalAmount,
  cartTotalSavings,
  cartTotalMRPRate
}) => {
  return (
    <ShadowBox style={styles.container}>
      <Title style={styles.titleStyle}>ORDER SUMMARY</Title>

      <View style={{ flexDirection: "column" }}>
        <Paragraph style={styles.totalAmtContainer}>
          TOTAL ORDER AMOUNT:{" "}
          <Text style={styles.mrpRateText}>{` ${cartTotalMRPRate} `}</Text>
          <Text style={{ color: "blue" }}>{`  ${cartTotalAmount}`} Rs.</Text>
        </Paragraph>
        <Paragraph style={styles.savingMsgText}>
          You saved{" "}
          <Text style={{ color: "blue" }}>{cartTotalSavings} Rs.</Text>
        </Paragraph>
      </View>
    </ShadowBox>
  );
};

export default OrderSummary;
