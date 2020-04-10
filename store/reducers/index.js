import { combineReducers } from 'redux-immutable';
import { plpReducers } from "./plpReducers";
import { loginReducer } from "../../main/containers/Pages/UserAuth/reducers";
export default combineReducers({
  loginReducer,
  plpReducers
});
