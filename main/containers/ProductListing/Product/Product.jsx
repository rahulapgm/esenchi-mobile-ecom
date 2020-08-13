import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectProductState } from "./selectors";

import ProductComponent from '../../../components/ProductList/Product/ProductV2/ProductV2';
import toJS from '../../../hoc/toJS/toJS';

import { addToCartAction } from './actions';

export const Product = (props) => {
  return (
    <ProductComponent {...props} />
  );
};

const mapStateToProps = createStructuredSelector({
  isUpdatingCartId: selectProductState()
});

const mapDispatchToProps = {
  addToCart: addToCartAction.request
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Product));
