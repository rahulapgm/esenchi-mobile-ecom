import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createCompatNavigatorFactory } from "@react-navigation/compat";

import AuthManager from "../screens/AuthManger";
import OTPVerificationScreen from "../screens/OTPVerificationScreen";
import SignInScreen from "../screens/SignInScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ManageAddressScreen from "../screens/ManageAddressScreen";

import CategoryListingScreen from "../screens/CategoryListingScreen";

import BottamTabNavigator from "./BottomTabNavigator";
import transitionConfig from "../main/configs/transistionConfig";

const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    AuthManager: { screen: AuthManager },
    SignIn: { screen: SignInScreen },
    App: { screen: BottamTabNavigator },
    OTPVerifyScreen: { screen: OTPVerificationScreen },
		Checkout: { screen: CheckoutScreen },
    ProductListing: { screen: CategoryListingScreen },
    ChangeAddress: { screen: ManageAddressScreen }
  },
  {
    initialRouteName: "AuthManager",
    headerMode: "none",
    headerLeft: null,
    gesturesEnabled: false
  },
  { transitionConfig }
);

// export const dummy = () => {
//   <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="Profile" component={BottamTabNavigator} />
//         <Stack.Screen name="OTPVerifyScreen" component={OTPVerificationScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
// }

export default AppNavigator;
