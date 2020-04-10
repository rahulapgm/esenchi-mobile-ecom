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
            icon: require("../../../../../assets/icons/category/vegetables-3.png")
          },
          {
            title: "Fruits",
            icon: require("../../../../../assets/icons/category/fruits-3.png")
          },
          {
            title: "Food Grains",
            icon: require("../../../../../assets/icons/category/food-grain-128.png")
          },
          {
            title: "Groceries",
            icon: require("../../../../../assets/icons/category/grocery-3-128.png")
          }
        ]
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.data.catergories.map(item => {
          return <CategoryTile key={item.icon} item={item} {...this.props}/>;
        })}
      </View>
    );
  }
}

export default ProductCategoryTiles;
