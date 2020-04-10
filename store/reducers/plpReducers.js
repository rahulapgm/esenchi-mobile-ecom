import {
  FETCH_ALL_PRODUCTS,
  GET_PRODUCTS,
  SHOW_LOADER,
  HIDE_LOADER
} from "../../constants/productLoadConstants";

const initialState = {
  products: [
    {
      productId: 1,
      displayName: "Carrot100000",
      productPrice: 20,
      stockInKg: 10,
      inStock: true
    }
  ],
  loader: false
};

export const plpReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      //console.log(FETCH_ALL_PRODUCTS, state);
      return { ...state, products: action.products };
    case GET_PRODUCTS:
      //console.log(GET_PRODUCTS, state);
      return state;
    case SHOW_LOADER:
      //console.log(SHOW_LOADER, state);
      return { ...state, loader: true };
    case HIDE_LOADER:
      //console.log(HIDE_LOADER, state);
      return { ...state, loader: false };
    default:
      return state;
  }
};
