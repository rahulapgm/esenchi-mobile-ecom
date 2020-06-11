import { combineReducers } from "redux-immutable";
import { productListReducers } from "../../main/containers/PLP/reducers";
import { loginReducer } from "../../main/containers/Pages/UserAuth/reducers";
export default combineReducers({
	loginReducer,
	productListReducers,
});
