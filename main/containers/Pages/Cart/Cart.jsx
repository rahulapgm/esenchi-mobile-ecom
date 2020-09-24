import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import SkeletonComponent from "../../../components/custom/Skeleton/Skeleton";
import CartComponent from "../../../components/Pages/Cart";
import toJS from "../../../hoc/toJS";

import {
  viewCartItems,
  updateCurrentOrder,
  updateItemQuantity,
  removeCartItem,
  orderAPIFetching,
  getPaymentMethods,
  removeCartComboItem,
  getEstimatedDelivery
} from "./actions";
import {
  makeSelectCartItems,
  makeProductIdUpdating,
  makeSelectOrderApiFetching
} from "./selectors";

import {
  selectUserAddress,
  selectEstimatedDelivery,
  selectUserPincode
} from "../ChangeAddress/selectors";

import { getUserAddress } from "../ChangeAddress/actions";
import { viewCheckout } from "../Checkout/actions";

export class Cart extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.onScreenFocus();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  onScreenFocus = () => {
    this.props.getAllPaymentMethods();
  };

  render() {
    if (this.props.isOrderApiFetching) {
      return (
        <SkeletonComponent
          loadingState={this.props.isOrderApiFetching}
          mt={24}
          text={"Few seconds away, we are loading your order details"}
        />
      );
    }
    return (
      <CartComponent cartDetails={this.props.cartDetailsObj} {...this.props} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartDetailsObj: makeSelectCartItems(),
  updatingProductId: makeProductIdUpdating(),
  isOrderApiFetching: makeSelectOrderApiFetching(),
  userAddress: selectUserAddress(),
  userPincode: selectUserPincode(),
  estimatedDelivery: selectEstimatedDelivery()
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: () => dispatch(viewCartItems()),
    fetchCurrentOrder: () => dispatch(updateCurrentOrder()),
    setItemQuantity: data => dispatch(updateItemQuantity(data)),
    setFetchingProductId: data => dispatch(updateFetchingProductId(data)),
    removeCartProductItem: productId => {
      dispatch(removeCartItem(productId));
    },
    setOrderAPIFetchingState: data => dispatch(orderAPIFetching(data)),
    getUserAddress: () => dispatch(getUserAddress()),
    getAllPaymentMethods: () => dispatch(getPaymentMethods()),
    removeComboItem: data => dispatch(removeCartComboItem(data)),
    fetchCheckoutItems: () => dispatch(viewCheckout())
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Cart));
