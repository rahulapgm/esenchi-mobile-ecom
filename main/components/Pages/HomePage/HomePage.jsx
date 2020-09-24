import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import ProductCategoryTiles from "../../../containers/Pages/HomePage/ProductCategoryTiles";
import ProductSearch from "../../../containers/ProductSearch/ProductSearchV2/ProductSearchV2";
import Banner from "../../common/Banner/Banner";
import Brand from "../../common/Brand/Brand";

import ShadowBox from "../../../hoc/ShadowBox/ShadowBox";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  renderHeader = () => {
    return (
      <ShadowBox
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0,
          margin: 0,
          height: 66,
        }}
      >
        <Brand
          {...this.props}
          brandIcon={styles.brandIcon}
          brandTitle={styles.brandTitle}
          brandViewStyle={styles.brandViewStyle}
          brandFontSize={14}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.toggleDrawer()}
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MaterialCommunityIcons name="menu" size={36} />
          <Text style={{ fontSize: 12 }}>Categories</Text>
        </TouchableOpacity>
      </ShadowBox>
    );
  };
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={{}}>
          {this.renderHeader()}
          <View>
            <ProductSearch {...this.props} />
          </View>
          <ScrollView>
            <ProductCategoryTiles />
            <Banner title="Min. order amount is 100Rs. Free delivery for orders above 150Rs." />
            <Banner title="Flat 10% off on online payment purchases." />
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  brandIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    position:"absolute",
    bottom:24
  },
  brandViewStyle: {
    left: 16,
    top:12
  },
});
