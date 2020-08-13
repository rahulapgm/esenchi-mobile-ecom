import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Combos from "../main/containers/Pages/Combos";

import HeaderBackButton from "../main/components/custom/HeaderBackButton";

const Stack = createStackNavigator();

export const ComboScreen = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CombosList"
        component={Combos}
        options={{
          headerTitle: "C O M B O S",
          headerTitleAlign: "center",
          headerLeft: () => (
            <HeaderBackButton navigation={props.navigation} targetPage="App" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ComboScreen;
