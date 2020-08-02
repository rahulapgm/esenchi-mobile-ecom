import { combineReducers } from "redux-immutable";
import { loginReducer } from "../../main/containers/Pages/UserAuth/reducers";
import { cartReducers as Cart } from "../../main/containers/Pages/Cart/reducer";
import { categoryDrawerReducers as categoryDrawer } from "../../main/containers/CategoryDrawer/reducers";
import { productListReducers as searchResults } from "../../main/containers/ProductListing/reducers";
import { toastReducers as toast } from "../../main/hoc/Toast/reducer";
import { productSearchReducers as productSearch } from "../../main/containers/ProductSearch/ProductSearchV2/reducers";

export default combineReducers({
  loginReducer,
  Cart,
  categoryDrawer,
  searchResults,
  toast,
  productSearch
});
