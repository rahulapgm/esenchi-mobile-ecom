import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import OrderConfirmation from "../../../components/Pages/OrderConfirmation/OrderConfirmation";
import toJS from "../../../hoc/toJS/toJS";
import { makeSelectPlacedOrderData } from "../Checkout/selectors";

const mapStateToProps = createStructuredSelector({
  placedOrderData: makeSelectPlacedOrderData()
});

const mapDispatchToProps = dispatch => {
  return {};
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(OrderConfirmation));
