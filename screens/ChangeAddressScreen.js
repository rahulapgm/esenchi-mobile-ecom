import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChangeAddress from "../main/containers/Pages/ChangeAddress/ChangeAddress";

import HeaderBackButton from "../main/components/custom/HeaderBackButton";

const Stack = createStackNavigator();

export const ChangeAddressScreen = props => {
  const params = props.navigation.getParam("params", {});
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChangeAddress"
        component={ChangeAddress}
        options={{
          headerTitle: "A D D R E S S",
          headerTitleAlign: "center",
          headerLeft: !params.noHeaderButton
            ? () => (
                <HeaderBackButton
                  navigation={props.navigation}
                  targetPage="CartTab"
                />
              )
            : null
        }}
      />
    </Stack.Navigator>
  );
};

export default ChangeAddressScreen;
