import {
  VIEW_CART_ITEMS,
  VIEW_CART_ITEMS_SUCCESS,
  VIEW_CART_ITEM_ERROR,
  UPDATE_CURRENT_ORDER,
  ORDER_API_FETCHING,
  UPDATE_ORDER_API_STATUS,
  REMOVE_CART_ITEM
} from "./constants";

export const viewCartItems = () => {
  return {
    type: VIEW_CART_ITEMS
  };
};

export const viewCartItemsSucess = data => {
  return {
    type: VIEW_CART_ITEMS_SUCCESS,
    data
  };
};

export const viewCartItemsError = data => {
  console.log("cart error triggered");
  return {
    type: VIEW_CART_ITEM_ERROR,
    data
  };
};

export const updateCurrentOrder = data => {
  return {
    type: UPDATE_CURRENT_ORDER,
    data
  }
}

export const orderAPIFetching = data => {
  return {
    type: ORDER_API_FETCHING,
    data
  }
}

export const updateOrderAPIStatus = data => {
  return {
    type: UPDATE_ORDER_API_STATUS,
    data
  }
}

export const removeCartItem = data => {
  return {
    type: REMOVE_CART_ITEM,
    data
  }
}
