import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { Paragraph, Title } from 'react-native-paper';
import ShadowBox from "../../../../hoc/ShadowBox";

import styles from "./styles";

export const OrderSummary = ({
  cartTotalAmount,
  cartTotalSavings,
  cartTotalMRPRate,
  navigation,
  userAddress=""
}) => {
  return (
    <ShadowBox style={styles.container}>
      <Title style={styles.titleStyle}>ORDER SUMMARY</Title>

      <View style={{ flexDirection: "column" }}>
        <Paragraph style={styles.totalAmtContainer}>
          TOTAL AMOUNT:{" "}
          <Text style={styles.mrpRateText}>{` ${cartTotalMRPRate} `}</Text>
          <Text style={{color:'blue'}}>{`  ${cartTotalAmount}`} Rs.</Text>
        </Paragraph>
        <Paragraph style={styles.savingMsgText}>
          You saved <Text style={{color:"blue"}}>{cartTotalSavings} Rs.</Text>
        </Paragraph>
      </View>

      <Paragraph style={{ marginTop:12 }}>
        Delivery address:
        <Paragraph
          style={styles.deliveryAddress}
        >{` ${userAddress}`}</Paragraph>
      </Paragraph>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChangeAddress");
        }}
      >
        <Paragraph style={styles.changeAddress}>Change Address</Paragraph>
      </TouchableOpacity>
    </ShadowBox>
  );
};

export default OrderSummary;
