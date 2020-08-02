import React from "react";

import { ScrollView, View, Text } from "react-native";

import { styles } from "./styles";
import ShadowBox from "../../../hoc/ShadowBox";
// import { Checkbox } from "react-native-paper";
import OrderReview from "./OrderReview/OrderReview";
import Payment from "./Payment/Payment";

import Button from "../../custom/Button";

export const Checkout = props => {
  const {
    cartDetailsObj,
    isOrderApiFetching,
    currentOrderAPIStatus = null
  } = props;
  const { cartProductItems = [], cartTotalAmount = 0 } = cartDetailsObj;
  if (currentOrderAPIStatus && currentOrderAPIStatus.status === "failed") {
    return (
      <View>
        <Text
          style={{
            fontWeight: "600",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
            color: "red"
          }}
        >
          {currentOrderAPIStatus.message}
        </Text>
      </View>
    );
  }
  return (
    <ShadowBox style={styles.container}>
      <ScrollView>
        <Payment {...props} />
        <OrderReview productItems={cartProductItems} {...props} />
      </ScrollView>

      <View
        style={{
          margin: 2,
          marginTop: 12,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            flex: 5,
            fontSize: 16,
            textAlign: "center",
            color: "#0046FF",
            fontWeight: "bold",
            borderRadius: 5
          }}
        >
          <Text style={{ color: "#0046FF", fontWeight: "bold" }}>Total Amount: </Text>
          {` ₹ ${cartTotalAmount} `}
        </Text>
        <Button
          onPress={() => {
            props.navigation.navigate("Checkout");
          }}
          isGradient={true}
          gradStart={[0, 0.5]}
          gradEnd={[1, 0.5]}
          gradColors={["#2c22f2", "#2d23ed", "#0a00ff"]}
          gradStyle={{ borderRadius: 5 }}
          viewStyle={{ flex: 7 }}
          textStyle={{
            padding: 12,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 16
          }}
          btnText="Pay & Buy"
          disabled={isOrderApiFetching || cartTotalAmount < 30}
        />
      </View>
    </ShadowBox>
  );
};

export default Checkout;
