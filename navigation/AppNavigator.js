import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createCompatNavigatorFactory } from "@react-navigation/compat";

import AuthManager from "../screens/AuthManger";
import OTPVerificationScreen from "../screens/OTPVerificationScreen";
import SignInScreen from "../screens/SignInScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ChangeAddressScreen from "../screens/ChangeAddressScreen";

import CategoryListingScreen from "../screens/CategoryListingScreen";
import PaymentScreen from "../screens/PaymentScreen";

import BottamTabNavigator from "./BottomTabNavigator";
import transitionConfig from "../main/configs/transistionConfig";
import ComboScreen from "../screens/ComboScreen";
import ComboDetailScreen from "../screens/ComboDetailScreen";

const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    AuthManager: { screen: AuthManager },
    SignIn: { screen: SignInScreen },
    App: { screen: BottamTabNavigator },
    OTPVerifyScreen: { screen: OTPVerificationScreen },
    Checkout: { screen: CheckoutScreen },
    ProductListing: { screen: CategoryListingScreen },
    ChangeAddress: { screen: ChangeAddressScreen },
    PaymentGatewayScreen: { screen: PaymentScreen },
    Combos: { screen: ComboScreen },
    ComboView: { screen: ComboDetailScreen }
  },
  {
    initialRouteName: "AuthManager",
    headerMode: "none",
    headerLeft: null,
    gesturesEnabled: false
  },
  { transitionConfig }
);

export default AppNavigator;
