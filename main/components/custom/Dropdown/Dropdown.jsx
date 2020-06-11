import React, { useState } from "react";
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	Modal,
} from "react-native";

import styles from './DropDownStyles';

export const Dropdown = (props) => {
	const {
		optionsList = [{}],
		currentOption = {},
		callbackForUpdate = () => { }
	} = props;
	const { displayLabel = "Label Missing" } = currentOption;
	const [clicked, changeView] = useState(false);
	const toggleView = () => changeView(!clicked);
	if (clicked) {
		return (
			<View
				style={styles.expandedView}>
				<Modal isVisible={clicked} animationType="slide" transparent={true}>
					<View
						style={styles.optionListView}>
						{optionsList.map((option, index) => {
							return (
								<TouchableOpacity
									style={styles.optionView}
									onPress={() => {
										toggleView();
										callbackForUpdate(option);
									}}
									key={index}
								>
									<Text
										style={styles.optionText}>
										{option.displayLabel || "Label Missing"}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				</Modal>
			</View>
		);
	} else {
		return (
			<View
				style={styles.collapseView}>
				<TouchableOpacity
					style={styles.collapseButton}
					onPress={toggleView}>
					<Text
						style={styles.collapseButtonText}
						numberOfLines={1}
						ellipsizeMode="tail">
						{displayLabel}
					</Text>
					<Image
						style={styles.upDownArrowIcon}
						source={require("../../../../assets/icons/dropdown00003.png")}
					/>
				</TouchableOpacity>
			</View>
		);
	}
};

export default Dropdown;
