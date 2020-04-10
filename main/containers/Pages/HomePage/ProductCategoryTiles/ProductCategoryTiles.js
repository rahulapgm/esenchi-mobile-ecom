import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
// import { withNavigation } from "react-navigation";
import { View, Text, Image } from "react-native";

import ProductCategoryTilesComponent from "../../../../components/Pages/HomePage/ProductCategoryTiles";

class ProductCategoryTiles extends React.Component {
  constructor(props) {
    super(props);
  }
  _navigateToCategoryPLP(){

  }
  render() {
    return <ProductCategoryTilesComponent {...this.props}/>;
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => dispatch(signInUser(userData)),
    verifyUserLogin: userData => dispatch(verifyLogin(userData)),
    resetUserLoginDetails: () => dispatch(resetUserLoginData())
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(
  withConnect
)(ProductCategoryTiles);
