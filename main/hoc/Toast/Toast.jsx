import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { Snackbar } from 'react-native-paper';

import { makeSelectToastVisibility, makeSelectToastData } from './selectors';

import { dismissToastMsg } from './actions';

import toJS from '../toJS/toJS';

export const Toast = (props) => {

  const {
    toastVisibility=false,
    toastData={},
    dismissToastMsg
  } = props;

  const toastMsg = toastData.toastMsg || '';


  return (
      <Snackbar
        visible={toastVisibility}
        onDismiss={dismissToastMsg}
        duration={4000}
        style={{marginBottom:24}}
      >
        {toastMsg}
      </Snackbar>
  )
}

const mapStateToProps = createStructuredSelector({
  toastVisibility: makeSelectToastVisibility(),
  toastData: makeSelectToastData()
});

const mapDispatchToProps = dispatch => {
  return {
    dismissToastMsg: () => { dispatch(dismissToastMsg()) }
  }
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Toast));
