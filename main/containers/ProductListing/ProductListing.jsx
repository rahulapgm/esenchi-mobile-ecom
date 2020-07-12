import React from "react";

import { View, Text } from "react-native";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import {
  getProductsListOnCategory,
  setProductsListOnCategory,
  fetchErrorOnProductCategory
} from "./actions";

export class ProductListing extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { route } = this.props;
    const {
      categoryName = "Category Page",
      subCategoryItem = "Category Page"
    } = route && route.params;
    this.props.navigation.setOptions({ title: subCategoryItem });
    console.log("ProductListingScreen", this.props);
  }

  render() {
    console.log("ProductListingScreen", this.props);
    return (
      <React.Fragment>
        <View>
          <Text>Welcome to search page</Text>
        </View>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = () => {
  return {};
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ProductListing);
