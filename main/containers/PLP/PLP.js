import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../store/actions";

// import Loader from "../../components/Loader";
import Loader from "../../hoc/Loader";
import ProductList from "../../components/ProductList";
import { View, ScrollView, Text, StyleSheet } from "react-native";

class PLP extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <View>
        <Loader showLoader={this.props.loader}><ProductList /></Loader>
        {/* {!this.props.loader ? <ProductList /> : <Loader />} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

const mapStateToProps = state => {
  const { products, loader } = state;
  return {
    products,
    loader
  };
};

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
