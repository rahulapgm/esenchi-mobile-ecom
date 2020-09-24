import {TRIGGER_TOAST_ON, TRIGGER_TOAST_OFF} from'./constants';


export const showToastMsg = data => {
  return {
    type: TRIGGER_TOAST_ON,
    data
  }
}

export const dismissToastMsg = data => {
  return {
    type: TRIGGER_TOAST_OFF,
    data
  }
}
