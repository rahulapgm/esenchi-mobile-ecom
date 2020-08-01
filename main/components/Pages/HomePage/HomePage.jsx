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
import PLP from "../../../containers/PLP";
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
          justifyContent: "center",
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
        />
        <View style={{ flex: 0.5 }}>
          <ProductSearch />
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.toggleDrawer()}
          style={{
            flex: 0.25,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MaterialCommunityIcons name="menu" size={36} />
          <Text style={{fontSize:12}}>Categories</Text>
        </TouchableOpacity>
      </ShadowBox>
    );
  };
  render() {
    return (
      <React.Fragment>
        <SafeAreaView>
          {this.renderHeader()}
          <ScrollView>
            <ProductCategoryTiles />
            <Banner title="Min. order amount is 50Rs. Free delivery for orders above 100Rs." />
            <Banner title="Flat 10% off on online payment purchases." />
            <PLP />
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  brandIcon: {
    width: 48,
    height: 32,
    resizeMode: "contain"
  },
  brandTitle: {},
  brandViewStyle: {
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
