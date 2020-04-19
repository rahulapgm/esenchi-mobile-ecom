import React, {Suspense, lazy} from "react";
import {Text, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

import {MaterialCommunityIcons} from "react-native-vector-icons";
import Checkout from "../main/containers/Pages/Checkout";
import HeaderBackButton from "../main/components/custom/HeaderBackButton";

const Stack = createStackNavigator();

export class CheckoutScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Checkout"
					component={Checkout}
					options={{
						headerTitle: "C H E C K O U T",
						headerTitleAlign: "center",
						headerLeft: () => (
							<HeaderBackButton {...this.props} targetPage="Cart" />
						),
					}}
				/>
			</Stack.Navigator>
		);
	}
}
// subdirectory-arrow-left
export default CheckoutScreen;
