import React, { useState } from "react";

import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


const ProductSearch = props => {
  const [searchValue, updateSearch] = useState();
  const handleChange = search => {
    updateSearch(searchValue => search);
  };
  return (
    <View style={searchStyle.searchContainer}>
      <TextInput
        onChangeText={handleChange}
        value={searchValue}
        placeholder="Search for products"
        style={{ flex: 1, paddingHorizontal: 12, backgroundColor: "white" }}
      />
      <TouchableOpacity
        style={{ borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
      >
        <Image
          style={{
            flex: 1,
            height: 50,
            resizeMode: "center",
            backgroundColor: "#f5f5f5",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8
          }}
          source={require("../../../assets/icons/search-icon-11.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const searchStyle = StyleSheet.create({
  searchContainer: {
    flex: 0.8,
    alignSelf: "center",
    alignContent: "center",
    borderRadius: 8,
    flexDirection: "row",
    minWidth: 240,
    minHeight: 40,
    maxHeight: 50,
    maxWidth: 240,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    borderRadius: 10,
    elevation: 20
  },
  ImageStyle: {
    backgroundColor: "#FAFAFA",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 4.0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 0.5
  }
});

export default ProductSearch;
