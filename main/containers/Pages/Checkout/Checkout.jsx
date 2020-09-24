import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import Checkout from "../../../components/Pages/Checkout/Checkout";
import {
  makeSelectCartItems,
  makeSelectOrderApiFetching,
  makeSelectOrderAPIStatus
} from "../Cart/selectors";
import toJS from "../../../hoc/toJS/toJS";

import { makePaymentMethods } from "./selectors";

import { selectUserAddress } from "../ChangeAddress/selectors";

import { placeOrder } from "./actions";

const mapStateToProps = createStructuredSelector({
  cartDetailsObj: makeSelectCartItems(),
  isOrderApiFetching: makeSelectOrderApiFetching(),
  currentOrderAPIStatus: makeSelectOrderAPIStatus(),
  userAddress: selectUserAddress(),
  paymentMethods: makePaymentMethods(),
});

const mapDispatchToProps = dispatch => {
  return {
    submitCODOrder: data => dispatch(placeOrder(data)),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Checkout));
