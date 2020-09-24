import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import toJS from "../../../hoc/toJS/toJS";
import {
  getComboState,
  getLoadingState,
  getComboDetailsState
} from "./selectors";
import ComboComponent from "../../../components/Pages/Combos";
import * as ACTIONS from "./actions";

const Combos = props => {
  return <ComboComponent {...props} />;
};

const mapStateToProps = createStructuredSelector({
  isFetchingCombos: getLoadingState(),
  list: getComboState(),
  selectedCombo: getComboDetailsState()
});

const mapDispatchToProps = {
  fetchCombos: ACTIONS.fetchCombosAction.request
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Combos));
