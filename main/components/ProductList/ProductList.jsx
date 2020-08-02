import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { useFocusEffect } from '@react-navigation/native';


import { StyleSheet, View, ScrollView } from "react-native";

const ProductList = props => {

  const { productList=[] } = props;

  console.log("ProductList props", props);

  return (
    <ScrollView style={{marginBottom:24}}>
      {productList && productList.map((item, index) => {
        return <Product key={index} product={item} {...props} />;
      })}
    </ScrollView>
  );
};

ProductList.defaultProps = {
  productList: []
};
export default ProductList;
