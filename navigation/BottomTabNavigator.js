import * as React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {MaterialCommunityIcons} from "react-native-vector-icons";

import HomeScreen from "../screens/HomeScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import CartScreen from "../screens/CartScreen";

const BottomTab = createMaterialBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";
// const BottomTab = createBottomTabNavigator();

const config = {
	animation: "spring",
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
};

export default function BottomTabNavigator({navigation}) {
	// navigation.setOptions({ headerTitle: "rahul"});
	return (
		<BottomTab.Navigator
			initialRouteName={INITIAL_ROUTE_NAME}
			barStyle={{backgroundColor: "white"}}
			activeColor="blue"
			options={{
				header: {
					left: null,
				},
			}}>
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: "H O M E",
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					),
					transitionSpec: {
						open: config,
						close: config,
					},
				}}
			/>
			<BottomTab.Screen
				name="Links"
				component={CartScreen}
				options={{
					title: "C A R T",
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons name="shopping" color={color} size={26} />
					),
					transitionSpec: {
						open: config,
						close: config,
					},
				}}
			/>
			<BottomTab.Screen
				name="MyAccount"
				component={MyAccountScreen}
				options={{
					title: "MY ACCOUNT",
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons
							name="account"
							color={color}
							backgroundColor="green"
							size={26}
						/>
					),
					transitionSpec: {
						open: config,
						close: config,
					},
				}}
			/>
		</BottomTab.Navigator>
	);
}

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Links':
//       return 'Links to learn more';
//   }
// }
