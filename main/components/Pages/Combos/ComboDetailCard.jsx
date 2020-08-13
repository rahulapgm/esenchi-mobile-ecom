import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from "react-native-paper";
import { styles as commonStyles } from "../../common/styles";

const ComboDetailCard = ({
  product
}) => (
    <View style={styles.card}>
      <ImageBackground source={{
        uri: product.productImgUrl
      }} style={styles.cardImage} />
      <View style={styles.content}>
        <Text style={styles.mainText}>
          {`${product.productName} (${product.productMalayalamName})`}
        </Text>
        <Text style={styles.subText}>
          {`${product.pricingDetails.quantity} ${product.pricingDetails.unit}`}
        </Text>
        <View style={commonStyles.row}>
          <Text style={commonStyles.strikedPrice}>
            {product.pricingDetails.mrpRate} Rs.
          </Text>
          <Text style={commonStyles.price}>
            {product.pricingDetails.sellingPrice} Rs.
          </Text>
        </View>
      </View>
    </View>
  );

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 30,
  },
  cardImage: {
    height: 90,
    width: 120,
    margin: 10,
    borderRadius: 3,
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: "#aaaaaa"
  }
});

export default ComboDetailCard;
