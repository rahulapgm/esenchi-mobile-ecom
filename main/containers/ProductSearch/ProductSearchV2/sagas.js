import { takeLatest, put } from "redux-saga/effects";

import { GET_SEARCH_SUGGESTION } from "./constants";

import { setSearchSuggestion } from "./actions";
import triggerAPIRequest from "../../../utils/apiUtils";

export function* fetchSearchSuggestions(actionObj) {
  const data = actionObj && actionObj.data;
  try {
    const response = yield triggerAPIRequest("searchSuggestions", "POST", data);
    if (response && response.status == 200) {
      const docs = response.data.docs || {};
      const suggestionData = [];

      docs.map((item) => {
        if (item.searchTag) {
          suggestionData.push(item.searchTag.trim());
        }
      });

      console.log(suggestionData);

      yield put(setSearchSuggestion(suggestionData));
    }
  } catch (e) {}
}

export function* watchForListRequest() {
  yield takeLatest(GET_SEARCH_SUGGESTION, fetchSearchSuggestions);
}

export default [watchForListRequest];
