import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

import { GET_PRODUCTS } from "../../constants/productLoadConstants";
import { fetchAllProducts, toggleLoader } from "../actions";

export function* fetchProducts() {
  console.log("pass");
  yield put(toggleLoader(false));
  const products = yield axios.get("http://192.168.0.27:3366/api/products");
  yield put(fetchAllProducts(products.data.obj.data));
  yield put(toggleLoader(true));
}

export function* watchGetProducts() {
  yield takeEvery(GET_PRODUCTS, fetchProducts);
}

export default function* rootSaga() {
  yield all([watchGetProducts()]);
}
