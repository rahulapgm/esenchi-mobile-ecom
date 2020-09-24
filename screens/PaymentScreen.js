import React, { Suspense, lazy } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentGateway from "../main/containers/Pages/PaymentGateway/PaymentGateway";

const Stack = createStackNavigator();

export const PaymentScreen = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentGateway}
        options={{
          headerTitle: "P A Y M E N T",
          headerTitleAlign: "center"
        }}
      />
    </Stack.Navigator>
  );
};

export default PaymentScreen;
