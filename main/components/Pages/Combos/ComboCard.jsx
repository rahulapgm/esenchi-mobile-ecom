import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Animated, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native';
import { Text, Button } from "react-native-paper";
import { styles as commonStyles } from "../../common/styles";

const width = Dimensions.get("screen").width - 80;

const Card = ({
  product,
  viewPack
}) => {
  const scaleValue = new Animated.Value(1);
  const [activeImage, setActiveImage] = useState("https://www.bigbasket.com/media/uploads/p/m/10000272_11-fresho-carrot-ooty.jpg");

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9 // You can change this value if you want
    }).start();
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
      <Animated.View
        style={transformStyle}
      >
        <View style={styles.card}>
          <ImageBackground source={{
            uri: activeImage
          }}
            style={styles.image}>
          </ImageBackground>
          <ScrollView
            decelerationRate={0}
            snapToInterval={200} //your element width
            snapToAlignment={"center"}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {
              product.highLevelProductDetails.map((image, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => setActiveImage(image.productImgUrl)}>
                  <ImageBackground
                    source={{
                      uri: image.productImgUrl
                    }}
                    style={styles.cardImage}
                  />
                </TouchableWithoutFeedback>
              ))
            }
          </ScrollView>
          <View style={styles.content}>
            <View>
              <Text style={styles.title} numberOfLines={1}>{product.comboName}</Text>
              <View style={commonStyles.row}>
                <Text style={commonStyles.strikedPrice}>
                  {product.comboMRP} Rs.
                </Text>
                <Text style={commonStyles.price}>
                  {product.comboSellingPrice} Rs.
                </Text>
              </View>
            </View>
            <View>
              <Button mode="contained" style={styles.packBtn} onPress={() => viewPack(product)}>View pack</Button>
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 350,
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 3,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 50,
  },
  image: {
    height: 180,
    width: 180,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "rgba(188,188,188, 0.1)",
    height: 70,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    width: 220
  },
  subText: {
    color: "#6d6e71",
    fontSize: 14,
  },
  packBtn: {
    backgroundColor: "#0a00ff",
    color: "#ffffff",
    width: 150
  },
  productInfo: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  },
  cardImage: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 3,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  }
});

export default Card;