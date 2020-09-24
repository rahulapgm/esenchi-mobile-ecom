import React, {Suspense, lazy} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import CartPage from "../main/containers/Pages/Cart";

const Stack = createStackNavigator();

export const CartScreen = (props) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Cart"
				component={CartPage}
				options={{
					headerTitle: "C A R T",
					headerTitleAlign: "center",
					headerLeft: null
				}}
			/>
		</Stack.Navigator>
	);
};

export default CartScreen;

