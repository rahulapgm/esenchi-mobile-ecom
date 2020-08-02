import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
// import Button from "../../custom/Button/Button";

import { styles } from "./ProductV2Styles";
import Dropdown from "../../../custom/Dropdown";

const Product = props => {
  const { product, addToCart } = props;
  const {
    productId,
    productName,
    productMalayalamName="",
    productCategory,
    pricingDetails = {},
    selectedPricingSkuIndex = "",
    productAvailability,
    productImgUrl,
  } = product;

  const selectedSku = pricingDetails[selectedPricingSkuIndex];
  const [currentSelectedSku, setCurrentSelectedSku] = useState(selectedSku);



  // console.log("*******************************************************\n");
  // console.log("selectedSkuIndex: ", selectedPricingSkuIndex);
  // console.log("currentSelectedSku: ", currentSelectedSku);
  // console.log("*******************************************************\n")

  const cartPushingProductObj = {
    productId,
    productName,
    productMalayalamName,
    productCategory,
    selectedSku: currentSelectedSku
  };

  return productAvailability && Object.entries(pricingDetails).length > 0 ? (
    <View style={styles.container}>
      <View style={styles.imgSection}>
        <Text style={styles.discountStyle}>
          Save {currentSelectedSku.discount} Rs.
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: productImgUrl
          }}
        />
      </View>
      <View style={styles.prdDescriptionSec}>
        <View style={{flexDirection:"row", width:"100%"}}>
          <Text style={styles.prdNameText}>{productName} ({productMalayalamName})</Text>

          <Text style={styles.price}>
            <Text style={styles.strikedPrice}>
              {currentSelectedSku.mrpRate} Rs.
            </Text>{" "}
            {currentSelectedSku.sellingPrice} Rs.
          </Text>
        </View>

        <View style={styles.dropdownStyle}>
          <Dropdown
            optionsList={Object.values(pricingDetails)}
            currentOption={currentSelectedSku}
            callbackForUpdate={setCurrentSelectedSku}
            productName={`${productName}(${productMalayalamName})`}
          />
        </View>

        {/* <Text style={styles.deliveryMsgText}>
          Est Delivery before
          <Text
            style={{ fontWeight: "bold", fontStyle: "normal", color: "green" }}
          >
            Tomorrow 6 P.M
          </Text>
        </Text> */}

        <TouchableOpacity
          onPress={()=> {
            addToCart({productId, selectedPricingSkuIndex:currentSelectedSku.skuIndex, productName})
          }}
          style={styles.addToCartBtn}>
          <Text style={styles.addToCartBtnText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
};

export default Product;
