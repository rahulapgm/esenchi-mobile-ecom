import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import ProductSearchComponentV2 from '../../../components/ProductSearch/ProductSearchV2/ProductSearchV2'
import { getSearchSuggestion } from "./actions";
import { makeSelectSearchSuggestions } from "./selectors";

import toJS from '../../../hoc/toJS/toJS';

const ProductSearch = props => {
  return (
    <ProductSearchComponentV2 {...props} />
  )
};

const mapStateToProps = createStructuredSelector({
  searchSuggestion: makeSelectSearchSuggestions()
})

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchSuggestion: data => {
      dispatch(getSearchSuggestion(data));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(ProductSearch));
