import React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, Colors } from 'react-native-paper';

export const SkeletonComponent = ({loadingState=true, text}) => {
  return (
    <View style={{marginTop:24}}>
      <ActivityIndicator size="large" animating={loadingState} color={"#0651FF"} />
      <Text style={{marginTop:24, textAlign:"center", fontWeight:"600" }}>{text}</Text>
    </View>
  );
};

export default SkeletonComponent;
