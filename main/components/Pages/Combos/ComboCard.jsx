import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions
} from "react-native";
import { Caption, Button, Text } from "react-native-paper";
import { styles as commonStyles } from "../../common/styles";

const width = Dimensions.get("screen").width - 80;

const Card = ({ product, viewPack }) => {
  const scaleValue = new Animated.Value(1);
  const [activeImage, setActiveImage] = useState(product.comboImgUrl);
  const [activeProductName, setActiveProductName] = useState(null);
  const [activeProductQuantity, setActiveProductQuantity] = useState(null);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9 // You can change this value if you want
    }).start();
  };

  const onImageTileClick = productDetail => {
    const { productImgUrl, productName, productQuantity } = productDetail;
    setActiveImage(productImgUrl);
    setActiveProductName(productName);
    setActiveProductQuantity(productQuantity);
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1
    }).start();
  };

  const transformStyle = {
    transform: [{ scale: scaleValue }],
    height: 350,
    width: "100%",
    marginBottom: 30
  };

  return (
    <TouchableWithoutFeedback
      style={styles.touchableContainer}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={transformStyle}>
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: activeImage
            }}
            style={styles.image}
          ></ImageBackground>
          {activeProductName ? (
            <Caption>{`${activeProductName} - ${activeProductQuantity}`}</Caption>
          ) : (
            <Text></Text>
          )}
          <ScrollView
            style={{ height: 40, marginTop: 10 }}
            decelerationRate={0}
            snapToInterval={200} //your element width
            snapToAlignment={"center"}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {product.highLevelProductDetails.map((product, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => onImageTileClick(product)}
              >
                <ImageBackground
                  source={{
                    uri: product.productImgUrl
                  }}
                  style={styles.cardImage}
                />
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
          <View style={styles.content}>
            <View style={{flex:1}}>
              <Text style={styles.title} numberOfLines={2}>
                {product.comboName}
              </Text>
              <View style={commonStyles.row}>
                <Text style={commonStyles.strikedPrice}>
                  {product.comboMRP} Rs.
                </Text>
                <Text style={commonStyles.price}>
                  {product.comboSellingPrice} Rs.
                </Text>
              </View>
            </View>
              <Button
                mode="contained"
                style={styles.packBtn}
                onPress={() => viewPack(product)}
              >
                View pack
              </Button>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 350,
    backgroundColor: "#ffffff",
    borderRadius: 3,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5
  },
  image: {
    height: 180,
    width: 200
  },
  content: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: "rgba(188,188,188, 0.1)",
    minHeight: 50
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    width: 220
  },
  subText: {
    color: "#6d6e71",
    fontSize: 14
  },
  packBtn: {
    backgroundColor: "#0a00ff",
    color: "#ffffff",
    paddingVertical: 4,
    borderRadius: 4,
  },
  cardImage: {
    height: 56,
    width: 56,
    marginHorizontal: 6,
    borderRadius: 3,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5
  }
});

export default Card;
