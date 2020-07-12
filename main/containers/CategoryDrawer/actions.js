import {
  GET_CATEGORY_LIST,
  SET_CATEGORY_LIST
} from "./constants";

export const getCategoryList = () => {
  return {
    type: GET_CATEGORY_LIST
  };
};

export const setCategoryList = data => {
  return {
    type: SET_CATEGORY_LIST,
    data
  };
};
