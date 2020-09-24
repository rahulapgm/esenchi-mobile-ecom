import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import toJS from "../../../../hoc/toJS/toJS";
import {
  getLoadingState,
  getComboDetailsState,
  getAddComboState
} from "../selectors";
import ComboDetailComponent from "../../../../components/Pages/Combos/ComboDetail";
import * as ACTIONS from "../actions";

const ComboDetail = props => {
  return <ComboDetailComponent {...props} />;
};

const mapStateToProps = createStructuredSelector({
  isFetchingCombos: getLoadingState(),
  selectedCombo: getComboDetailsState(),
  isAddingCombos: getAddComboState()
});

const mapDispatchToProps = {
  fetchComboDetails: ACTIONS.fetchComboDetailsAction.request,
  addComboCart: ACTIONS.addComboCartAction.request
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(ComboDetail));
