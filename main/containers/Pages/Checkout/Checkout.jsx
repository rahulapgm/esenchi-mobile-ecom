import React, {PureComponent} from "react";

import {View, Text} from "react-native";

export class Checkout extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Text>Welcome to Checkout!!</Text>
			</View>
		);
	}
}

export default Checkout;
