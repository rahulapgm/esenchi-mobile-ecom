import React from "react";
import { TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

export const HeaderBackButton = ({ navigation, targetPage = "App", onBackBtnPress = () => {}, iconSize= 26, btnStyle={} }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(targetPage);
        onBackBtnPress();
      }}
      style={{
        color: "#0099ff",
        backgroundColor: "white",
        paddingHorizontal: 24,
        ...btnStyle
      }}
    >
      <MaterialCommunityIcons name="arrow-left-bold-circle" size={iconSize} />
    </TouchableOpacity>
  );
};

export default HeaderBackButton;
