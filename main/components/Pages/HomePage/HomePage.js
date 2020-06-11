import React from "react";
import { View, ScrollView } from "react-native";

import ProductCategoryTiles from "../../../containers/Pages/HomePage/ProductCategoryTiles";
import PLP from "../../../containers/PLP";
import ProductSearch from "../../../containers/ProductSearch";
import Banner from "../../common/Banner/Banner";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <ScrollView
          style={{ flex: 1, flexDirection: "column" }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <ProductCategoryTiles />
          <Banner title="Min. order amount is 50Rs. Free delivery for orders above 100Rs." />
          <Banner title="Flat 10% off on online payment purchases." />
          <PLP />
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default HomePage;
