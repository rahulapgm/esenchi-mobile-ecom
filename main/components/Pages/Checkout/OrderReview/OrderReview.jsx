import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Subheading } from "react-native-paper";

import { styles } from "./styles";

import Heading from "../../../custom/Heading/Heading";
import ShadowBox from "../../../../hoc/ShadowBox";
import SkeletonComponent from "../../../custom/Skeleton/Skeleton";

export const OrderReview = props => {
  const { productItems = [], isOrderApiFetching } = props;
  if (isOrderApiFetching) {
    return (
      <SkeletonComponent
        loadingState={isOrderApiFetching}
        mt={24}
        text={"Few seconds away, we are loading your details"}
      />
    );
  } else {
    return (
      <React.Fragment>
        <Heading type="h2">ORDER DETAILS</Heading>

        <Subheading style={{ fontWeight: "700" }}>Order Items</Subheading>
        <View style={styles.orderItems}>
          {productItems.map(obj => {
            const {
              productId,
              productName,
              selectedPricingSkuIndex,
              pricingDetails
            } = obj;
            const pricingData = pricingDetails[selectedPricingSkuIndex];
            const { quantity = "", unit = "", sellingPrice = "" } = pricingData;

            return (
              <View key={selectedPricingSkuIndex} style={styles.orderItem}>
                <Text style={styles.productName}>{productName}</Text>
                <Text style={styles.quantity}>{`${quantity} ${
                  unit.toLowerCase() === "grams" ? "gm" : unit
                }`}</Text>
                <Text style={styles.sellingPrice}>{sellingPrice} R.s</Text>
              </View>
            );
          })}
        </View>

        <Subheading style={{ fontWeight: "700" }}>Delivery Address</Subheading>
        <ShadowBox>
          <Text style={{ fontWeight: "normal", padding: 6 }}>
            Near CA High School, Peruvemba, Palakkad, Pin:678531
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ChangeAddress");
            }}
          >
            <Text
              style={{
                color: "#1a75ff",
                textDecorationLine: "underline",
                padding: 6,
                paddingTop: 0
              }}
            >
              Change Address
            </Text>
          </TouchableOpacity>
        </ShadowBox>
      </React.Fragment>
    );
  }
};

export default OrderReview;