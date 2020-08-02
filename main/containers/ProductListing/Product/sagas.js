import { ADD_PRODUCT_TO_CART } from './constants';

export function* updateCartItem({data}) {
  data.customerPh = "+919633882121";
  const response = yield triggerAPIRequest("addCartItem", "POST", data);
  if (response && response.status == 200) {
  } else {
    yield put(getProductsError(response));
  }
}



export function* watchForListRequest() {
  yield takeLatest(ADD_PRODUCT_TO_CART, updateCartItem);
}

export default [watchForListRequest];
