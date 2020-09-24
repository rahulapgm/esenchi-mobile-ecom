import { createSignalAction } from "../../../../store/reduxUtils";
import * as ACTIONS from "./constants";

export const fetchCombosAction = createSignalAction(ACTIONS.BASE, ACTIONS.FETCH_COMBOS);
export const fetchComboDetailsAction = createSignalAction(ACTIONS.BASE, ACTIONS.FETCH_COMBO_DETAILS);
export const addComboCartAction = createSignalAction(ACTIONS.BASE, ACTIONS.ADD_COMBO_CART);
