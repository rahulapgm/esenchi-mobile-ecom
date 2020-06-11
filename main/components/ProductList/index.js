import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

import { StyleSheet, View } from "react-native";

const ProductList = (props) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
	});
	const { productList = [1, 2] } = props;
	return (
		<View>
			{productList.map((item, index) => {
				return <Product key={index} product={item} {...props} />;
			})}
		</View>
	);
};

ProductList.defaultProps = {
	productList: [],
};
export default ProductList;
