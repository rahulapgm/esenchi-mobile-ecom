import { fromJS } from "immutable";

import { SET_CATEGORY_LIST } from "./constants";

const initialState = fromJS({ categoryList: [] });

export const categoryDrawerReducers = (
  state = initialState,
  { type, data, error = {} }
) => {
  switch (type) {
    case SET_CATEGORY_LIST:
      return state.set("categoryList", data);
    default:
      return state;
  }
};

export default categoryDrawerReducers;
