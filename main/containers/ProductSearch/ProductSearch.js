import React, { useState } from "react";

import {
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	Dimensions,
} from "react-native";

import Brand from "../../components/common/Brand/Brand";

const ProductSearch = (props) => {
	const [searchValue, updateSearch] = useState();
	const handleChange = (search) => {
		updateSearch((searchValue) => search);
	};
	return (
		<View style={searchStyle.viewContainer}>
			<View
				style={{
					flex: 0.5,
					height: 56,
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Brand
					brandIcon={searchStyle.brandIcon}
					brandTitle={searchStyle.brandTitle}
					brandFontSize={16}
				/>
			</View>
			<View
				style={{
					flexDirection: "column",
					justifyContent: "center",
					marginHorizontal: 6,
				}}>
				<View style={searchStyle.searchContainer}>
					<TextInput
						onChangeText={handleChange}
						value={searchValue}
						placeholder="Search for products"
						style={{ paddingHorizontal: 12, paddingVertical: 0 }}
					/>
					<TouchableOpacity>
						<Image
							style={{ flex: 1, height: 64, width: 36, resizeMode: "center" }}
							source={require("../../../assets/icons/search-icon-11.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
		// </View>
	);
};

const searchStyle = StyleSheet.create({
	viewContainer: {
		paddingVertical: 6,
		flexDirection: "row",
		height: "100%",
		width: Dimensions.get("window").width,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	searchContainer: {
		flex: 0,
		borderRadius: 8,
		height: 42,
		flexDirection: "row",
		backgroundColor: "white",
		alignItems: "center",
		shadowColor: "#cccccc",
		shadowOffset: { width: 3, height: 3 },
		shadowOpacity: 1.0,
		borderRadius: 10,
		elevation: 20,
	},
	brandIcon: {
		flex: 1,
		width: 48,
		resizeMode: "contain",
	},
	brandTitle: { flex: 0.5 },
	ImageStyle: {
		height: 50,
		backgroundColor: "#FAFAFA",
		shadowOffset: { width: 0.2, height: 0.2 },
		shadowOpacity: 4.0,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
		elevation: 0.5,
	},
});

export default ProductSearch;
