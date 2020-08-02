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

import { selectUserAddress } from "../ChangeAddress/selectors";

const mapStateToProps = createStructuredSelector({
  cartDetailsObj: makeSelectCartItems(),
  isOrderApiFetching: makeSelectOrderApiFetching(),
  currentOrderAPIStatus: makeSelectOrderAPIStatus(),
  userAddress: selectUserAddress()
});

const mapDispatchToProps = dispatch => {
  return {};
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Checkout));
