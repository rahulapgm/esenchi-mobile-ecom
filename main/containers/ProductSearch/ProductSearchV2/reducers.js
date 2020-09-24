import { fromJS } from "immutable";

import {
  SET_SEARCH_SUGGESTION
} from './constants';

const initialState = fromJS({ searchSuggestions: [] });

export const productSearchReducers = (
  state = initialState,
  { type, data, error = {} }
) => {
  switch (type){
    case SET_SEARCH_SUGGESTION:
      return state.set("searchSuggestions", data);

    default:
      return state;
  }
};

export default productSearchReducers;
