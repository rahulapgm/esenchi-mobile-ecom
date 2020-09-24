import { fromJS } from "immutable";

import {
  SET_PRODUCTS_ON_CATEGORY,
  CLEAR_ALL_PRODUCTS_FROM_STORE,
  SHOW_PRODUCT_LIST_LOADER
} from "./constants";

const initialState = fromJS({ productList: [], isAllDocumentLoaded: false });

export const productListReducers = (
  state = initialState,
  { type, data, error = {} }
) => {
  switch (type) {
    case SET_PRODUCTS_ON_CATEGORY: {
      const { docs, isAllDocumentLoaded } = data;
      const prevProductList = state.get("productList");
      let producList = [...prevProductList, ...docs];
      return state
        .set("productList", producList)
        .set("isAllDocumentLoaded", isAllDocumentLoaded);
    }
    case CLEAR_ALL_PRODUCTS_FROM_STORE:
      return state.set("productList", fromJS({}));

    case SHOW_PRODUCT_LIST_LOADER:
      return state.set("showProductListLoader", data);

    default:
      return state;
  }
};

export default productListReducers;
