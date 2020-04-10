import React from "react";
import Product from "./Product";

import { StyleSheet } from "react-native";

const ProductList = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
  return (
      <React.Fragment>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </React.Fragment >
  );
};

export default ProductList;
