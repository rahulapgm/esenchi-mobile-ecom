import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../../../../../RootNavigation";

import { styles } from "./CategoryTileStyles";

export class CategoryTile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item } = this.props;
    const { icon, title } = item;
    return (
      <TouchableOpacity
        key={item.title}
        style={styles.container}
        activeOpacity={0.5}
        onPress={() => {
          RootNavigation.navigate("App");
        }}
      >
        <Image style={{ width: 48, height: 48 }} source={{ uri: icon }} />
        <Text adjustsFontSizeToFit style={{ fontSize: 14 }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CategoryTile;
