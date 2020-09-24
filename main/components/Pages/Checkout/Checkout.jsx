import React from "react";

import { ScrollView, View, Text, SafeAreaView } from "react-native";

import { styles } from "./styles";
import ShadowBox from "../../../hoc/ShadowBox";
// import { Checkbox } from "react-native-paper";
import OrderReview from "./OrderReview/OrderReview";
import Payment from "./Payment/Payment";
import EstimatedDelivery from "../../../containers/Pages/ChangeAddress/EstimatedDelivery/EstimatedDelivery";
import Button from "../../custom/Button";
import { Subheading } from "react-native-paper";
import OrderConfirmation from "../../../containers/Pages/OrderConfirmation/OrderConfirmation";

export const Checkout = props => {
  const {
    cartDetailsObj,
    isOrderApiFetching,
    currentOrderAPIStatus = null,
    paymentMethods,
    submitCODOrder
  } = props;
  const {
    cartProductItems = [],
    cartTotalAmount = 0,
    comboItemsData
  } = cartDetailsObj;
  const [paymentMethod, setPaymentMethod] = React.useState(
    paymentMethods.find(item => item.selected === true)
  );

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
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <EstimatedDelivery
          hideChangeAddress={true}
          navigation={props.navigation}
        />
        <Payment setPaymentMethod={setPaymentMethod} {...props} />
        <OrderReview
          productItems={cartProductItems}
          comboItemsData={comboItemsData}
          {...props}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            padding: 12
          }}
        >
          <Subheading
            style={{
              color: "#0046FF",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Total Amount
          </Subheading>
          <Subheading
            style={{
              color: "#0046FF",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            {` Rs ${cartTotalAmount} `}
          </Subheading>
        </View>
        <Button
          onPress={() => {
            if (paymentMethod.type === "Cash On Delivery") {
              console.log("Cash On Delivery");
              submitCODOrder();
            } else {
              props.navigation.navigate("PaymentGatewayScreen", {
                screen: "PaymentScreen"
              });
            }
          }}
          isGradient={true}
          gradStart={[0, 0.5]}
          gradEnd={[1, 0.5]}
          gradColors={["#2c22f2", "#2d23ed", "#0a00ff"]}
          gradStyle={{ borderRadius: 5 }}
          viewStyle={{ flex: 1, paddingHorizontal: 16 }}
          textStyle={{
            padding: 12,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 16
          }}
          btnText="ORDER NOW"
          disabled={isOrderApiFetching || cartTotalAmount < 30}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
