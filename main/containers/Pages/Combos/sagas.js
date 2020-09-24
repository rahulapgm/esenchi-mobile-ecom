import { put, takeLatest, call } from "redux-saga/effects";

import { fetchComboDetailsAction, fetchCombosAction, addComboCartAction } from "./actions";

import triggerAPIRequest from "../../../utils/apiUtils";

export function* getCombos() {
  try {
    const response = yield call(triggerAPIRequest, "getCombos", "POST", {comboCategory:""});
    if(response && response.status === 200){
      yield put(fetchCombosAction.success(response.data));
    }
  } catch (error) {
    yield put(fetchCombosAction.failure());
  }
}

export function* getComboDetails({ data }) {
  try {
    const response = yield call(triggerAPIRequest, "getComboDetails", "POST", data);
    if (response && response.status == 200) {
      yield put(fetchComboDetailsAction.success(response.data));
    }
  } catch (error) {
    yield put(fetchComboDetailsAction.failure());
  }
}

export function* addComboCart({ data }) {
  try {
    const { navigate, routeName, screen, ...payload } = data;
    const response = yield call(
      triggerAPIRequest,
      "addComboCart",
      "POST",
      payload
    );
    if(response && response.status == 200){
      yield put(addComboCartAction.success(response.data));
      navigate(routeName, { screen });
    }
  } catch (error) {
    yield put(addComboCartAction.failure());
  }
}


export function* watchForListRequest() {
  yield takeLatest(fetchCombosAction.REQUEST, getCombos);
  yield takeLatest(fetchComboDetailsAction.REQUEST, getComboDetails);
  yield takeLatest(addComboCartAction.REQUEST, addComboCart);
}

export default [watchForListRequest];
