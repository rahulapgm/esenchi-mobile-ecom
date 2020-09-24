import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

export const HeaderButton = ({
  navigation,
  targetPage = "App",
  onIconPress = () => {},
  iconName,
  contentText
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("App", { screen: targetPage });
        onIconPress();
      }}
      style={{
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <MaterialCommunityIcons name={iconName} size={20} />
      {contentText && <Text>{contentText}</Text>}
    </TouchableOpacity>
  );
};

export default HeaderButton;
