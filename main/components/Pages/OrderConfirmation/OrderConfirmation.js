import React, { useState } from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { SafeAreaView, Text, ScrollView, View, Modal } from "react-native";
import { Subheading, Button, Title, Divider } from "react-native-paper";
import ShadowBox from "../../../hoc/ShadowBox";
import { styles } from "../Checkout/OrderReview/styles";

export const OrderConfirmation = props => {
  const {
    navigation,
    placedOrderData,
    showOrderDetail,
    setOrderDetailVisibility
  } = props;
  const {
    orderId,
    orderOTP,
    estimatedDelivery,
    deliveryAddress,
    orderItems = {},
    paymentMethod
  } = placedOrderData;
  console.log("->placedOrderData<-", placedOrderData);
  const productItems = orderItems.productItems || [];
  const comboItems = orderItems.comboItems || [];
  const orderIDNo = orderId.split("_")[1];
  return (
    <Modal
      animationType="slide"
      visible={showOrderDetail}
      onRequestClose={() => setOrderDetailVisibility(false)}
    >
      <ScrollView style={{ height: "100%" }}>
        <SafeAreaView>
          <ShadowBox style={{ paddingHorizontal: 24 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Subheading>Order ID: </Subheading>
              <Subheading style={{ color: "blue" }}>#{orderIDNo}</Subheading>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Subheading>Order OTP: </Subheading>
              <Subheading style={{ color: "blue" }}>#{orderOTP}</Subheading>
            </View>
          </ShadowBox>

          <ShadowBox>
            <View style={{ paddingBottom: 12 }}>
              <Subheading>Payment Method: </Subheading>
              <Subheading style={{ color: "blue" }}>{paymentMethod}</Subheading>
            </View>
            <View style={{ paddingBottom: 12 }}>
              <Subheading>Estimated Delivery: </Subheading>
              <Subheading style={{ color: "blue" }}>
                {estimatedDelivery}
              </Subheading>
            </View>
            <View>
              <Subheading>Delivery Address: </Subheading>
              <Subheading style={{ color: "blue" }}>
                {deliveryAddress}
              </Subheading>
            </View>
          </ShadowBox>
          <Title style={{ padding: 6, fontSize: 24 }}>ORDER ITEMS</Title>
          <ShadowBox style={styles.orderItems}>
            {productItems.map((obj, index) => {
              const {
                productName,
                selectedPricingSkuIndex,
                pricingDetails
              } = obj;
              const pricingData = pricingDetails[selectedPricingSkuIndex];
              const {
                quantity = "",
                unit = "",
                sellingPrice = ""
              } = pricingData;

              return (
                <View key={selectedPricingSkuIndex}>
                  <View style={styles.orderItem}>
                    <Text style={styles.productName}>{productName}</Text>
                    <Text style={styles.quantity}>{`${quantity} ${
                      unit.toLowerCase() === "grams" ? "gm" : unit
                    }`}</Text>
                    <Text style={styles.sellingPrice}>{sellingPrice} R.s</Text>
                  </View>

                  {(index < productItems.length - 1 ||
                    (productItems.length === 1 && comboItems.length)) && (
                    <Divider
                      style={{
                        borderTopColor: "#81A5F1",
                        borderTopWidth: 4
                      }}
                    />
                  )}
                </View>
              );
            })}
            {comboItems.map((comboProduct, index) => {
              const { comboName, comboMRP, comboCategory } = comboProduct;
              return (
                <View key={comboName}>
                  <View style={styles.orderItem}>
                    <Text style={styles.productName}>{comboName}</Text>
                    <Text style={styles.quantity}>{comboCategory} (Combo)</Text>
                    <Text style={styles.sellingPrice}>Rs. {comboMRP} </Text>
                  </View>

                  {index < comboItems.length - 1 && (
                    <Divider
                      style={{
                        borderTopColor: "#81A5F1",
                        borderTopWidth: 4
                      }}
                    />
                  )}
                </View>
              );
            })}
          </ShadowBox>
          <Button
            style={{marginVertical:16}}
            icon={() => (
              <MaterialCommunityIcons
                size={20}
                name="home-circle"
                color="blue"
              />
            )}
            iconSize={48}
            mode="text"
            onPress={() => {
              setOrderDetailVisibility(false);
              navigation.navigate("App", {
                screen: "Home"
              });
            }}
          >
            <Text>Go Back To Store</Text>
          </Button>
        </SafeAreaView>
      </ScrollView>
    </Modal>
  );
};

export default OrderConfirmation;
