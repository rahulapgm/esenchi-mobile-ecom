import React, {Suspense, lazy} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import CartPage from "../main/containers/Pages/Cart";
import ChangeAddress from "../main/containers/Pages/ChangeAddress";

import HeaderBackButton from "../main/components/custom/HeaderBackButton";

const Stack = createStackNavigator();

export const CartScreen = ({navigation}) => {
	React.useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			// do something
		});

		return unsubscribe;
	}, [navigation]);
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
			{
				<Stack.Screen
					name="ChangeAddress"
					component={ChangeAddress}
					options={{
						headerTitle: "A D D R E S S",
						headerTitleAlign: "center",
						headerLeft: () => (
							<HeaderBackButton navigation={navigation} targetPage="Cart" />
						),
					}}
				/>
			}
		</Stack.Navigator>
	);
};

export default CartScreen;
