import React from "react";
import { View } from "react-native";

import { styles } from "./productCategoryTilesStyles";
import CategoryTile from "./CategoryTile/CategoryTile";

class ProductCategoryTiles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				catergories: [
					{
						title: "Vegetables",
						icon:
							"https://esenchibucket.s3.ap-south-1.amazonaws.com/vegetables-3.png",
					},
					{
						title: "Food Grains",
						icon:
							"https://esenchibucket.s3.ap-south-1.amazonaws.com/food-grain-128.png",
					},
					{
						title: "Groceries",
						icon:
							"https://esenchibucket.s3.ap-south-1.amazonaws.com/grocery-3-128.png",
					},
				],
			},
		};
	}
	render() {
		return (
			<View style={styles.container}>
				{this.state.data.catergories.map((item) => {
					return <CategoryTile key={item.icon} item={item} {...this.props} />;
				})}
			</View>
		);
	}
}

export default ProductCategoryTiles;
