import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CartPage from "../main/containers/Pages/Cart";
import HeaderBackButton from "../main/components/custom/HeaderBackButton";

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
          headerTitleAlign: "center"
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryListingScreen;
