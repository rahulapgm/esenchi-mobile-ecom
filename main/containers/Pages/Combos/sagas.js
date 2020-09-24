import { put, takeLatest, call } from "redux-saga/effects";

import { fetchComboDetailsAction, fetchCombosAction, addComboCartAction } from "./actions";

import triggerAPIRequest from "../../../utils/apiUtils";
import { navigate } from "../../../../RootNavigation";

export function* getCombos() {
  try {
    const response = yield call(triggerAPIRequest, "getCombos", "GET");
    yield put(fetchCombosAction.success(response.data));
  } catch (error) {
    yield put(fetchCombosAction.failure());
  }
}

export function* getComboDetails({ data }) {
  try {
    const response = yield call(triggerAPIRequest, "getComboDetails", "POST", data);
    yield put(fetchComboDetailsAction.success(response.data));
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
    yield put(addComboCartAction.success(response.data));
    navigate(routeName, { screen });
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
