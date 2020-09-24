import React, { Suspense, lazy } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  StyleSheet,
  Platform,
} from "react-native";

import { useSafeArea } from "react-native-safe-area-context";

import HomePage from "../main/containers/Pages/HomePage/HomePage";

import CategoryDrawer from "../main/containers/CategoryDrawer/CategoryDrawer";

const Stack = createStackNavigator();

export const HomeScreen = ({ navigation }) => {
  const insets = useSafeArea();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeMain" component={HomePage} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export const homeWithCategoryNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "#FFFFFF",
        width: 300
      }}
      drawerContent={props => <CategoryDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: "#e91e63"
      }}
      drawerPosition={Platform.OS === "ios" ? "left" : "right"}
      drawerType="front"
    >
      <Drawer.Screen
        name="GoToHome"
        options={{ drawerLabel: "Home" }}
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

export default homeWithCategoryNavigator;
