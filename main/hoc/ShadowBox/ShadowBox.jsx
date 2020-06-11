import React from "react";
import PropTypes from "prop-types";

import {View, StyleSheet} from "react-native";

export const ShadowBox = (props) => {
	return (
		<View {...props} style={{...boxStyles.shadow, ...props.style}}>
			{props.children}
		</View>
	);
};

const boxStyles = StyleSheet.create({
	shadow: {
		backgroundColor: "white",
		shadowColor: "#cccccc",
		shadowOffset: {width: 3, height: 3},
		shadowOpacity: 1.0,
		borderRadius: 4,
		elevation: 3,
		margin: 6,
		padding: 6,
	},
});
ShadowBox.defaultProps = {
	style: {},
};

export default ShadowBox;
