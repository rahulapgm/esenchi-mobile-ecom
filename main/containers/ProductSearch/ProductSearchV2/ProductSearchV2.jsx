import React, { useState } from "react";

import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  Text,
  TouchableHighlight,
  SafeAreaView
} from "react-native";

import { Searchbar } from "react-native-paper";

const ProductSearch = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = query => setSearchQuery(query);
  const [searchValue, updateSearch] = useState();
  const handleChange = search => {
    updateSearch(searchValue => search);
  };
  return (
    <React.Fragment>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <SafeAreaView>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <TouchableOpacity
            style={{
              ...searchStyle.openButton,
              backgroundColor: "#2196F3",
              padding: 12
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={searchStyle.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
      <TouchableOpacity
        style={searchStyle.searchContainer}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text
          onChangeText={handleChange}
          value={searchValue}
          style={{ flex: 1, padding: 6, fontSize: 13 }}
        >
          Search for products
        </Text>
        <Image
          style={{
            height: 40,
            width: 36,
            resizeMode: "center",
            backgroundColor: "#f5f5f5",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8
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
    borderRadius: 8,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#cccccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
    elevation: 20,
    height: 40
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
