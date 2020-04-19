import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  Image,
  TouchableOpacity,
  Picker,
} from "react-native";
// import Button from "../../custom/Button/Button";

import { styles } from "./productStyles";
import Dropdown from "../../custom/Dropdown";




const Product = (props) => {
  const { product } = props;
  const {
    productId,
    productName,
    productCategory,
    pricingDetails = [],
    selectedPricingSkuIndex = 0,
    productAvailability,
    productImgUrl
  } = product;

  // console.log("*******************************************************\n");
  // console.log("selectedSkuIndex: ", selectedPricingSkuIndex);
  // console.log("pricingDetails[selectedPricingSkuIndex]: ", pricingDetails[selectedPricingSkuIndex]);
  // console.log("*******************************************************\n")

  const selectedSku = pricingDetails[selectedPricingSkuIndex];
  const [currentSelectedSku, setCurrentSelectedSku] = useState(selectedSku);

  const cartPushingProductObj = {
    productId,
    productName,
    productCategory,
    selectedSku: currentSelectedSku,
  }

  console.log("*******************************************************\n");
  console.log("cartPushingProductObj", cartPushingProductObj);
  console.log("*******************************************************\n");

  return (
    productAvailability && pricingDetails.length > 0 ?
      (
        <View style={styles.container}>
          <View style={styles.imgSection}>

            <Image
              style={styles.image}
              source={{
                uri: productImgUrl,
              }}
            />
            <Text style={styles.discountStyle}>
              Save {currentSelectedSku.discount} Rs.
        </Text>
          </View>
          <View style={styles.prdDescriptionSec}>

            <Text style={styles.prdNameText}>{productName}</Text>

            <Text style={styles.price}>
              <Text
                style={styles.strikedPrice}>
                {currentSelectedSku.mrpRate} Rs.
          </Text>
              {" "} {currentSelectedSku.sellingPrice} Rs.
        </Text>


            <View
              style={styles.dropdownStyle}>
              <Dropdown
                optionsList={pricingDetails}
                currentOption={currentSelectedSku}
                callbackForUpdate={setCurrentSelectedSku} />
            </View>


            <Text style={styles.deliveryMsgText}>
              Est Delivery before
            <Text style={{ fontWeight: "bold", fontStyle: "normal", color: "green" }}>
                Tomorrow 6 P.M
              </Text>
            </Text>


            <TouchableOpacity
              style={styles.addToCartBtn}>
              <Text
                style={styles.addToCartBtnText}>
                ADD TO CART
						</Text>
            </TouchableOpacity>

          </View>
        </View >
      ) : null
  );
};

export default Product;
