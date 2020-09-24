import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ComboDetailCard from "./ComboDetailCard";
import { FAB, ActivityIndicator } from "react-native-paper";

const ComboDetail = props => {
  const {
    fetchComboDetails,
    isAddingCombos,
    selectedCombo: { comboProductList },
    route: { params },
    addComboCart,
    isFetchingCombos,
    navigation: { navigate }
  } = props;

  useEffect(() => {
    fetchComboDetails({ comboId: params.comboId });
  }, []);

  const renderCard = ({ item }) => {
    return <ComboDetailCard product={item} />;
  };

  const addComboToCart = () => {
    addComboCart({
      routeName: "Combos",
      screen: "CombosList",
      comboId: params.comboId,
      navigate
    });
  };

  return (
    <View style={styles.container}>
      {isFetchingCombos ? (
        <ActivityIndicator animating={true} color="#0a00ff" />
      ) : (
        <FlatList
          style={styles.flatList}
          data={comboProductList}
          renderItem={renderCard}
          keyExtractor={item => item.productId}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding:6, paddingBottom:56}}
        />
      )}
      <View style={styles.fabContainer}>
        <FAB
          style={styles.fabBtn}
          label="Add to cart"
          loading={isAddingCombos}
          onPress={addComboToCart}
          extended
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
  },
  flatList: {
    width: "100%",
    borderRadius: 2
  },
  fabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    right: 0,
    bottom: 12,
    backgroundColor: "transparent"
  },
  fabBtn: {
    width: 200
  }
});

export default ComboDetail;
