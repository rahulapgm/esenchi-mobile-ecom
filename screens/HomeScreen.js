import * as WebBrowser from "expo-web-browser";
import React, { Suspense, lazy } from "react";

const HomePageLazy = lazy(() =>
  import("../main/containers/Pages/HomePage/HomePage.js")
);

import ProductSearch from "../main/containers/ProductSearch";

import Loader from "../main/components/Loader";
import { View, StyleSheet } from "react-native";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Suspense fallback={<View></View>}>
          <HomePageLazy {... this.props}/>
        </Suspense>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});

export default HomeScreen;
