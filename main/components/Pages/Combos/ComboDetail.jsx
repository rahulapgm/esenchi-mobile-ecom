import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
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
    return (
      <ComboDetailCard product={item} />
    );
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
      {
        isFetchingCombos
          ? <ActivityIndicator animating={true} color="#0a00ff" />
          : (
            <FlatList
              style={styles.flatList}
              data={comboProductList}
              renderItem={renderCard}
              keyExtractor={item => item.productId}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginBottom: 10 }}
            />
          )
      }
      <View style={styles.fabContainer}>
        <FAB
          style={styles.fabBtn}
          label="Add to cart"
          loading={isAddingCombos}
          onPress={addComboToCart}
          extended />
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  flatList: {
    width: "100%",
    marginBottom: 60,
    borderRadius: 15
  },
  fabContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 35,
  },
  fabBtn: {
    width: 200
  }
});

export default ComboDetail;