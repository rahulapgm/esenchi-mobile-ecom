
import {
  UPDATE_ITEM_QUANTITY,
  UPDATE_FETCHING_PRODUCT_ID
} from './constants';

export const updateItemQuantity = data => {
  return {
    type: UPDATE_ITEM_QUANTITY,
    data
  }
}

export const updateFetchingProductId = data => {
  return {
    type: UPDATE_FETCHING_PRODUCT_ID,
    data
  }
}
