import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


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
				name="SearchScreen"
				component={SearchScreen}
				options={{
					headerTitle: "S E A R C H",
					headerTitleAlign: "center",
					headerLeft: null
				}}
			/>
		</Stack.Navigator>
	);
};

export default CartScreen;
