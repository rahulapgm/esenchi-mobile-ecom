import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import ShadowBox from "../../../../hoc/ShadowBox";
import { Subheading, Caption } from "react-native-paper";

import { styles as commonStyles } from "../../../common/styles";

export const ComboOrderItem = props => {
  const {
    comboId,
    comboSellingPrice = "",
    comboMRP = "",
    comboName,
    highLevelProductDetails = []
  } = props.combo || {};
  const { removeComboItem, updatingProductId } = props;
  return (
    <ShimmerPlaceHolder
      duration={2000}
      style={{
        flex: 1,
        width: "100%",
        height: 20,
        padding: 6,
        alignItems: "flex-end"
      }}
      autoRun={updatingProductId === comboId}
      visible={updatingProductId !== comboId}
    >
      <ShadowBox style={{ backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", padding: 6 }}>
          <View style={{ flex: 1 }}>
            <Subheading style={{ flex: 1, fontWeight: "bold" }}>
              {comboName}
            </Subheading>
            <View style={commonStyles.row}>
              <Subheading style={{ ...commonStyles.price, fontSize: 14 }}>
                Selling Price: {comboSellingPrice} Rs.
              </Subheading>
              <Text style={commonStyles.strikedPrice}>{comboMRP} Rs.</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              removeComboItem(comboId);
            }}
          >
            <MaterialCommunityIcons
              name="close-circle"
              color="#7c8780"
              size={28}
            />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          {highLevelProductDetails.map((product, index) => {
            return (
              <ShadowBox
                key={index}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri: product.productImgUrl
                  }}
                />

                <Caption style={{ textAlign: "center" }}>
                  {product.productName}
                </Caption>
                <Caption style={{ textAlign: "center" }}>
                  {product.productQuantity}
                </Caption>
              </ShadowBox>
            );
          })}
        </ScrollView>
      </ShadowBox>
    </ShimmerPlaceHolder>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5
  },
  cardImage: {
    height: 90,
    width: 120,
    margin: 10,
    borderRadius: 3
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 6
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  subText: {
    fontSize: 16,
    color: "#aaaaaa"
  },
  imgSection: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderWidth: 2
  }
});

export default ComboOrderItem;
