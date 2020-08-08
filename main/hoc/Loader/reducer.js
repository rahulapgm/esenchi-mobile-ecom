import { fromJS } from "immutable";

import { CLOSE_LOADER, SHOW_LOADER } from "./constants";

const initialState = fromJS({
  showLoader: false
});

export const loaderReducers = (
  state = initialState,
  { type, data, error = {} }
) => {
  switch (type) {
    case CLOSE_LOADER:
      return state.set("showLoader", false);
    case SHOW_LOADER:
      return state.set("showLoader", true);
    default:
      return state;
  }
};

export default loaderReducers;
