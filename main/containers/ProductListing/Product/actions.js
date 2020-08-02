import { ADD_PRODUCT_TO_CART, IS_UPDATING_PRODUCT_ITEM, BASE } from './constants';
import { createSignalAction } from "../../../../store/reduxUtils";

// export const addProductToCart = (data) => {
// 	return {
// 		type: ADD_PRODUCT_TO_CART,
// 		data
// 	};
// };

export const isUpdatingCartItem = data => {
	return {
		type: IS_UPDATING_PRODUCT_ITEM,
		data
	};
};

export const addToCartAction = createSignalAction(BASE, ADD_PRODUCT_TO_CART);
