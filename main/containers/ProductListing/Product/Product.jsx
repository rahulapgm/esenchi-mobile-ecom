import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import ProductComponent from '../../../components/ProductList/Product/Product';
import toJS from '../../../hoc/toJS/toJS';

import {addProductToCart} from './actions';

export const Product = (props) => {
  return (
    <ProductComponent {...props} />
  )
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: data => {
      dispatch(addProductToCart(data));
    }
  }
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Product));
