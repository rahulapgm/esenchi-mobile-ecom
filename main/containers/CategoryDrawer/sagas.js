import { put, takeLatest, select } from "redux-saga/effects";

import { makeSelectCategoryList } from "./selectors";

import { GET_CATEGORY_LIST } from "./constants";

import { setCategoryList } from "./actions";

import { triggerAPIRequest } from "../../utils/apiUtils";

export function* getAllCategories() {
  const response = yield triggerAPIRequest("getCategoryList");
  if (response && response.status == 200) {
    const { categories } = response.data;
    yield put(setCategoryList(categories));
  }
}
export function* watchForListRequest() {
  yield takeLatest(GET_CATEGORY_LIST, getAllCategories);
}

export default [watchForListRequest];
