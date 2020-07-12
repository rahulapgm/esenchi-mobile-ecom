import { put, takeLatest } from "redux-saga/effects";

import {
  GET_CATEGORY_LIST
} from "./constants";

import {
  setCategoryList
} from "./actions";

import { triggerAPIRequest } from "../../utils/apiUtils";

export function* getAllCategories() {
  const response = yield triggerAPIRequest("getCategoryList");
  console.log("response", response);
  if (response && response.status === 200) {
    console.log(response.data);
    const { categories } = response.data;
    console.log("categories", categories);
    yield put(setCategoryList(categories));
  } else if (response.data) {
    console.log("categories not found");
  }
}
export function* watchForListRequest() {
  yield takeLatest(GET_CATEGORY_LIST, getAllCategories);
}

export default [watchForListRequest];
