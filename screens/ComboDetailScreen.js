import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ComboDetail from "../main/containers/Pages/Combos/ComboDetail";

import HeaderBackButton from "../main/components/custom/HeaderBackButton";

const Stack = createStackNavigator();

export const ComboDetailScreen = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ComboDetail"
        component={ComboDetail}
        options={({ route }) => {
          return {
            title: route.params.name || "C O M B O  V I E W",
            headerTitleAlign: "center",
            headerLeft: () => (
              <HeaderBackButton navigation={props.navigation} targetPage="Combos" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default ComboDetailScreen;
