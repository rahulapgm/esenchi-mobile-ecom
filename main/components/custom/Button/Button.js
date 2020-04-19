import React from "react";
import PropTypes from "prop-types";
import {LinearGradient} from "expo-linear-gradient";
import {
	View,
	Text,
	TouchableOpacity,
	Button as NativeButton,
} from "react-native";

export const Button = (props) => {
	const {
		isGradient,
		gradColors,
		gradStart,
		gradEnd,
		gradStyle,
		viewStyle,
		textStyle,
		onPress,
		onHover,
		btnText,
		disabled,
		theme,
		...others
	} = props;
	if (disabled) {
		return (
			<View style={viewStyle}>
				<NativeButton title={btnText} disabled />
			</View>
		);
	} else if (isGradient) {
		return (
			<TouchableOpacity onPress={onPress} style={viewStyle}>
				<LinearGradient
					start={gradStart}
					end={gradEnd}
					colors={gradColors}
					style={gradStyle}>
					<Text style={textStyle}>{btnText}</Text>
				</LinearGradient>
			</TouchableOpacity>
		);
	} else {
		return (
			<View style={viewStyle}>
				<NativeButton title={btnText} {...others} />
			</View>
		);
	}
};

Button.propTypes = {
	isGradient: PropTypes.bool,
	gradientColors: PropTypes.array,
	gradStart: PropTypes.array,
	gradEnd: PropTypes.array,
	gradStyle: PropTypes.object,
	viewStyle: PropTypes.object,
	textStyle: PropTypes.object,
	btnText: PropTypes.string,
	disabled: PropTypes.bool,
	theme: PropTypes.string,
};

Button.defaultProps = {
	isGradient: false,
	gradientColors: [],
	gradStart: [0, 0],
	gradEnd: [0, 0],
	gradStyle: {},
	viewStyle: {},
	textStyle: {},
	btnText: "",
	disabled: false,
	theme: "",
};

export default Button;
