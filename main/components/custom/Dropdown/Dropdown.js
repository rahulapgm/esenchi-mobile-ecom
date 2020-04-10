import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";

export const Dropdown = props => {
  const [clicked, changeView] = useState(false);
  const toggleView = () => changeView(!clicked);
  const [currentSelected, setCurrentSelected] = useState("1 KG - 24 Rs");

  const quantityList = [
    "500 grams - 18 Rs",
    "1 KG - 32 Rs",
    "2 KG - 60 Rs",
    "3 KG - 88 Rs",
    "4 KG - 110 Rs"
  ];
  if (clicked) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <Modal isVisible={clicked} animationType="slide" transparent={true}>
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              backgroundColor: "rgba(100,100,100, .9)",
              padding: 24
            }}
          >
            {quantityList.map((quantity, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    toggleView();
                    setCurrentSelected(quantityList[index]);
                  }}
                  key={index}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 4,
                    borderWidth: 0.2,
                    borderColor: "#2e5ef0",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 1.0,
                    elevation: 5,
                    padding: 18,
                    margin: 6
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#2e5ef0",
                      textAlign: "center"
                    }}
                  >
                    {quantity}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Modal>
      </View>
    );
  } else {
    return (
      <View
        style={{
          borderRadius: 8,
          flex: 1,
          flexDirection: "row",
          backgroundColor: "white",
          alignItems: "center",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 1.0,
          elevation: 5,
          borderColor: "#2e5ef0",
          borderWidth: 0.1
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 6
          }}
          onPress={toggleView}
        >
          <Text
            style={{
              flex: 0.8,
              fontSize: 16,
              padding: 6,
              fontWeight: "bold"
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {currentSelected}
          </Text>
          <Image
            style={{
              flex: 0.2,
              height: 32,
              width: 32,
              justifyContent: "flex-end",
              resizeMode: "center"
            }}
            source={require("../../../../assets/icons/dropdown00003.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default Dropdown;
