import {
  GET_SEARCH_SUGGESTION,
  SET_SEARCH_SUGGESTION
} from './constants';

export const getSearchSuggestion = (data) => {
  return {
    type: GET_SEARCH_SUGGESTION,
    data
  }
}

export const setSearchSuggestion = (data) => {
  return {
    type: SET_SEARCH_SUGGESTION,
    data
  }
}
