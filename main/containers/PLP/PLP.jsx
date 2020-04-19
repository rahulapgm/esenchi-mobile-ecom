import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { View, StyleSheet } from "react-native";

import { getProducts } from "./actions";
import { makeSelectProductList } from './selectors';
import Loader from "../../hoc/Loader";
import ProductList from "../../components/ProductList";


class PLP extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.getProducts();
  }

  render () {
    return (
      <View>
        <Loader showLoader={this.props.loader}>
          <ProductList {...this.props} />
        </Loader>
        {/* {!this.props.loader ? <ProductList /> : <Loader />} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state =>
  createStructuredSelector({
    productList: makeSelectProductList()
  })


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PLP);
