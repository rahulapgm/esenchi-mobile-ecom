import { combineReducers } from "redux-immutable";
import { loginReducer } from "../../main/containers/Pages/UserAuth/reducers";
import { cartReducers as Cart } from "../../main/containers/Pages/Cart/reducer";
import { categoryDrawerReducers as categoryDrawer } from "../../main/containers/CategoryDrawer/reducers";
import { productListReducers as searchResults } from "../../main/containers/ProductListing/reducers";
import { toastReducers as toast } from "../../main/hoc/Toast/reducer";
import { loaderReducers as loader } from "../../main/hoc/Loader/reducer";
import { productSearchReducers as productSearch } from "../../main/containers/ProductSearch/ProductSearchV2/reducers";
import { productCartReducer as productCart } from "../../main/containers/ProductListing/Product/reducers";
import { addressReducers as userAddressDetails } from "../../main/containers/Pages/ChangeAddress/reducers";
import { combosReducer } from "../../main/containers/Pages/Combos/reducers";

export default combineReducers({
  loginReducer,
  Cart,
  categoryDrawer,
  searchResults,
  toast,
  productSearch,
  productCart,
  userAddressDetails,
  loader,
  combos: combosReducer
});
