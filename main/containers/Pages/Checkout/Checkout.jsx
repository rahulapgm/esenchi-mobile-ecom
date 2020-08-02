import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import CheckoutComponent from "../../../components/Pages/Checkout/Checkout";
import { makeSelectCartItems, makeSelectOrderApiFetching, makeSelectOrderAPIStatus } from "../Cart/selectors";
import toJS from "../../../hoc/toJS/toJS";

export const Checkout = props => {
  return <CheckoutComponent {...props} />;
};

const mapStateToProps = createStructuredSelector({
  cartDetailsObj: makeSelectCartItems(),
  isOrderApiFetching: makeSelectOrderApiFetching(),
  currentOrderAPIStatus: makeSelectOrderAPIStatus(),
});

const mapDispatchToProps = dispatch => {
  return {};
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Checkout));
