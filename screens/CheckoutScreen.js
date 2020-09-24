import React, { Suspense, lazy } from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Checkout from "../main/containers/Pages/Checkout/Checkout";
import HeaderBackButton from "../main/components/custom/HeaderBackButton";
import OrderConfirmation from "../main/containers/Pages/OrderConfirmation/OrderConfirmation";

import OrderSuccess from "../main/components/Pages/OrderConfirmation/OrderSuccess";

const Stack = createStackNavigator();

export class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerTitle: "C H E C K O U T",
            headerTitleAlign: "center",
            headerLeft: () => (
              <HeaderBackButton {...this.props} targetPage="Cart" />
            )
          }}
        />
         <Stack.Screen
          name="OrderConfirmation"
          component={OrderSuccess}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    );
  }
}
// subdirectory-arrow-left
export default CheckoutScreen;
