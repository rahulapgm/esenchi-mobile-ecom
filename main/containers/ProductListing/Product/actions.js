import { ADD_PRODUCT_TO_CART } from './constants';

export const addProductToCart = (data) => {
	return {
		type: ADD_PRODUCT_TO_CART,
		data
	}
}
