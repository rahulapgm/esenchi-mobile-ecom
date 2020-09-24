import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import toJS from "../../../../hoc/toJS";

import { updateItemQuantity, removeOrderItem } from "./actions";

import OrderItemComponent from "../../../../components/Pages/Cart/OrderItem/OrderItem";

export const OrderItem = props => {
  return <OrderItemComponent {...props} />;
};

export const mapStateToProps = createStructuredSelector({});

export const mapDispatchToProps = dispatch => {
  return {
    setProductQuantity: data => dispatch(updateItemQuantity(data))
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(OrderItem));
