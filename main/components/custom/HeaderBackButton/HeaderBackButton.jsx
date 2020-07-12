import React from "react";
import { TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

export const HeaderBackButton = ({ navigation, targetPage = "App" }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(targetPage)}
      style={{
        color: "#0099ff",
        backgroundColor: "white",
        fontSize: 20,
        paddingHorizontal: 26
      }}
    >
      <MaterialCommunityIcons name="arrow-left-bold-circle" size={32} />
    </TouchableOpacity>
  );
};

export default HeaderBackButton;
