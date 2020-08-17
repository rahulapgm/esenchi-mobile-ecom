import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ComboCard from "./ComboCard";
import ComboDetail from './ComboDetail';
const Combos = ({
  fetchCombos,
  list,
  navigation
}) => {

  useEffect(() => {
    fetchCombos();
  }, []);

  const handleViewPack = ({ comboName, comboId }) => {
    navigation.navigate("ComboView", {
      screen: "ComboDetail",
      params: { name: comboName, comboId }
    });
  };

  const renderCard = ({ item }) => (
    <ComboCard product={item} viewPack={handleViewPack} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderCard}
        keyExtractor={item => item.comboId}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default Combos;


{/* <FlatList
data={list}
renderItem={renderCard}
keyExtractor={item => item.comboId}
contentContainerStyle={{ flexDirection: "row" }}
viewabilityConfig={viewConfigRef.current}
decelerationRate="fast"
snapToInterval={10}
snapToAlignment="center"
ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
onScroll={Animated.event(
  [{
    nativeEvent: {
      contentOffset: { x: scrollX }
    }
  }]
)}
scrollEventThrottle={1}
showsHorizontalScrollIndicator={false}
scrollEnabled
horizontal
/> */}