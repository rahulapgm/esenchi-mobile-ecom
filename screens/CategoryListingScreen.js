import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderBackButton from "../main/components/custom/HeaderBackButton";
import HeaderButton from "../main/components/custom/HeaderButton/HeaderButton";

import ProductListing from "../main/containers/ProductListing/ProductListing";

const Stack = createStackNavigator();

export const CategoryListingScreen = ({ navigation }) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // do something
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator screenProps={{ categoryName: "Hello" }}>
      <Stack.Screen
        name="CategoryListing"
        component={ProductListing}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <HeaderBackButton navigation={navigation} targetPage="App" />
          ),
          headerRight: () => (
            <HeaderButton navigation={navigation} targetPage="CartTab" iconName="shopping" contentText="View Cart" />
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryListingScreen;
