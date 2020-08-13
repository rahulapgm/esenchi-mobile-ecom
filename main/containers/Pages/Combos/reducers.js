import { fromJS } from "immutable";
import * as ACTIONS from "./actions";

const { fetchCombosAction, fetchComboDetailsAction, addComboCartAction } = ACTIONS;

const initialState = fromJS({
  isFetchingCombos: false,
  isAddingCombos: false,
  list: [],
  selectedCombo: {}
});

export const combosReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchCombosAction.REQUEST:
      return state.set("isFetchingCombos", true);
    case fetchCombosAction.SUCCESS:
      return state
        .set("isFetchingCombos", false)
        .set("list", action.data);
    case fetchCombosAction.FAILURE:
      return state.set("isFetchingCombos", false);
    case fetchComboDetailsAction.REQUEST:
      return state.set("isFetchingCombos", true);
    case fetchComboDetailsAction.SUCCESS:
      return state
        .set("isFetchingCombos", false)
        .set("selectedCombo", action.data);
    case fetchComboDetailsAction.FAILURE:
      return state.set("isFetchingCombos", false);
    case addComboCartAction.REQUEST:
      return state.set("isAddingCombos", true);
    case addComboCartAction.SUCCESS:
      return state
        .set("isAddingCombos", false);
    case addComboCartAction.FAILURE:
      return state.set("isAddingCombos", false);
    default:
      return state;
  }
};