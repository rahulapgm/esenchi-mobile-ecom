import React, {PureComponent} from "react";

import {View, Text} from "react-native";

export class ChangeAddress extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Text>Welcome to Change Address Page!!</Text>
			</View>
		);
	}
}

export default ChangeAddress;
