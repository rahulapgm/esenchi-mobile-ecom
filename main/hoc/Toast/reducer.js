import { fromJS } from "immutable";

import {
  TRIGGER_TOAST_ON,
  TRIGGER_TOAST_OFF
} from "./constants";

const initialState = fromJS({
  toastVisibility: false,
  toastData: {}
});

export const toastReducers = (
  state = initialState,
  { type, data, error = {} }
) => {
  switch (type) {
    case TRIGGER_TOAST_ON: return state.set('toastVisibility',true).set('toastData',data);
    case TRIGGER_TOAST_OFF: return state.set('toastVisibility',false).set('toastData',{});
    default: return state;
  }
};

export default toastReducers;
