import { createSelector } from "reselect";
import { fromJS } from "immutable";

const comboState = state => fromJS(state.get("combos"));

export const getLoadingState = () =>
  createSelector(
    comboState,
    state => state.get("isFetchingCombos")
  );

export const getAddComboState = () =>
  createSelector(
    comboState,
    state => state.get("isAddingCombos")
  );

export const getComboState = () =>
  createSelector(
    comboState,
    state => state.get("list")
  );

export const getComboDetailsState = () =>
  createSelector(
    comboState,
    state => state.get("selectedCombo")
  );
