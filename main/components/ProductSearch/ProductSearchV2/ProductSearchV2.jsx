import React, { useState } from "react";

import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import SearchModal from "./SearchModal/SearchModal";

const ProductSearch = ({ fetchSearchSuggestion, searchSuggestion, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <React.Fragment>
      <SearchModal
        searchStyle={searchStyle}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        fetchSearchSuggestion={fetchSearchSuggestion}
        searchSuggestion={searchSuggestion}
        navigation={navigation}
      />

      <TouchableOpacity
        style={searchStyle.searchContainer}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text
          style={{ flex: 1, padding: 8, fontSize: 13 }}
        >
          Search for products
        </Text>
        <Image
          style={{
            height: 40,
            width: 36,
            resizeMode: "center",
            backgroundColor: "#f5f5f5",
            borderTopRightRadius: 2,
            borderBottomRightRadius: 2
          }}
          source={require("../../../../assets/icons/search-icon-11.png")}
        />
      </TouchableOpacity>
    </React.Fragment>
  );
};

const searchStyle = StyleSheet.create({
  searchContainer: {
    alignContent: "center",
    borderRadius: 2,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 20,
    height: 40,
    margin: 15,
  },
  ImageStyle: {
    backgroundColor: "#FAFAFA",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 4.0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 0.5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default ProductSearch;
