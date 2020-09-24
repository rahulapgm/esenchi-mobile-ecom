import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import ProductCategoryComponent from "../../../../components/Pages/HomePage/ProductCategory/ProductCategory";

class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
  }
  _navigateToCategoryPLP() {}
  render() {
    return <ProductCategoryComponent {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(ProductCategory);
