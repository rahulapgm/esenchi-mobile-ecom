import { combineReducers } from "redux-immutable";
import { productListReducers } from "../../main/containers/PLP/reducers";
import { loginReducer } from "../../main/containers/Pages/UserAuth/reducers";
import { cartReducers as Cart } from "../../main/containers/Pages/Cart/reducer";
import { categoryDrawerReducers as categoryDrawer } from "../../main/containers/CategoryDrawer/reducers";
import { productListReducers as searchResults } from "../../main/containers/ProductListing/reducers";

export default combineReducers({
  loginReducer,
  productListReducers,
  Cart,
  categoryDrawer,
  searchResults
});
