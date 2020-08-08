import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import ChangeAddress from "../../../components/Pages/ChangeAddress/ChangeAddress";
import toJS from "../../../hoc/toJS/toJS";

import {saveAddress} from './actions';

import { selectUserPincode, selectUserLandMark, selectUserAddress, selectIsUpdating, selectUserName } from './selectors';

const mapStateToProps = createStructuredSelector({
  userPincode: selectUserPincode(),
  userLankMark: selectUserLandMark(),
  userAddress: selectUserAddress(),
  isUpdating: selectIsUpdating(),
  userName: selectUserName()
});

const mapDispatchToProps = dispatch => {
  return {
    saveUserAddress: (data) => dispatch(saveAddress(data)),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(ChangeAddress));
