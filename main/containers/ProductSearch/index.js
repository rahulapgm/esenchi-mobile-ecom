import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text
} from "react-native";

import Brand from "../../components/common/Brand/Brand";

const ProductSearch = props => {
  const [searchValue, updateSearch] = useState();
  const handleChange = search => {
    updateSearch(searchValue => search);
  };
  return (
    <View style={searchStyle.viewContainer}>
      <View
        style={{
          flex: 4,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Brand
          brandIcon={searchStyle.brandIcon}
          brandTitle={searchStyle.brandTitle}
          brandFontSize={16}
        />
      </View>
      <View style={searchStyle.searchContainer}>
        <TextInput
          onChangeText={handleChange}
          value={searchValue}
          placeholder="Search for products"
          style={{
            flex: 6,
            backgroundColor: "white",
            paddingLeft: 12,
            borderRadius: 4,
            fontSize: 16
          }}
        />
        <TouchableOpacity style={searchStyle.ImageStyle}>
          <Image
            style={{ flex: 1, height: 64, width: 36, resizeMode: "center" }}
            source={require("../../../assets/icons/search-icon-11.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const searchStyle = StyleSheet.create({
  viewContainer: {
    flex: 0,
    backgroundColor: "white",
    flexDirection: "row",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    borderRadius: 10,
    elevation: 5,
    padding:6
  },
  searchContainer: {
    borderRadius: 8,
    flex: 8,
    height: 50,
    flexDirection: "row",
    marginTop: 1,
    marginRight: 32,
    backgroundColor: "white",
    alignItems: "center",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    borderRadius: 10,
    elevation: 20
  },
  brandIcon: {
    flex: 1,
    width: 48,
    resizeMode: "contain"
  },
  brandTitle: {
    flex: 0.48
  },
  ImageStyle: {
    flex: 1,
    padding: 8,
    height: 50,
    backgroundColor: "#FAFAFA",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 4.0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 0.5
  }
});

export default ProductSearch;
