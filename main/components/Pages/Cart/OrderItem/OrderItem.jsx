import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import Dropdown from "../../../custom/Dropdown/Dropdown";
import ShadowBox from "../../../../hoc/ShadowBox";

export const OrderItem = props => {
  const {
    productId,
    productImgUrl,
    productName,
    pricingDetails = [],
    selectedPricingSkuIndex = ""
  } = props.product || {};

  const { updatingProductId = "" } = props;

  const {
    pricingArrayList = [],
    alertOnRemove = () => {},
    setProductQuantity
  } = props;

  const selectedSku = pricingDetails[selectedPricingSkuIndex];
  const [currentSelectedSku, setCurrentSelectedSku] = useState(selectedSku);

  const { sellingPrice, mrpRate } = selectedSku;

  const updateQuantity = option => {
    const currentSelectedPricingSkuIndex = option.skuIndex || "";
    const previousSelectedPricingSkuIndex = selectedPricingSkuIndex;
    if (currentSelectedPricingSkuIndex !== previousSelectedPricingSkuIndex) {
      const product = {
        productId,
        currentSelectedPricingSkuIndex,
        previousSelectedPricingSkuIndex
      };
      setProductQuantity(product);
    }
    setCurrentSelectedSku(option);
  };

  return (
    <ShimmerPlaceHolder
      duration={2000}
      style={{
        flex: 1,
        width: "100%",
        height: 36,
        padding: 6,
        alignItems: "flex-end"
      }}
      autoRun={updatingProductId === productId}
      visible={updatingProductId !== productId}
    >
      <ShadowBox style={{ flexDirection: "row", padding: 6, flex: 1 }}>
        <View
          style={{
            flexDirection: "column",
            flex: 0.36,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={{ width: "100%", height: "72%" }}
            source={{
              uri: productImgUrl
            }}
          />
        </View>
        <View
          style={{ flexDirection: "column", flex: 1, paddingHorizontal: 12 }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              paddingVertical: 6
            }}
          >
            <Text
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                fontSize: 16,
                fontWeight: "bold"
              }}
            >
              {productName}
            </Text>

            <TouchableOpacity
              onPress={() => {
                alertOnRemove(props.product);
              }}
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
                fontSize: 16,
                fontWeight: "bold",
                color: "blue"
              }}
            >
              <MaterialCommunityIcons
                name="close-circle"
                color="#7c8780"
                size={28}
              />
            </TouchableOpacity>
          </View>

          {mrpRate !== sellingPrice && (
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 6
              }}
            >
              <Text style={{ color: "blue" }}>
                {`Selling Price: ${sellingPrice} Rs. `}
                <Text
                  style={{
                    color: "grey",
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid"
                  }}
                >
                  MRP. {mrpRate}
                </Text>
              </Text>
            </View>
          )}

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              paddingVertical: 6,
              alignItems: "center"
            }}
          >
            <Text>Quantity:</Text>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 6,
                alignItems: "center"
              }}
            >
              <Dropdown
                optionsList={pricingArrayList}
                currentOption={currentSelectedSku}
                callbackForUpdate={updateQuantity}
                productName={productName}
              />
            </View>
          </View>
        </View>
      </ShadowBox>
    </ShimmerPlaceHolder>
  );
};

export default OrderItem;
