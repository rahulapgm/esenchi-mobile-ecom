import * as WebBrowser from "expo-web-browser";
import React, { Suspense, lazy } from "react";

const ProductCategoryPageLazy = lazy(() => import("../main/containers/PLP"));

import Loader from "../components/Loader";
import { View, ScrollView, Text, StyleSheet } from "react-native";

class ProductCategoryScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1, flexDirection: "column" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Suspense fallback={<View></View>}>
          <ProductCategoryPageLazy />
        </Suspense>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});

export default ProductCategoryScreen;
