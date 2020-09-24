import React from "react";

import { View, Text } from "react-native";

import { Divider, Title } from "react-native-paper";

import { styles } from "./styles";
import ShadowBox from "../../../../hoc/ShadowBox";
import SkeletonComponent from "../../../custom/Skeleton/Skeleton";

export const OrderReview = props => {
  const { productItems = [], isOrderApiFetching, comboItemsData } = props;
  if (isOrderApiFetching) {
    return (
      <SkeletonComponent
        loadingState={isOrderApiFetching}
        text={"Few seconds away, we are loading your order details"}
      />
    );
  } else {
    return (
      <ShadowBox>
        <Title style={{ padding: 6, fontSize: 24 }}>ORDER ITEMS</Title>
        <ShadowBox style={styles.orderItems}>
          {productItems.map((obj, index) => {
            const {
              productName,
              selectedPricingSkuIndex,
              pricingDetails
            } = obj;
            const pricingData = pricingDetails[selectedPricingSkuIndex];
            const { quantity = "", unit = "", sellingPrice = "" } = pricingData;

            return (
              <View key={selectedPricingSkuIndex} style={{padding:6}}>
                <View style={styles.orderItem}>
                  <Text style={styles.productName}>{productName}</Text>
                  <Text style={styles.quantity}>{`${quantity} ${
                    unit.toLowerCase() === "grams" ? "gm" : unit
                  }`}</Text>
                  <Text style={styles.sellingPrice}>{sellingPrice} R.s</Text>
                </View>

                {(index < productItems.length - 1 ||
                  (comboItemsData.length)) && (
                  <Divider
                    style={{
                      borderTopColor: "#81A5F1",
                      borderTopWidth: 4,
                    }}
                  />
                )}
              </View>
            );
          })}
          {comboItemsData.map((comboProduct, index) => {
            const { comboName, comboMRP, comboCategory } = comboProduct;
            return (
              <View key={comboName} style={{padding:6}}>
                <View style={styles.orderItem}>
                  <Text style={styles.productName}>{comboName}</Text>
                  <Text style={styles.quantity}>{comboCategory} (Combo)</Text>
                  <Text style={styles.sellingPrice}>Rs. {comboMRP} </Text>
                </View>

                {index < comboItemsData.length - 1 && (
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
      </ShadowBox>
    );
  }
};

export default OrderReview;
